<template>
	<div class="xl:pt-20 pt-16">
		<div class="bg-cblue-100 xl:px-32 py-16 h-52 text-center relative">
			<h1 class="c-indigo mb-2">Patient Experience</h1>
			<p class="flex items-center justify-center gap-2">
				<img src="/images/nav/home.svg" alt="" />
				<span>Home /</span>
				<img src="/images/nav/about.svg" alt="" />
				<span class="text-razzmataz-pry">Patient Experience</span>
			</p>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between gap-14"
			>
				<div class="xl:w-3/5 w-full">
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
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between gap-14"
			>
				<div class="xl:w-2/5 w-full">
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
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between gap-14"
			>
				<div class="xl:w-3/5 w-full">
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
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between gap-14"
			>
				<div class="xl:w-2/5 w-full">
					<img src="/images/patient-experience/image 27.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Contactless experience.</h2>
					<p>
						From patient registration, account management, online appointment
						booking, questionnaire response, to visit check-in, we make it easy,
						accessible, and efficient – integrated with your practice workflows
						and EMR/EHR and streamlines every patient interaction.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between gap-14"
			>
				<div class="xl:w-3/5 w-full">
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
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between gap-14"
			>
				<div class="xl:w-2/5 w-full">
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

		<div class="my-24 c-wrapper">
			<div
				class="bg-c-indigo px-7 py-16 rounded-2xl flex xl:flex-row flex-col xl:items-center items-start xl:gap-0 gap-12"
			>
				<div class="text-white">
					<h2 class="mb-2">Ready to boost your practice?</h2>
					<p class="mb-12">
						Get started for free. We only make money when your practice thrives.
					</p>
					<div class="flex items-center justify-start xl:gap-6 gap-4">
						<div class="w-auto">
							<c-button
								title="Sign up for free"
								:secondary="true"
								:small="true"
							/>
						</div>
						<div class="w-auto">
							<c-button title="Contact Us" :primary="true" :small="true" />
						</div>
					</div>
				</div>

				<div>
					<img src="/images/patient-experience/image 30.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "PatientExperience",
})
</script>
