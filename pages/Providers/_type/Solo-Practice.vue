<template>
	<div>
		<div
			class="c-wrapper xl:pt-48 pt-32 mb-20 flex xl:flex-row flex-col items-center"
		>
			<div class="xl:w-1/2 w-full xl:mr-14 xl:mb-0 mb-14">
				<div class="flex items-center xl:justify-start justify-center">
					<img
						class="xl:block hidden mr-2"
						src="/images/good health.svg"
						alt=""
					/>
					<p class="xl:text-left text-center">
						Your connected Healthcare Practice Management System.
					</p>
				</div>
				<h1 class="c-indigo mt-3 xl:text-left text-center">Solo Practice</h1>
				<p class="mt-4 xl:text-left text-center">
					We empower your team with tools and resources to efficiently run your
					healthcare operation, deliver superior patient experience, connect
					with third-party providers, and patients for better care coordination.
				</p>
				<div class="mt-12 flex items-center xl:justify-start justify-center">
					<c-button class="mr-6" type="button" secondary small>Get started for free</c-button>
					<c-button type="button" primary small>View Demo</c-button>
				</div>
			</div>
			<div class="xl:w-1/2 w-full flex items-center justify-center">
				<img src="/images/providers/image 23.svg" alt="" />
			</div>
		</div>

		<img
			class="absolute xl:w-full w-10/12 xl:left-24 left-2 xl:top-28 top-20"
			src="/images/providers/shapes.svg"
			alt=""
		/>
		<img
			class="absolute right-7 top-96 xl:block hidden"
			src="/images/providers/bg-img.svg"
			alt=""
		/>

		<div class="c-wrapper bg-white">
			<div class="xl:px-4 px-3 xl:py-8 py-3 c-shadow relative">
				<div class="flex xl:flex-row flex-col items-start">
					<div class="bg-cblue-100 p-6 w-full xl:mr-6">
						<div class="flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/carbon_location-company.svg"
								alt=""
							/>
							<p>
								Electronic requests (referral, prescription, and diagnostic).
							</p>
						</div>
						<div class="mt-6 flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/carbon_document.svg"
								alt=""
							/>
							<p>Service catalogue.</p>
						</div>
						<div class="mt-6 flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/carbon_inventory-management.svg"
								alt=""
							/>
							<p>Standards-based Medical coding (SNOMED-CT, ICD-11, LOINC).</p>
						</div>
					</div>

					<div class="bg-cblue-100 px-6 py-6 w-full xl:mr-6">
						<div class="flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/icon-park-outline_medical-box.svg"
								alt=""
							/>
							<p>Customizable forms and questionnaires.</p>
						</div>
						<div class="mt-6 flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/fluent_form-new-48-regular.svg"
								alt=""
							/>
							<p>Marketing and outreach management.</p>
						</div>
						<div class="mt-6 flex items-start">
							<img
								class="mr-4"
								src="/images/dd-icons/carbon_gui-management.svg"
								alt=""
							/>
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

				<img
					class="xl:block hidden absolute left-6 bottom-20"
					src="/images/providers/img.svg"
					alt=""
				/>
				<img
					class="xl:hidden block absolute bottom-24 left-2"
					src="/images/providers/img (1).svg"
					alt=""
				/>
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
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "../../../components/CButton.vue"
import PatientPortal from "../../../components/Providers/PatientPortal.vue"
import BillingsAndPayment from "../../../components/Providers/BillingsAndPayment.vue"
import EmrEmh from "../../../components/Providers/EmrEmh.vue"
import PatientExperience from "../../../components/Providers/PatientExperience.vue"
import PracticeManagement from "../../../components/Providers/PracticeManagement.vue"
import AnBIntelliegence from "../../../components/Providers/AnBIntelliegence.vue"
import DataProtection from "../../../components/Providers/DataProtection.vue"

@Component({
  components: {
    CButton,
    PatientExperience,
    EmrEmh,
    PracticeManagement,
    BillingsAndPayment,
    PatientPortal,
    AnBIntelliegence,
    DataProtection,
  },
})
export default class SoloPracticePage extends Vue {}
</script>

<style></style>
