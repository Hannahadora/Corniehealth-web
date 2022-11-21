<template>
	<div class="w-full relative top-0">
		<div
			class="flex flex-col h-screen bg-white px-6 overflow-y-scroll py-6"
		>
			<div class="flex items-center justify-end mt-5">
				<icon-btn @click="$emit('close')">
					<arrow-left-icon stroke="#000" />
				</icon-btn>
				<div class="w-full">
					<h2
						class="font-bold float-left text-2xl text-primary ml-3 -mt-1 capitalize"
					>
						Add to cart
					</h2>
					<cancel-red-bg
						class="float-right cursor-pointer"
						@click="$emit('close')"
					/>
				</div>
			</div>
			<div class="w-full">
				<p class="my-4 mb-6">How would you like to receive this item?</p>
				<div class="w-full flex flex-col items-center justify-center">
					<div
						class="w-full border border-gray-100 cursor-pointer hover:border-danger px-2 py-6 flex flex-col items-center justify-center mb-2"
						:class="{ 'border border-danger': shippingMethod === 'in-store' }"
						@click="shippingMethod = 'in-store'"
					>
						<in-store class="mb-3" />
						<div class="mr-3 text-center">
							<p class="mb-3 text-xs font-semibold">In-store Pickup</p>
							<p class="small-p-10 mb-3">
								In-stock at MedPlus, 18 Admiralty Way, Lekki, Lagos
							</p>
							<p class="small-p-10 text-accent-blue">
								Instant Pickup: Pay & Pickup
							</p>
						</div>
					</div>
					<div
						class="w-full border border-gray-100 cursor-pointer hover:border-danger px-2 py-6 flex flex-col items-center justify-center mb-2"
						:class="{ 'border border-danger': shippingMethod === 'same-day' }"
						@click="shippingMethod = 'same-day'"
					>
						<same-day class="mb-3" />
						<div class="mr-3 text-center">
							<p class="mb-3 text-xs font-semibold">Same Day Delivery</p>
							<p class="small-p-10 mb-3">Delivered within 12 hours</p>
							<p class="small-p-10 text-accent-blue">
								Orders placed after 6pm will be delivered the next day.
							</p>
						</div>
					</div>
					<div
						class="w-full border border-gray-100 cursor-pointer hover:border-danger px-2 py-6 flex flex-col items-center justify-center mb-2"
						:class="{ 'border border-danger': shippingMethod === 'standard-shipping' }"
						@click="shippingMethod = 'standard-shipping'"
					>
						<standard-shipping class="mb-3" />
						<div class="text-center">
							<p class="mb-3 text-xs font-semibold">Standard Shipping</p>
							<p class="small-p-10 mb-3">Delivered within 3-7 business days</p>
							<p class="small-p-10 text-accent-blue">
								Free shipping for orders above N10,000 or ship to store free.
							</p>
						</div>
					</div>
				</div>
				<p class="mt-4 mb-6 text-sm">
					*Orders comprising items from different stores may be shipped and
					charged differently!
				</p>

				<div
					class="flex xl:flex-row flex-col items-center xl:justify-end justify-center mt-8"
				>
					<button
						class="xl:mr-2 xl:mb-0 mb-6 xl:w-auto w-full bg-white px-10 py-3 text-primary border-primary border-2 rounded-xl"
						@click="$emit('close')"
					>
						Cancel
					</button>
					<div class="flex bg-danger rounded-xl px-3">
						<div
							class="flex items-center justify-center text-white font-bold border-r border-white pr-3 py-4"
						>
							<p class="mr-2 font-bold text-xs">{{ item.quantity || 1 }}</p>
							<div class="flex flex-col justify-center">
								<chevron-white-up
									class="cursor-pointer"
									@click="increaseQuantity(item)"
								/>
								<chevron-white-down
									class="cursor-pointer"
									@click="decreaseQuantity(item)"
								/>
							</div>
						</div>
						<div class="w-11/12 py-4 flex items-center justify-center pl-3">
							<button
								class="text-white font-bold text-center"
								@click.stop="goToCart"
							>
								Continue to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Prop } from "vue-property-decorator"
import { namespace } from "vuex-class";
// import search from "@/plugins/search";
// import { CornieUser } from "@/types/user";

import CornieBtn from "@/components/CButton.vue";
import CornieSelect from "@/components/CornieSelect.vue";
import CornieDialog from "@/components/CornieDialog.vue";
import ChevronWhiteDown from "@/components/icons/chevronwhitedown.vue";
import ChevronWhiteUp from "@/components/icons/chevronwhiteup.vue";
// import ArrowLeftIcon from "@/components/icons/arrowleft.vue";

// import InStore from "@/components/icons/in-store.vue";
// import SameDay from "@/components/icons/same-day.vue";
// import StandardShipping from "@/components/icons/standard-shipping.vue";
// import CancelRedBg from "@/components/icons/cancel-red-bg.vue";

// const account = namespace("user");
const cartStore = namespace("cart");

@Component({
  components: {
    CornieDialog,
    CornieSelect,
    CornieBtn,
    ChevronWhiteDown,
    ChevronWhiteUp,
    // InStore,
    // SameDay,
    // StandardShipping,
    // CancelRedBg,
    // ArrowLeftIcon,
  },
})
export default class AddToCartModal extends Vue {
  loading: Boolean = false;
  shippingMethod = "standard-shipping";

  // @account.Getter
  // cornieUser!: CornieUser;

  @cartStore.Mutation
    addToCart!: (item: any) => void;

  @Prop({ type: String, default: "" })
    id!: "";

  @Prop({ type: Object, default: {} })
    item!: any;

  // get userId() {
  //   return this.cornieUser?.id;
  // }

  goToCart() {
    this.addToCart(this.item);
    this.$emit("close")
  }

  increaseQuantity(item: any) {
    let qty
    if(item.quantity){
      qty = item.quantity 
    } else {
      qty = 1
    }
    return qty++
  }

  decreaseQuantity(item: any) {
    let qty
    if(item.quantity){
      qty = item.quantity 
    } else {
      qty = 1
    }
    return qty--
  }

  async created() {}
}
</script>

<style scoped>
.info-container {
  background: #ffffff;
  border: 0.2px solid #c2c7d6;
  box-sizing: border-box;
  box-shadow: 0px 15px 40px rgba(20, 23, 31, 0.08);
  border-radius: 16px;
}

.small-p-10 {
  font-size: 10px;
}

.text-accent-blue {
  color: #114ff5;
}



/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #252525;
  border-radius: 2px;
}
</style>
