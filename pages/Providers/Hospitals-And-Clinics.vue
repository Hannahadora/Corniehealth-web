<template>
	<div>
		<div class="c-wrapper xl:pt-48 pt-24 mb-20 flex xl:flex-row flex-col items-center gap-14">
			<div class="xl:w-1/2 w-full">
				<div class="flex items-center xl:justify-start justify-center gap-2">
					<img class="xl:block hidden" src="/images/good health.svg" alt="" />
					<p class="xl:text-left text-center">Your connected Healthcare Practice Management System.</p>
				</div>
				<h1 class="c-indigo mt-3 xl:text-left text-center">Hospitals and Clinics</h1>
				<p class="mt-4 xl:text-left text-center">
					We empower your team with tools and resources to efficiently run your
					healthcare operation, deliver superior patient experience, connect
					with third-party providers, and patients for better care coordination.
				</p>
				<div class="mt-12 flex items-center xl:justify-start justify-center gap-6">
					<div class="w-auto">
						<c-button title="Get started for free" secondary small />
					</div>
					<div class="w-auto">
						<c-button title="View Demo" primary small />
					</div>
				</div>
			</div>
			<div class="xl:w-1/2 w-full flex items-center justify-center">
				<img src="/images/providers/image 22.svg" alt="" />
			</div>
		</div>

		<div class="c-wrapper bg-white">
			<div class="xl:px-4 px-3 xl:py-8 py-3 c-shadow">
				<div class="xl:h-48 h-auto flex xl:flex-row flex-col items-start xl:gap-6">
					<div class="bg-cblue-100 p-6 w-full">
						<div class="flex gap-4">
							<img src="/images/dd-icons/carbon_location-company.svg" alt="" />
							<p>Multi-location/facility enabled.</p>
						</div>
						<div class="mt-6 flex gap-4">
							<img src="/images/dd-icons/carbon_document.svg" alt="" />
							<p>
								Electronic requests (referral, prescription, and diagnostic).
							</p>
						</div>
						<div class="mt-6 flex gap-4">
							<img
								src="/images/dd-icons/carbon_inventory-management.svg"
								alt=""
							/>
							<p>Catalogue and inventory management.</p>
						</div>
					</div>

					<div class="bg-cblue-100 px-6 xl:py-6 w-full">
						<div class="flex gap-4">
							<img
								src="/images/dd-icons/icon-park-outline_medical-box.svg"
								alt=""
							/>
							<p>Standards-based Medical coding (SNOMED-CT, ICD-11, LOINC).</p>
						</div>
						<div class="mt-6 flex gap-4">
							<img
								src="/images/dd-icons/fluent_form-new-48-regular.svg"
								alt=""
							/>
							<p>Customizable forms and questionnaires.</p>
						</div>
						<div class="mt-6 flex gap-4">
							<img src="/images/dd-icons/carbon_gui-management.svg" alt="" />
							<p>Marketing and outreach management.</p>
						</div>
					</div>

					<div class="bg-cblue-100 xl:h-full h-auto px-6 py-6 w-full">
						<div class="flex gap-4">
							<img src="/images/dd-icons/tabler_file-analytics.svg" alt="" />
							<p>Analytics and decision support.</p>
						</div>
					</div>
				</div>

				<div class="xl:mt-14 mt-16 xl:mb-16 mb-24 text-center">
					<h2 class="c-indigo">Get started for free.</h2>
					<h2 class="c-indigo">
						We only make money when your practice thrives.
					</h2>
					<h4 class="mt-6 opacity-70">
						You will be charged 1.5% + N100 capped at N1,000.00 per transaction.
					</h4>
				</div>
			</div>
		</div>

		<PatientExperience class="mt-9" />
		<EmrEmh />
		<PracticeManagement />
		<BillingsAndPayment />
		<PatientPortal />
		<AnBIntelliegence />
		<DataProtection />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "~/components/CButton.vue"
import PatientPortal from "~/components/Providers/PatientPortal.vue"
import BillingsAndPayment from "~/components/Providers/BillingsAndPayment.vue"
import EmrEmh from "~/components/Providers/EmrEmh.vue"
import PatientExperience from "~/components/Providers/PatientExperience.vue"
import PracticeManagement from "~/components/Providers/PracticeManagement.vue"
import AnBIntelliegence from "~/components/Providers/AnBIntelliegence.vue"
import DataProtection from "~/components/Providers/DataProtection.vue"
export default Vue.extend({
  name: "HospitalsAndClinics",
  components: {
    CButton,
    PatientExperience,
    EmrEmh,
    PracticeManagement,
    BillingsAndPayment,
    PatientPortal,
    AnBIntelliegence,
    DataProtection
  },
})
</script>

<style></style>
