<template>
	<div class="c-wrapper">
		<div class="flex items-start">
			<div class="bg-white c-border rounded p-4 w-1/3 mr-7">
				<div>
					<img :src="dProduct.image" alt="" />
				</div>
				<div class="mt-6 grid grid-cols-4 gap-6">
					<img class="w-20 h-20 c-border" :src="dProduct.altImgmage1" alt="" />
					<img class="w-20 h-20 c-border" :src="dProduct.altImgmage2" alt="" />
					<img class="w-20 h-20 c-border" :src="dProduct.altImgmage3" alt="" />
					<img class="w-20 h-20 c-border" :src="dProduct.altImgmage4" alt="" />
				</div>
				<div class="flex items-center justify-center mt-6">
					<button
						type="button"
						class="w-full text-base font-bold border border-indigo-900 rounded c-indigo bg-white py-3 flex items-center justify-center"
						@click="$router.push('/signin')"
					>
						<img
							class="mr-2"
							src="/images/ant-design_shopping-cart-outlined.png"
							alt=""
						/>
						<span>Add to cart</span>
					</button>
				</div>
				<div class="flex items-center justify-center mt-6">
					<button
						type="button"
						class="w-full text-base font-bold bg-razzmataz-pry rounded text-white py-3 flex items-center justify-center"
						@click="$router.push('/signin')"
					>
						<img
							class="mr-2"
							src="/images/ant-design_shopping-cart-outlined.png"
							alt=""
						/>
						<span>Contact pharmacy</span>
					</button>
				</div>
				<div class="flex items-center justify-center mt-6">
					<button
						type="button"
						class="w-full text-base font-bold border border-indigo-900 rounded c-indigo bg-white py-3 flex items-center justify-center"
						@click="$router.push('/signin')"
					>
						<img
							class="mr-2"
							src="/images/ant-design_shopping-cart-outlined.png"
							alt=""
						/>
						<span>Chat now</span>
					</button>
				</div>
			</div>

			<div class="w-2/3 c-border p-4">
				<h2 class="c-indigo font-bold">{{ dProduct.name }}</h2>

				<h3 class="my-12 font-bold c-indigo">Description</h3>
				<p class="mb-12">
					Bevon Capsule is a combination of vitamins, minerals, and antioxidants
					that helps to ensure good health. It is used to treat vitamin
					deficiencies and anemia. This capsule helps to increase physical
					strength and immunity power. It improves nerve function and blood
					circulation. It boosts the energy levels and keeps active all day. It
					prevents oxidative stress and tissue damage.
				</p>

				<div class="border-b flex items-center">
					<div
						class="px-6 py-4 sub-titles-2 c-border cursor-pointer"
						:class="{
							'bg-razzmataz-pry text-white border-none': activeTab === 'product-details',
						}"
						@click="activeTab = 'product-details'"
					>
						Product Details
					</div>
					<div
						class="px-6 py-4 sub-titles-2 c-border cursor-pointer"
						:class="{
							'bg-razzmataz-pry text-white border-none': activeTab === 'pharmacy-profile',
						}"
						@click="activeTab = 'pharmacy-profile'"
					>
						Pharmacy Profile
					</div>
					<div
						class="px-6 py-4 sub-titles-2 c-border cursor-pointer"
						:class="{
							'bg-razzmataz-pry text-white border-none': activeTab === 'buyer-reviews',
						}"
						@click="activeTab = 'buyer-reviews'"
					>
						Buyer Reviews
					</div>
				</div>
				<div>
					<product-details v-if="activeTab === 'product-details'" />
					<pharmacy-profile v-if="activeTab === 'pharmacy-profile'" />
					<pharmacy-message />
				</div>
			</div>
		</div>

		<div class="bg-white rounded c-shadow p-4 mt-7 my-20">
			<div class="flex items-center justify-between mb-4">
				<h4 class="font-bold c-indigo">Pharmacy's popular products</h4>
				<hr class="w-1/2" />
				<div class="flex items-center">
					<p class="text-razzmataz-pry mr-2">View All</p>
					<img src="/images/bi_arrow-down (1).png" alt="" />
				</div>
			</div>

			<div class="mt-10">
				<div class="flex items-center justify-between">
					<div class="w-10/12 flex items-center">
						<p class="mr-4">Related tags:</p>
						<span class="tag-div mr-4">Multi-Vitamins</span>
						<span class="tag-div mr-4">Protein Supplements</span>
					</div>

					<div class="flex items-center">
						<img
							class="cursor-pointer mr-2"
							src="/images/akar-icons_chevron-right.png"
							alt=""
						/>
						<img
							class="cursor-pointer"
							src="/images/akar-icons_chevron-right (1).png"
							alt=""
						/>
					</div>
				</div>

				<div class="grid grid-cols-4 gap-2 mt-5">
					<NuxtLink
						v-for="(product, idx) in products"
						:key="idx"
						:to="`/pharmacy/search-result/product-details/${product.name}`"
						class="product-card"
					>
						<div class="flex flex-col items-center justify-center mb-6">
							<img :src="product.image" alt="" />
						</div>
						<span class="sub-titles-2 font-bold c-indigo mb-2">{{
							product.name
						}}</span>
						<img class="mb-2" :src="product.rate" alt="" />
						<div class="mb-6 flex items-center">
							<p v-if="product.oldPrice" class="mr-6 text-razzmataz-pry">
								{{ product.oldPrice }}
							</p>
							<p>{{ product.newPrice }}</p>
						</div>
						<div class="flex items-center justify-center my-6">
							<button
								type="button"
								class="w-full text-base font-bold border border-indigo-900 rounded c-indigo bg-white px-9 py-3 flex items-center"
								@click="$router.push('/signin')"
							>
								<img
									class="mr-2"
									src="/images/ant-design_shopping-cart-outlined.png"
									alt=""
								/>
								<span>Add to cart</span>
							</button>
						</div>
						<span class="sub-titles-2 font-bold c-indigo mb-2"
						>Product Info</span
						>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import PharmacyMessage from "~/components/Pharmacy/PharmacyMessage.vue"
