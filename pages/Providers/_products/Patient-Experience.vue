<template>
	<div class="xl:pt-20 pt-16">
		<breadcrumbs />

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">
						Stay proactive and delight your patients
					</h2>
					<p>
						Leverage our experience dashboard to manage and track patients along
						their care journeys. View visit timelines to identify and unblock
						delays, drive operational efficiency, provide timely care, and
						deliver a superior patient experience.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img
						src="/images/patient-experience/Doctor_And_Patient 1.svg"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img
						src="/images/patient-experience/Doctor_And_Patient 1 (1).svg"
						alt=""
					/>
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Delightful-front desk experience.</h2>
					<p>
						Empower your front desk team to stay proactive and provide excellent
						patient services - confirm online appointment requests, manage
						check-ins and check-outs, coordinate the fulfillment of patient
						requests, support patients at their point of need, and more.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Patient activation.</h2>
					<p>
						Patients can access all their personal and family health records
						from anywhere, at any time. Empowered to schedule appointments,
						consult remotely, complete questionnaires, view test results, and
						prescriptions, and stay active in managing their health.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/patient-experience/image 26.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/patient-experience/image 27.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Contactless experience.</h2>
					<p>
						From patient registration, account management, online appointment
						booking, questionnaire response, to visit check-in, we make it easy,
						accessible, and efficient ??? integrated with your practice workflows
						and EMR/EHR and streamlines every patient interaction.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Billing & Collection management.</h2>
					<p>
						Evolve and sync your billing and collection with patient account
						profiles and encounters. Deliver clear and transparent billing and
						maintain a consistent experience through your billing support.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/patient-experience/image 29.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/patient-experience/image 28.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Patient communication</h2>
					<p>
						Empower your team to send care-related messages InApp with one
						another, thirty-party providers, and patients through a HIPPA
						compliant messaging platform.
					</p>
				</div>
			</div>
		</div>
		<ProductsFooter2 />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ProductsFooter2 from "../../../components/Providers/ProductsFooter2.vue"
import Breadcrumbs from "~/components/Breadcrumbs.vue"
@Component({
  components: { ProductsFooter2, Breadcrumbs },
})
export default class PatientExperience extends Vue {}
</script>
