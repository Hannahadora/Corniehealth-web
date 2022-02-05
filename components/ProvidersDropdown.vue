<template>
	<div class="provider-dropdown xl:p-8 bg-white xl:shadow">
		<div>
			<div class="mb-6 flex items-center gap-2">
				<img src="/images/dd-icons/bx_bx-category-alt.svg" alt="" />
				<p class="text-razzmataz-pry">Provider Solution</p>
			</div>

			<div class="w-full grid xl:grid-cols-2 grid-cols-1 gap-2">
				<div class="flex flex-col">
					<div class="bg-cblue-100 py-1 px-2 flex items-center mb-6">
						<img class="mr-2" src="/images/dd-icons/products.svg" alt="" />
						<p>Products</p>
					</div>
					<NuxtLink
						v-for="(product, index) in products"
						:key="index"
						class="pl-10 mb-6"
						:to="`/providers/${product.category}/${product.link}`"
					><p class="capitalize" @click="$emit('closeSelf')">
						{{ product.name }}
					</p></NuxtLink
					>
				</div>

				<div class="flex flex-col">
					<div class="bg-cblue-100 py-1 px-2 flex items-center mb-6">
						<img class="mr-2" src="/images/dd-icons/practice-type.svg" alt="" />
						<p>Practice Type</p>
					</div>
					<NuxtLink
						v-for="(type, index) in practice_types"
						:key="index"
						class="pl-10 mb-6"
						:to="`/providers/${type.category}/${type.link}`"
					><p class="capitalize" @click="$emit('closeSelf')">
						{{ type.name }}
					</p></NuxtLink
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "ProvidersDropdown",
  components: {},
  data() {
    return {
      products: [
        {
          category: "products",
          name: "Patient experience",
          link: "patient-experience",
        },
        {
          category: "products",
          name: "Clinical (EMR/EMH)",
          link: "emr-emh",
        },
        {
          category: "products",
          name: "Practice Management",
          link: "practice-management",
        },
        {
          category: "products",
          name: "Billing & Collections",
          link: "billings&collection",
        },
        {
          category: "products",
          name: "Patient Portal",
          link: "patient-portal",
        },
        { category: "products", name: "Analytics", link: "analytics" },
        { category: "products", name: "Marketplace", link: "marketplace" },
      ],

      practice_types: [
        {
          category: "practice type",
          name: "Hospitals and clinics",
          link: "hospitals-and-clinics",
        },
        {
          category: "practice type",
          name: "Solo Practice",
          link: "solo-practice",
        },
        {
          category: "practice type",
          name: "Community Pharmacies",
          link: "community-pharmacies<",
        },
        {
          category: "practice type",
          name: "Diagnostics",
          link: "diagnostics",
        },
      ],
    }
  },

  mounted() {
  },
})
</script>

<style scoped>
.provider-dropdown {
  width: 563px;
  z-index: 99;
}

@media screen and (max-width: 1024px) {
  .provider-dropdown {
    width: 100%;
    z-index: auto;
  }
}
</style>
