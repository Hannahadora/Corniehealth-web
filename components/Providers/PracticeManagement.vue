<template>
	<div class="c-wrapper bg-white relative">
		<div class="mb-9 flex xl:flex-row flex-col items-center justify-between py-24">
			<div class="xl:w-1/2 w-full xl:mr-9 xl:mb-0 mb-9 flex items-center justify-center">
				<img src="/images/providers/Group 11648.svg" alt="" />
			</div>
			<div class="xl:w-1/2 w-full">
				<div class="flex items-center xl:justify-start justify-center mb-4">
					<img class="xl:block hidden mr-2" src="/images/good health.svg" alt="" />
					<p>Full-circle practice management.</p>
				</div>
				<h2 class="c-indigo mb-8 xl:text-left text-center">Practice Management</h2>
				<p class="mb-8">
					Scheduling, online appointment booking, e-requests, self-enrollment,
					forms, questionnaires, refill management, patient-initiated testing,
					and a HIPAA-compliant patient portal for ongoing engagement.
				</p>

				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Increase online visibility and reach.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Online booking from your websites or from Cornie health.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Engage, gain, and retain patients</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Healthcare information exchange</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Create and manage loyalty groups and promotions.</p>
				</div>
				<div class="mt-8">
					<c-button type="button" class="w-auto" title="Discover More" secondary small />
				</div>
			</div>
		</div>

		
		<img class="xl:block hidden absolute bottom-24 left-6" src="/images/providers/img.svg" alt="">
		<img class="xl:hidden block absolute bottom-24 left-2" src="/images/providers/img (1).svg" alt="">
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "PracticeManagement",
  components: { CButton },
})
</script>
