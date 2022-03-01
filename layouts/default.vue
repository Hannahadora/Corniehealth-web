<template>
	<div>
		<TopNav />
		<Nuxt />
		<CFooter />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import ModalComponent from "~/components/ModalComponent.vue"
import CFooter from "../components/CFooter.vue"
import TopNav from "../components/TopNav.vue"
export default Vue.extend({
  name: "DefaultLayout",
  components: { TopNav, CFooter, ModalComponent }
})
</script>