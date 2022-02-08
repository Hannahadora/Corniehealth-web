<template>
	<div class="patient-dropdown xl:p-8 xl:w-72 w-full bg-white xl:shadow">
		<NuxtLink to="/patients/private" class="xl:pl-0 pl-10 mb-7 flex items-center"
		><img class="mr-2" src="/images/patient-private.svg" alt="" /><span @click="$emit('closeSelf')"
		>Private</span
		></NuxtLink
		>
		<NuxtLink to="/patients/employer" class="xl:pl-0 pl-10 flex items-center"
		><img class="mr-2" src="/images/clarity_employee-line.svg" alt="" /><span @click="$emit('closeSelf')"
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
