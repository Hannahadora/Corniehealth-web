<template>
  <div class="bg-white mb-auto shadow-lg p-3 mt-2 rounded-lg w-full">
    <div class="w-full px-16">
      <span
        class="flex flex-row w-full justify-between border-b-2 font-bold mb-10 text-xl text-primary py-2"
      >
        Cart
      </span>
    </div>

    <div
      class="my-10 px-16 flex items-center cursor-pointer"
      @click="$router.back()"
    >
      <chevronleft-blue class="mr-2" />
      <p class="font-medium text-accent-blue text-sm">Continue Shopping</p>
    </div>

    <div class="px-16 grid grid-cols-3">
      <slot name="default"> </slot>
      <div class="ml-20 px-3">
        <slot name="order-summary">
          <order-summary
            :summaryUrl="summaryUrl"
            :payloadItem="payloadItem"
            @checkout="$router.push(checkoutUrl)"
          />
        </slot>
      </div>
    </div>

    <div class="mt-9 px-16 hidden">
      <div class="grid grid-cols-3 gap-6">
        <div class="bg-l-blue col-span-2 flex items-center">
          <div class="px-9 py-5">
            <p class="font-bold mb-2">TAKE CHARGE OF YOUR HEALTH, TODAY.</p>
            <p class="text-xs mb-2">
              Sign Up to the Cornie Health and enjoy better healthcare outcomes.
              Engage with doctors, shop medicines, book diagnostic tests, etc.
              available 24/7, from anywhere.
            </p>
            <button class="text-sm bg-danger text-white rounded-3xl py-2 px-12">
              SignUp
            </button>
          </div>
          <div>
            <cart-health-frame />
          </div>
        </div>

        <div class="ml-20 flex items-center">
          <div class="pt-7 pb-6 px-5">
            <p class="text-xs mb-2">
              Have your personal and family health information at your
              fingertips with Cornie Health. You can message your doctors, book
              & manage appointments, and be more involved in managing your
              health.
            </p>
            <p class="text-xs text-danger underline cursor-pointer">
              Learn More
            </p>
          </div>
          <div>
            <cart-health-frame-two />
          </div>
        </div>
      </div>
    </div>
  </div>
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
import { Component, Vue, Prop } from "nuxt-property-decorator"

// import AddToCartConfirmation from "./components/add-to-cart-confirmation.vue";
import OrderSummary from "./order-summary.vue"

@Component({
  name: "ShoppingCart",
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
    // AddToCartConfirmation,
    OrderSummary,
    DeliveryVan,
    SmallDeleteRed,
    QuestionCircleRed,
    CartHealthFrame,
    CartHealthFrameTwo,
  },
})
export default class ShoppingCartModal extends Vue {
  loading: Boolean = true
  @Prop({ type: Array, default: [], required: true })
  item: any[] = []

  @Prop({ type: String, required: true })
  checkoutUrl: string = ""

  @Prop({ type: String, required: true })
  summaryUrl!: string

  get payloadItem() {
    if (this.item.length == 0) return []
    return this.item.map((x: any) => {
      return {
        serviceId: x?.id,
        providerId: x?.organizationId,
        quantity: "1",
        // unitPrice: x?.newPrice,
        locationId: x?.locationId,
      }
    })
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
