<template>
	<div>
		<div class="bg-white mb-auto shadow-lg p-3 mt-2 rounded-lg w-full">
			<shopping-page-component
				:title="title"
				:items="items"
				:details-url="detailsUrl"
				:delivery-types="deliveryTypes"
				@searchQuery="getQuery"
			>
				<template #sidebar>
					<medication-shopping-sidebar
						@locationQuery="getLocations"
						@pharmacyQuery="getPharmacies"
						@categoriesQuery="getCategories"
					/>
				</template>
			</shopping-page-component>

			<cornie-modal :model-value="show" right class="w-full h-full">
				<add-to-cart-confirmation
					:id="selectedItem.id"
					:item="selectedItem"
					@close="show = false"
				/>
			</cornie-modal>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Watch } from "vue-property-decorator"
import ShoppingPageComponent from "@/components/shopping/index.vue"
import MedicationShoppingSidebar from "@/components/shopping/components/medication-shoppings-sidebar.vue"
import CornieModal from "~/components/CornieModal.vue"

@Component({
  layout: "shopping",
  components: {
    MedicationShoppingSidebar,
    // AddToCartConfirmation,
    ShoppingPageComponent,
    CornieModal

  }
})


export default class searchResult extends Vue {
  loading: Boolean = true
  searchQuery: any = ""
  addToCartModal: Boolean = false
  selectedItem: any = {}
  detailsUrl = "/shopping/search/product"
  title = "Shop Medications"
  query = ""
  show: Boolean = false
  deliveryTypes = [
    { type: "Pickup", mode: false },
    { type: "Same Day Delivery", mode: true },
    { type: "Standard Shipping", mode: false },
  ]

  items = [] as any

  
  selectedPharmacies = "";
  selectedClassifications = "";
  selectedSubClassifications = "";
  selectedLocations = "";

  getQuery(query: any) {
    this.query = query
  }

  getLocations(location: any) {
    this.selectedLocations = location
  }

  getPharmacies(pharmacy: any) {
    this.selectedPharmacies = pharmacy
  }

  getCategories(subclassifications: any, classifications: any) {
    this.selectedSubClassifications = subclassifications
    this.selectedClassifications = classifications
  }

  getInitial(str?: any) {
    return str?.charAt(0) || ""
  }

  get queryPayload() {
    return {
      query: this.query,
      pharmacies: this.selectedPharmacies,
      classifications: this.selectedClassifications,
      subClassifications: this.selectedSubClassifications,
      locations: this.selectedLocations,
    }
  }

  getPharmacy(value: any) {}

  async fetchMedications(queries: any) {
    const queryString = Object.keys(queries)
      .map(filter => {
        if (queries[filter] || Number.isInteger(queries[filter])) {
          return `${filter}=${queries[filter]}`
        }
        return null
      })
      .filter(item => item)
      .join("&")
    try {
      const { data } = await this.$store.dispatch("pharmacy/searchProduct", queryString)
      this.items = data || []
    } catch (error) {
      // alert(error)
    }
  }

  @Watch("query")
  @Watch("selectedLocations")
  @Watch("selectedPharmacies")
  @Watch("selectedClassifications")
  @Watch("selectedSubClassifications")
  onUpdate() {
    this.fetchMedications(this.queryPayload)
  }

  async created() {
    await this.fetchMedications({
      ...this.queryPayload,
      query: this.$route.query.product,
      location: this.$route.query.location,
    })
  }
}
</script>

<style></style>
