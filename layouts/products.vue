<template>
	<div>
		<TopNav />
		<Nuxt />
		<products-footer-2 />
		<CFooter />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CFooter from "../components/CFooter.vue"
import ProductsFooter2 from "../components/Providers/ProductsFooter2.vue"
import TopNav from "../components/TopNav.vue"
export default Vue.extend({
  name: "ProductLayout",
  components: { TopNav, CFooter, ProductsFooter2 }
})
</script>