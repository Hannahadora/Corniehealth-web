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

		<div class="flex w-full justify-center items-center">
			<div class="md:w-2/4 w-full">
				<div class="flex items-center justify-center mt-9">
					<template v-for="(tab, index) in displayItems">
						<div :key="`tab-${index}`">
							<circle-red-bg
								class="cursor-pointer"
								@click="
									$router.push(
										'/dashboard/patient/shopping/checkout/delivery-info'
									)
								"
							/>
						</div>

						<div v-if="!isLast(index)" class="flex items-start w-full mt-0.5">
							<div class="h-0.5 w-full bg-danger"></div>
						</div>
					</template>
				</div>
				<div class="flex items-center justify-between mt-2 mb-2 capitalize">
					<template v-for="(tab, index) in displayItems">
						<div
							:key="`tab-${index}`"
							:class="{
								'md:-ml-9': !isLast(index),
								'md:-mr-7': isLast(index),
								'md:-ml-0 -ml-9': index == 1,
							}"
						>
							{{ tab.name }}
						</div>
					</template>
				</div>
			</div>
		</div>
		<div v-if="!isLastComponent" class="px-16 grid grid-cols-3 gap-x-40 py-20">
			<div class="col-span-2 border shadow p-10">
				<tab :vnode="component" />
			</div>
			<div v-if="!isLastComponent" class="col-span-1">
				<div class="top-40 sticky z-10">
					<order-summary
						:summary-url="summaryUrl"
						:payload-item="payloadItem"
						:hide-shopping-button="true"
						@checkout="$emit('checkout')"
					/>
				</div>
			</div>
		</div>
		<div v-else>
			<tab :vnode="component" />
		</div>
	</div>
</template>
<script lang="ts">
import { VNode } from "@vue/runtime-core"
import { Component, Vue, Prop, PropSync } from "nuxt-property-decorator"
import CircleRedBg from "@/components/icons/circle-red-bg.vue"
import OrderSummary from "@/components/labs/order-summary.vue"

@Component({
  name: "tab",
})
class Tab extends Vue {
  @Prop()
    vnode!: VNode

  render() {
    return this.vnode
  }
}

@Component({
  name: "ShoppingCheckout",
  components: {
    CircleRedBg,
    OrderSummary,
    Tab,
  },
})
export default class ShoppingCheckout extends Vue {
  @Prop({ type: Array, default: [] })
    items!: string[]

  @PropSync("modelValue", { type: Number, default: 0 })
    syncedValue!: number

  get displayItems() {
    return this.items.map(x => {
      return {
        name: x,
        completed: false,
      }
    })
  }

  @Prop({ type: Array, default: [], required: true })
    cartItem: any[] = []

  @Prop({ type: String, required: true })
    checkoutUrl: string = ""

  @Prop({ type: String, required: true })
    summaryUrl!: string

  get payloadItem() {
    if (this.cartItem.length == 0) return []
    return this.cartItem.map((x: any) => {
      return {
        serviceId: x?.id,
        providerId: x?.organizationId,
        quantity: "1",
        // unitPrice: x?.newPrice,
        locationId: x?.locationId,
      }
    })
  }

  isActive(index: number): boolean {
    return index == this.syncedValue
  }

  isLast(index: number): boolean {
    return index == this.items.length - 1
  }

  get component() {
    // @ts-ignore
    return this.$slots?.default()[this.syncedValue]
  }

  get isLastComponent() {
    return (
      // @ts-ignore
      this.$slots?.default().length > 1 &&
      // @ts-ignore
      this.syncedValue == this.$slots?.default().length - 1
    )
  }
}
</script>
