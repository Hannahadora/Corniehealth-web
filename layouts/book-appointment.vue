<template>
	<div>
		<TopNav />
		<Nuxt class="absolute top-24" />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import TopNav from "../components/TopNav.vue"
export default Vue.extend({
  name: "BookingAppointmentLayout",
  components: { TopNav }
})
</script>

<style></style>
