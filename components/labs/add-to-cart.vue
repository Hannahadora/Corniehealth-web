<template>
  <div>
    <cornie-modal>
      <div>
        <div class="w-full">
          <p class="my-4 mb-6">How would you like us to collect sample?</p>
          <div class="flex flex-col space-y-7">
            <div
              class="flex cursor-pointer w-full items-center justify-center border text-center p-7 hover:shadow"
              @click="serviceOption = 'home sample collection'"
              :class="{
                'border-red-500': serviceOption == 'home sample collection',
              }"
            >
              <div class="flex-col py-10 space-y-1">
                <div class="text-primary font-bold">Home sample Collection</div>
                <span class="text-primary"
                  >A certified professional will collect your sample from your
                  preferred location</span
                >
              </div>
            </div>
            <div
              @click="serviceOption = 'visit provider location'"
              class="flex cursor-pointer w-full items-center justify-center text-center p-7 border hover:shadow"
              :class="{
                'border-red-500': serviceOption == 'visit provider location',
              }"
            >
              <div class="flex-col py-10 space-y-1">
                <div class="text-primary font-bold">
                  Visit Provider Location
                </div>
                <span class="text-primary"
                  >A certified professional will collect your sample from your
                  preferred location</span
                >
              </div>
            </div>
          </div>
          <p class="py-10 text-sm">
            *You may be charged seperately for each home sample collection when
            you select different test providers
          </p>
        </div>

        <div class="absolute bottom-0 w-full">
          <div class="flex justify-end space-x-3 px-6 py-2">
            <cornie-btn
              @click="show = false"
              class="border-primary border-2 px-1 mr-3 rounded-xl text-primary"
            >
              Cancel
            </cornie-btn>
            <cornie-btn
              @click="continueToCart"
              class="text-white bg-danger px-6 rounded-xl"
            >
              Add to cart
            </cornie-btn>
          </div>
        </div>
      </div>
    </cornie-modal>
  </div>
</template>
<script lang="ts">
import CornieModal from "~/components/CornieModal.vue"
import { Component, Vue, Prop, PropSync } from "nuxt-property-decorator"

@Component({
  components: {
    CornieModal,
  },
})
export default class addDiagnosticToCart extends Vue {
  @PropSync("modelValue", { type: Boolean, default: false })
  show!: boolean

  @Prop({ type: Object, default: {} })
  item!: any

  cart = [] as any[]

  serviceOption = ""

  parseS(data: any) {
    return JSON.parse(data)
  }

  stringFy(data: any) {
    return JSON.stringify(data)
  }

  continueToCart() {
    if (!this.serviceOption) return
    let a = localStorage.get("cart") || []
    if (!a) return
    this.cart = this.parseS(a)
    // console.log(this.cart, this.item);
    if (!this.cart) {
      this.cart = []
    }
    // this.cart = [];
    let doesItemExists = this.cart.find((x) => x.id == this.item.id)
    if (!doesItemExists) {
      this.cart.push({
        ...this.item,
        serviceOption: this.serviceOption,
      })
    }

    console.log(this.cart, this.item)
    localStorage.setItem("cart", this.stringFy(this.cart))
    this.$router.push("cart")
  }
}
</script>
