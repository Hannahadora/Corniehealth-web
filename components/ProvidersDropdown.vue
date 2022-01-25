<template>
	<div class="provider-dropdown p-8 bg-white shadow">
		<div>
			<!-- <NuxtLink to="/providers/private" class="mb-7 flex items-center gap-2"
        ><img src="/images/patient-private.svg" alt="" /><span
          >Private</span
        ></NuxtLink
      >
      <NuxtLink to="/providers/employer" class="flex items-center gap-2"
        ><img src="/images/clarity_employee-line.svg" alt="" /><span
          >Employer</span
        ></NuxtLink -->

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
					<NuxtLink class="pl-10" to="/providers/">Patient Experience</NuxtLink>
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
					<NuxtLink class="pl-10" to="/providers/hospitals_and_clinics">Hospitals and clinics</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/solo_practice">Solo Practice</NuxtLink>
					<NuxtLink class="pl-10" to="/providers/community_pharmacies">Community Pharmacies</NuxtLink>
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
}

tr {
  font-size: 16px;
  line-height: 24px;
}
</style>
