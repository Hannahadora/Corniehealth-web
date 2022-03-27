<template>
  <div class="c-wrapper">
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
            :to="`/pharmacy/search-result/product-details/${product.name}`"
            v-for="(product, idx) in products"
            :key="idx"
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
            <div class="flex items-center justify-center mb-6">
              <button
                type="button"
                class="text-base font-bold border border-indigo-900 rounded c-indigo bg-white px-9 py-3"
                @click="$router.push('/signin')"
              >
                Add to cart
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
@Component({
  components: {},
})
export default class ProductDetails extends Vue {
  products = [
    {
      name: "Anti-malaria  bundle",
      oldPrice: "N13, 950.00",
      newPrice: "N13, 950.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (3).png",
    },
    {
      name: "Panadol Extra",
      oldPrice: "",
      newPrice: "N1000.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (4).png",
    },
    {
      name: "Medicine aid",
      oldPrice: "N6, 950.00",
      newPrice: "NGN3,400.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (5).png",
    },
    {
      name: "Nature’s Field Vitamin",
      oldPrice: "",
      newPrice: "NGN8,100.00",
      rate: "/images/book-appointment/ratings.png",
      image: "/images/image 1 (6).png",
    },
  ]
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
