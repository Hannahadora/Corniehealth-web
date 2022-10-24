<template>
	<div class="bg-white mb-auto shadow-lg p-3 mt-2 rounded-lg w-full">
		<shopping-page-component
			:title="title"
			:items="items"
			:details-url="detailsUrl"
			:cart-quantity="false"
		>
			<template #sidebar>
				<diagnostic-sidebar v-model="items" />
			</template>
			<template #default="{ itemprops }">
				<tabs v-model="currentTab" :items="tabLinks">
					<!-- <preset-test /> -->
					<popular-test v-bind="itemprops" />
				</tabs>
			</template>
		</shopping-page-component>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import ShoppingPageComponent from "@/components/labs/index.vue"
import Tabs from "@/components/tabs.vue"
import DiagnosticSidebar from "@/components/labs/diagnostic-shopping-sidebar.vue"
import PopularTest from "@/components/labs/popular-test.vue"
// import PresetTest from "./preset-test.vue"

@Component({
  name: "ShoppingPage",
  components: {
    ShoppingPageComponent,
    DiagnosticSidebar,
    Tabs,
    // PresetTest,
    PopularTest,
  },
})
export default class ShoppingPage extends Vue {
  loading: Boolean = true
  searchQuery: any = ""
  addToCartModal: Boolean = false
  selectedItem: any = {}
  detailsUrl = "/dashboard/patient/diagnostics-shopping/details"
  title = "Shop Diagnostics"
  tabLinks = [
    // "Preset Tests",
    "Popular Tests",
  ]

  currentTab = 0
  items = []

  openCartConfirmation(item: any) {
    this.selectedItem = item
    this.addToCartModal = true
  }

  stringfy(data: any) {
    return JSON.stringify(data)
  }

  @Watch("items")
  saveToLocalStorage() {
    // console.log("itttem", this.items);
    // localstore.put("diagnostics-services", this.items)
    localStorage.setItem("diagnostics-services", this.stringfy(this.items))
  }

  async created() {}
}
</script>

<style scoped>
.sample-img {
  height: 110px;
  width: 200px;
}
</style>
