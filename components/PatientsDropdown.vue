<template>
	<div class="patient-dropdown xl:p-8 xl:w-72 w-full bg-white xl:shadow">
		<NuxtLink to="/patients/private" class="mb-7 flex items-center gap-2"
		><img src="/images/patient-private.svg" alt="" /><span
		>Private</span
		></NuxtLink
		>
		<NuxtLink to="/patients/employer" class="flex items-center gap-2"
		><img src="/images/clarity_employee-line.svg" alt="" /><span
		>Employer</span
		></NuxtLink
		>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "PatientsDropdown",
  components: {},

  created() {
  },

  methods: {

  }
})
</script>

<style scoped>
.patient-dropdown {
  z-index: 99;
}
</style>
