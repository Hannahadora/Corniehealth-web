<template>
	<div class="provider-dropdown xl:p-8 bg-white xl:shadow">
		<div>
			<div class="mb-6 flex items-center gap-2">
				<img src="/images/dd-icons/bx_bx-category-alt.svg" alt="" />
				<p class="text-razzmataz-pry">Provider Solution</p>
			</div>

			<div class="w-full grid xl:grid-cols-2 grid-cols-1 gap-2">
				<div class="flex flex-col gap-6">
					<div class="bg-cblue-100 py-1 px-2 flex items-center gap-2">
						<img src="/images/dd-icons/products.svg" alt="" />
						<p>Products</p>
					</div>
					<NuxtLink class="pl-10" to="/providers/products/patient-experience"
					>Patient Experience</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/products/emr-emh"
					>Clinical (EMR/EHR)</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/products/practice-management"
					>Practice Management</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/products/"
					>Billing & Collections</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/products/"
					>Patient Portal</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/products/">Analytics</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/products/"
					>Marketplace</NuxtLink
					>
				</div>

				<div class="flex flex-col gap-6">
					<div class="bg-cblue-100 py-1 px-2 flex items-center gap-2">
						<img src="/images/dd-icons/practice-type.svg" alt="" />
						<p>Practice Type</p>
					</div>
					<NuxtLink class="pl-10" to="/providers/types/hospitals-and-clinics"
					>Hospitals and clinics</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/types/solo-practice"
					>Solo Practice</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/types/community-pharmacies"
					>Community Pharmacies</NuxtLink
					>
					<NuxtLink class="pl-10" to="/providers/types/diagnostics"
					>Diagnostics</NuxtLink
					>
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

@media screen and (max-width: 1024px) {
  .provider-dropdown {
    width: 100%;
    z-index: auto;
  }
}
</style>