import PharmacyProfile from "~/components/Pharmacy/PharmacyProfile.vue"
import ProductDetails from "~/components/Pharmacy/ProductDetails.vue"
@Component({
  components: {ProductDetails, PharmacyMessage, PharmacyProfile},
})
export default class ProductDetailsPage extends Vue {
  products = [
    {
      name: "Anti-malaria  bundle",
      oldPrice: "N13, 950.00",
      newPrice: "N13, 950.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (3).png",
      description:
        "Bevon Capsule is a combination of vitamins, minerals, and antioxidants that helps to ensure good health. It is used to treat vitamin deficiencies and anemia. This capsule helps to increase physical strength and immunity power. It improves nerve function and blood circulation. It boosts the energy levels and keeps active all day. It prevents oxidative stress and tissue damage.",
    },
    {
      name: "Panadol Extra",
      oldPrice: "",
      newPrice: "N1000.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (4).png",
      description:
        "Bevon Capsule is a combination of vitamins, minerals, and antioxidants that helps to ensure good health. It is used to treat vitamin deficiencies and anemia. This capsule helps to increase physical strength and immunity power. It improves nerve function and blood circulation. It boosts the energy levels and keeps active all day. It prevents oxidative stress and tissue damage.",
    },
    {
      name: "Medicine aid",
      oldPrice: "N6, 950.00",
      newPrice: "NGN3,400.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (5).png",
      description:
        "Bevon Capsule is a combination of vitamins, minerals, and antioxidants that helps to ensure good health. It is used to treat vitamin deficiencies and anemia. This capsule helps to increase physical strength and immunity power. It improves nerve function and blood circulation. It boosts the energy levels and keeps active all day. It prevents oxidative stress and tissue damage.",
    },
    {
      name: "Nature’s Field Vitamin",
      oldPrice: "",
      newPrice: "NGN8,100.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (6).png",
      description:
        "Bevon Capsule is a combination of vitamins, minerals, and antioxidants that helps to ensure good health. It is used to treat vitamin deficiencies and anemia. This capsule helps to increase physical strength and immunity power. It improves nerve function and blood circulation. It boosts the energy levels and keeps active all day. It prevents oxidative stress and tissue damage.",
    },
  ]

  activeTab = "product-details"

  dProduct() {
    return this.$store.getters["products/selectedProduct"]
  }
}
</script>

<style scoped>
.tag-div {
  padding: 4px 16px;
  background: #f6f8f9;
  border-radius: 100px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
}
</style>
