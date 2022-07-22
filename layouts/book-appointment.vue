<template>
	<div>
		<TopNav />
		<Nuxt class="xl:mt-32 mt-28" />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import TopNav from "../components/TopNav.vue"
export default Vue.extend({
  name: "BookingAppointmentLayout",
  components: { TopNav },
})
</script>

<style></style>
