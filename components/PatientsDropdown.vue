<template>
	<div class="p-8 w-72 bg-white shadow">
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
})
</script>

<style scoped></style>
