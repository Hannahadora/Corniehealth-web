<template>
	<div class="bg-white mb-auto shadow-lg p-3 mt-2 rounded-lg w-full">
		<product-details-page
			:title="title"
			:item="item"
			:delivery-types="deliveryTypes"
			@searchQuery="getQuery"
			@openCartConfirmation="show = true"
			@locationQuery="getLocations"
			@pharmacyQuery="getPharmacies"
			@classificationQuery="getClassifications"
			@subClassificationQuery="getSubclassifications"
		>
			<template #sidebar>
				<medication-shopping-sidebar />
			</template>
		</product-details-page>

		<cornie-modal :model-value="show" right class="w-full h-full">
			<add-to-cart-confirmation
				:id="item.id"
				:item="item"
				@close="show = false"
			/>
		</cornie-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ProductDetailsPage from "@/components/shopping/product-details.vue";

// import AddToCartConfirmation from "@@/components/shopping/components/add-to-cart-confirmation.vue";
import MedicationShoppingSidebar from "@/components/shopping/components/medication-shoppings-sidebar.vue"

const cartStore = namespace("cart");

@Component({
  name: "ShopDetailsPage",
  layout: "shopping",
  components: {
    MedicationShoppingSidebar,
    ProductDetailsPage,
    // AddToCartConfirmation,
  },
})
export default class ShopDetailsPage extends Vue {
  @cartStore.Action
    fetchSelectedItem!: () => Promise<void>;

  @cartStore.State
    selectedItem: any;

  selectedPharmacies = "";
  selectedClassifications = "";
  selectedSubClassifications = "";
  selectedLocations = "";
  show = false;

  // item = {} as any
  loading: Boolean = true;
  searchQuery: any = "";
  addToCartModal: Boolean = false;
  title = "Shop Medications";
  query = "";
  deliveryTypes = [
    { type: "Pickup", mode: false },
    { type: "Same Day Delivery", mode: true },
    { type: "Standard Shipping", mode: false },
  ];

  items = [] as any;

  get queryPayload() {
    return {
      query: this.query,
      pharmacies: this.selectedPharmacies,
      classifications: this.selectedClassifications,
      subClassifications: this.selectedSubClassifications,
      locations: this.selectedLocations,
    };
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
  // async fetchSingleItem(
  // ) {
  //   try {
  //     const { data } = await cornieClient().get(
  //       `/api/v1/catalogue-product/${this.$route.params.id}`
  //     );
  //     this.item = data || [];
  //   } catch (error) {
  //     window.notify({
  //       msg: "There was an error fetching medications",
  //       status: "error",
  //     });
  //   }
  // }

  get item() {
    return this.selectedItem;
  }

  async created() {
    this.fetchSelectedItem();
    // await this.fetchSingleItem();
  }

  getQuery(query: any) {
    this.query = query;
  }

  getLocations(location: any) {
    this.selectedLocations = location;
  }

  getPharmacies(pharmacy: any) {
    this.selectedPharmacies = pharmacy;
  }

  getClassifications(classifications: any) {
    this.selectedClassifications = classifications;
  }

  getSubclassifications(subclassifications: any) {
    this.selectedSubClassifications = subclassifications;
  }

  getInitial(str?: any) {
    return str?.charAt(0) || "";
  }

  @Watch("query")
  typed() {
    this.fetchMedications(this.queryPayload);
  }

  @Watch("queryPayload", {deep: true})
  updated() {
    this.fetchMedications(this.queryPayload);
  }
}
</script>

<style scoped>
.sample-img {
  height: 143px;
  width: 175px;
}
.bg-s-blue {
  background: #f0f4fe;
}
.related-tag {
  background: #f6f8f9;
  padding: 4px 16px;
  border-radius: 100px;
}
.text-grey-blue {
  color: #667499;
}

th {
  background: #f0f4fe;
  text-align: left;
  padding: 10px 12px;
  border-radius: 4px 4px 0px 0px;
  color: #080056;
  font-size: 12px;
}

td {
  padding: 10px 12px;
}
</style>
