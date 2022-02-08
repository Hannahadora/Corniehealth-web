<template>
	<div class="bg-cblue-100 c-wrapper">
		<div class="mb-9 flex xl:flex-row flex-col-reverse items-center justify-between py-24">
			<div class="xl:w-1/2 w-full xl:mr-9 xl:mt-0 mt-9">
				<div class="flex items-center xl:justify-start justify-center mb-4">
					<img class="xl:block hidden mr-2" src="/images/good health.svg" alt="" />
					<p class="text-left text-center">See what works.</p>
				</div>
				<h2 class="c-indigo mb-8 xl:text-left text-center">Analytics & Business Intelligence</h2>
				<p class="mb-8 xl:text-left text-center">
					Get detailed performance reports to understand what works and what
					doesn’t. Filter operational data by practice, location, specialty,
					period, and account to get specific performance data.
				</p>

				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Demographics.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Registrations and visits.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Conditions/diseases.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Electronic requests.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Billing and account receivables etc.</p>
				</div>
				<div class="mt-8">
					<c-button type="button" title="Discover More" secondary small />
				</div>
			</div>

			<div class="xl:w-1/2 w-full">
				<img src="/images/providers/Group 11650.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "AnBIntelliegence",
  components: { CButton },
})
</script>
