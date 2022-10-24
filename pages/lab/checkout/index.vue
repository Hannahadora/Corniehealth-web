<template>
	<div>
		<shopping-checkout-component
			v-model="currentTab"
			:items="items"
			:cart-item="cart"
			@checkout="handleCheckOut"
		>
			<collection-info v-model="collectionDetails" />
			<review-info v-model="collectionDetails" />
			<div class="flex w-full items-center justify-center py-20">
				<div class="border shadow p-10">
					<order-summary
						:summary-url="summaryUrl"
						:payload-item="payloadItem"
						:hide-shopping-button="true"
						@checkout="$emit('checkout')"
					>
						<template #default="{ summary }"> order {{ summary }} </template>
					</order-summary>
				</div>
			</div>
		</shopping-checkout-component>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ShoppingCheckoutComponent from "@/components/labs/checkout.vue"
import OrderSummary from "@/components/labs/order-summary.vue"
import collectionInfo from "@/components/labs/collection-info.vue"
import reviewInfo from "@/components/labs/review-info.vue"

@Component({
  name: "ShoppingCheckout",
  components: {
    ShoppingCheckoutComponent,
    collectionInfo,
    reviewInfo,
    OrderSummary,
  },
})
export default class DiagnosticsCheckout extends Vue {
  items = ["Collection Info", "review", "payment"]
  currentTab = 0

  parseS(data: any) {
    return JSON.parse(data)
  }

  get cart() {
    const a = localStorage.getItem("cart")
    if (!a) return []
    return this.parseS(a)
  }

  get summaryUrl() {
    return `/api/v1/patient-portal/diagnostics/lab-order/summary`
  }

  get orderUrl() {
    return `/api/v1/patient-portal/diagnostics/lab-order`
  }

  get deliveryPerfUrl() {
    return `/api/v1/patient-portal/delivery-preferences/create`
  }

  cartContactInformation(data: any) {
    const a = localStorage.getItem("cart")
    if (!a) return {}
    const cart = this.parseS(a)
    console.log("cart", this.cart)
    const newCart = cart.map((el: any) => {
      el.collectionInformation = data
      return el
    })
    console.log("newcaer", newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  async handleCheckOut() {
    if (this.currentTab == 1) {
      this.cartContactInformation(this.collectionDetails)
    }
    if (this.currentTab == this.items.length - 2) {
      await this.createLabOrder()
    }
    this.currentTab += 1
  }

  createDeliveryPerference() {
    // const result = cornieClient.post('')
  }

  get payload() {
    return {
      scheduledDate: "2022-10-17",

      orderItems: this.payloadItem.map((x: any) => {
        return {
          ...x,
          providerDetails: {
            name: "Unknown Type: strinf",
            address: "string",
            phoneNumber: "string",
            website: "string",
          },
        }
      }),
    }
  }

  async createLabOrder() {
    try {
      const pending = this.$axios.post(this.orderUrl, this.payload)
      const response = await Promise.all([pending])
      console.log("labOrder", response[0].data)
    } catch (error) {}
  }

  get payloadItem() {
    if (this.cart.length == 0) return []
    return this.cart.map((x: any) => {
      return {
        serviceId: x?.id,
        providerId: x?.organizationId,
        quantity: "1",
        // unitPrice: x?.newPrice,
        locationId: x?.locationId,
      }
    })
  }

  collectionDetails = {
    fullName: "",
    email: "",
    phone: {
      dialCode: "",
      number: "",
    },
    address: "",
    apartment: "",
    collectionTime: "",
    purpose: "",
  }
}
</script>
