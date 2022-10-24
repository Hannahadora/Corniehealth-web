<template>
  <shopping-carts
    :checkoutUrl="checkoutUrl"
    :summaryUrl="summaryUrl"
    :item="cart"
  >
    <div class="col-span-2 p-3">
      <p class="font-bold text-xl mb-11">Items</p>
      <div
        v-if="homeSampleCollection.length > 0"
        class="shipping-info-container px-6 py-4"
      >
        <div class="flex items-center">
          <delivery-van class="mr-2" />
          <p class="font-bold text=primary">
            Home Sample Collection ({{ homeSampleCollection.length }})
          </p>
        </div>
        <p class="mt-2 text-sm text=primary">
          You qualify for free home sample collection.
          <span class="text-danger cursor-pointer"> See terms</span>
        </p>
      </div>

      <div v-if="homeSampleCollection.length > 0" class="my-5">
        <div class="" v-for="(h, i) in homeSampleCollection" :key="i">
          <div class="px-4 py-3 shadow">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  :src="h.photo"
                  class="w-12 h-12 mr-5 rounded-full"
                  alt="item-photo"
                />
                <div class="">
                  <p class="text-sm">
                    {{ h.name }}
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <p class="font-bold text-sm mr-5">N{{ h.newPrice }}.00</p>
                <small-delete-red class="cursor-pointer" />
              </div>
            </div>
          </div>
          <div
            class="bg-cotton-ball px-3 py-3 mb-3 flex items-center justify-between shadow"
          >
            <div>
              <p class="text-sm font-semibold">
                Home sample collection
                <span
                  @click="
                    $router.push(
                      `/dashboard/patient/diagnostics-shopping/details/${h.id}`
                    )
                  "
                  class="text-accent-blue cursor-pointer underline"
                  >Change</span
                >
              </p>
            </div>

            <div>
              <CornieCheckbox label="Buy a wellness plan" />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="visitProviderCollection.length > 0"
        class="shipping-info-container px-6 py-4 mt-10"
      >
        <div class="flex items-center">
          <delivery-van class="mr-2" />
          <p class="font-bold text=primary">
            Provider Location ({{ visitProviderCollection.length }})
          </p>
        </div>
      </div>

      <div v-if="visitProviderCollection.length > 0" class="mt-5">
        <div class="" v-for="(v, j) in visitProviderCollection" :key="j">
          <div class="px-4 py-3 shadow">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  :src="v.photo"
                  class="w-12 h-12 mr-5 rounded-full"
                  alt="item-photo"
                />
                <div class="">
                  <p class="text-sm">
                    {{ v.name }}
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <p class="font-bold text-sm mr-5">N{{ v.newPrice }}.00</p>
                <small-delete-red class="cursor-pointer" />
              </div>
            </div>
          </div>
          <div
            class="bg-cotton-ball px-3 py-3 flex items-center justify-between shadow mb-3"
          >
            <div>
              <p class="text-sm font-semibold">
                Visit Provider Location
                <span
                  @click="
                    $router.push(
                      `/dashboard/patient/diagnostics-shopping/details/${v.id}`
                    )
                  "
                  class="text-accent-blue cursor-pointer underline"
                  >Change</span
                >
              </p>
            </div>
            <div>
              <CornieCheckbox label="Buy a wellness plan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </shopping-carts>
</template>

<script lang="ts">
import CornieBtn from "@/components/CButton.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import IconInput from "@/components/IconInput.vue"
import Cancel from "@/components/icons/cancel-red-stroke.vue"
import CartHealthFrameTwo from "@/components/icons/cart-health-frame-two.vue"
import CartHealthFrame from "@/components/icons/cart-health-frame.vue"
import Check from "@/components/icons/check-green-stroke.vue"
import ChevronleftBlue from "@/components/icons/chevronleft-blue.vue"
import ChevronLeftIcon from "@/components/icons/chevronleftorange.vue"
import ChevronRightIcon from "@/components/icons/chevronrightorange.vue"
import ChevronWhiteDown from "@/components/icons/chevronwhitedown.vue"
import ChevronWhiteUp from "@/components/icons/chevronwhiteup.vue"
import DeliveryVan from "@/components/icons/delivery-van.vue"
import FiveStar from "@/components/icons/five-star.vue"
import QuestionCircleRed from "@/components/icons/question-circle-red.vue"
import SmallDeleteRed from "@/components/icons/small-delete-red.vue"
import { Component, Vue } from "nuxt-property-decorator"

// import AddToCartConfirmation from "./components/add-to-cart-confirmation.vue";
import shoppingCarts from "@/components/labs/cart.vue"
@Component({
  name: "ShoppingCartComponent",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    CornieBtn,
    FiveStar,
    Cancel,
    Check,
    ChevronWhiteDown,
    ChevronWhiteUp,
    ChevronleftBlue,
    CornieCheckbox,
    IconInput,
    DeliveryVan,
    SmallDeleteRed,
    QuestionCircleRed,
    CartHealthFrame,
    CartHealthFrameTwo,
    shoppingCarts,
  },
})
export default class ShoppingCart extends Vue {
  loading: Boolean = true
  item: any = {}

  // cart = [] as any[];

  get homeSampleCollection() {
    return this.cart.filter(
      (x: any) => x?.serviceOption == "home sample collection"
    )
  }

  get visitProviderCollection() {
    return this.cart.filter(
      (x: any) => x?.serviceOption == "visit provider location"
    )
  }

  parseS(data: any) {
    return JSON.parse(data)
  }

  get cart() {
    let a = localStorage.getItem("cart")
    if (!a) return []
    return this.parseS(a)
  }

  get summaryUrl() {
    return `/api/v1/patient-portal/diagnostics/lab-order/summary`
  }

  get checkoutUrl() {
    return `checkout`
  }
}
</script>

<style scoped>
.sample-img {
  height: 110px;
  width: 200px;
}

.text-accent-blue {
  color: #114ff5;
}

.shipping-info-container {
  background: rgba(194, 199, 214, 0.3);
}

.bg-cotton-ball {
  background: #f0f4fe;
}

.bg-l-blue {
  background: #eef9ff;
}
</style>
