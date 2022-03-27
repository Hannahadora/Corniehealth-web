<template>
  <div class="mb-7">
    <div class="c-wrapper grid grid-cols-5 gap-7">
      <div class="bg-white c-shadow rounded">
        <div v-for="(category, idx) in categories" :key="idx">
          <div class="px-1 border-b py-4 flex items-center justify-between">
            <div class="flex items-center">
              <img class="mr-2" :src="category.icon" alt="" />
              <p>{{ category.title }}</p>
            </div>
            <img
              class="cursor-pointer"
              @click="genList = !genList"
              alt=""
              src="/images/ic_baseline-navigate-next.png"
            />
          </div>

          <div v-if="genList" class="px-8 pt-6">
            <div
              v-for="(item, idx) in category.items"
              :key="idx"
              class="mb-4 flex itesm-center justify-between"
            >
              <p>{{ item.name }}</p>
              <p>({{ item.total }})</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4">
        <div class="px-4 py-6 bg-white c-shadow rounded mb-10">
          <pharm-filter />
        </div>

        <div class="grid grid-cols-3 gap-4 mb-10">
          <div class="flex items-center c-shadow rounded bg-white px-2 py-4">
            <img src="/images/teenyicons_appointments-outline.png" alt="" />
            <div class="ml-4">
              <div class="subtitles-2 font-bold">100% Top Quality</div>
              <p>Quality quaranteed.</p>
            </div>
          </div>
          <div class="flex items-center c-shadow rounded bg-white px-2 py-4">
            <img src="/images/healthicons_doctor-male-outline (1).png" alt="" />
            <div class="ml-4">
              <div class="subtitles-2 font-bold">Free Delivery for Everone</div>
              <p>For orders above ₦10,000.</p>
            </div>
          </div>
          <div class="flex items-center c-shadow rounded bg-white px-2 py-4">
            <img src="/images/carbon_medication.png" alt="" />
            <div class="ml-4">
              <div class="subtitles-2 font-bold">Free Wellness Membership</div>
              <p>Subscribe to an item.</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded c-shadow p-4">
          <div class="flex items-center justify-between mb-4">
            <h4 class="font-bold">Shop our Best-selling Categories</h4>
            <hr class="w-1/2" />
            <div class="flex items-center">
              <p class="text-razzmataz-pry mr-2">View All</p>
              <img src="/images/bi_arrow-down (1).png" alt="" />
            </div>
          </div>

          <pharm-slider-1 />

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
              <div
                class="product-card"
                v-for="(product, idx) in products"
                :key="idx"
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
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded c-shadow p-4 mt-7">
          <div class="flex items-center justify-between mb-4">
            <h4 class="font-bold">Shop by category</h4>
            <p>Exercise Equipments</p>
            <p>Supports & Braces</p>
            <p>Other Health Food & Drinks</p>
            <div class="flex items-center">
              <p class="text-razzmataz-pry mr-2">View All</p>
              <img src="/images/bi_arrow-down (1).png" alt="" />
            </div>
          </div>

          <div class="bg-center bg-no-repeat bg-cover h-60 " style="background: url('/images/img 6 (1).png"></div>

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
              <div
                class="product-card"
                v-for="(product, idx) in products"
                :key="idx"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import PharmFilter from "~/components/PharmFilter.vue"
import PharmSlider1 from "~/components/PharmSlider1.vue"
@Component({
  components: {
    PharmFilter,
    PharmSlider1,
  },
})
export default class searchResult extends Vue {
  genList = false
  categories = [
    {
      title: "General Health",
      icon: "/images/carbon_health-cross.png",
      items: [
        { name: "Pain Relief", total: "100" },
        { name: "Cold & Cough", total: "50" },
        { name: "Allergies", total: "120" },
        { name: "Malaria Care", total: "120" },
      ],
    },
    {
      title: "Sexual Wellness",
      icon: "/images/ant-design_medicine-box-outlined.png",
      items: [],
    },
    {
      title: "Personal Care",
      icon: "/images/carbon_airline-passenger-care.png",
      items: [],
    },
    {
      title: "Devices",
      icon: "/images/akar-icons_devices.png",
      items: [],
    },
    {
      title: "Nutrition, Fitness & Supplements",
      icon: "/images/ri_medicine-bottle-line.png",
      items: [],
    },
    {
      title: "Other Categories",
      icon: "/images/bx_bx-category-alt.png",
      items: [],
    },
  ]

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
