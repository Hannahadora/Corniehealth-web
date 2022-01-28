<template>
	<div class="provider-dropdown p-8 bg-white shadow">
		<div>

			<div class="mb-6 flex items-center gap-2">
				<img src="/images/dd-icons/bx_bx-category-alt.svg" alt="" />
				<p class="text-razzmataz-pry">Provider Solution</p>
			</div>

			<div class="w-full grid grid-cols-2 gap-2">
				<div class="flex flex-col gap-6">
					<div class="bg-cblue-100 py-1 px-2 flex items-center gap-2">
						<img src="/images/dd-icons/products.svg" alt="" />
						<p>Products</p>
					</div>
					<NuxtLink class="pl-10" to="/patient-experience">Patient Experience</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Clinical (EMR/EHR)</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Practice Management</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Billing & Collections</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Patient Portal</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Analytics</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/">Marketplace</NuxtLink>
				</div>

				<div class="flex flex-col gap-6">
					<div class="bg-cblue-100 py-1 px-2 flex items-center gap-2">
						<img src="/images/dd-icons/practice-type.svg" alt="" />
						<p>Practice Type</p>
					</div>
					<NuxtLink class="pl-10" to="/providers/hospitals-and-clinics">Hospitals and clinics</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/solo-practice">Solo Practice</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/community-pharmacies">Community Pharmacies</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/diagnostics">Diagnostics</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "ProvidersDropdown",
  components: {},
})
</script>

<style scoped>
.provider-dropdown {
  width: 563px;
  z-index: 99;
}

tr {
  font-size: 16px;
  line-height: 24px;
}
</style>
