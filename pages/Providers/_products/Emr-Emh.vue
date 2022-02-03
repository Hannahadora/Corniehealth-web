<template>
	<div class="xl:pt-20 pt-16">
		<div
			class="bg-cblue-100 xl:px-32 py-16 h-52 text-center relative"
		>
			<h1 class="c-indigo mb-2">EMR/EHR</h1>
			<p class="flex items-center justify-center">
				<img class="mr-2" src="/images/nav/home.svg" alt="" />
				<span class="mr-2">Home /</span>
				<img class="mr-2" src="/images/nav/about.svg" alt="" />
				<span class="text-razzmataz-pry">EMR/EHR</span>
			</p>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Chart your way to better care delivery</h2>
					<p>
						Create clear, concise, and comprehensive patient documentation,
						easy-to-use and fast, with inbuilt SNOMED-CT, ICD-11, and LOINC
						codes to standardize your documentation.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img
						src="/images/emr-emh/03_03_2020_18_59_34_5882013 1.svg"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img
						src="/images/emr-emh/image 36.svg"
						alt=""
					/>
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">
						Access, update, and share patient charts from anywhere, at any time
					</h2>
					<p>
						Access and update your patient’s treatment records from anywhere and
						share with other specialist providers, subject to the patient’s
						consent.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Care teams</h2>
					<p>
						Create and add patients and practitioners to care teams. Modify your
						care teams as the need arises.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 32.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 25.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">An integrated DICOM viewer</h2>
					<p>
						View diagnostic images (example, X-rays, CT scans, etc.) directly in
						Cornie health’s EMR/EHR.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Electronic requests</h2>
					<p>
						Be it an e-prescription, e-referral, or electronic diagnostic
						request, we help you create, manage, and keep track of your request
						status. The e-prescription interface features an integrated EMDEX
						API.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 33.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 35.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">
						Customizable medical templates and forms
					</h2>
					<p>
						Create customized templates and forms to collect patient medical
						data digitally, hassle-free.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Enhanced productivity</h2>
					<p>
						We provide all the tools you need to deliver optimal patient care
						from anywhere and anytime, fully integrated with your patient
						experience, billing and collection, and analytics.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 34.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="my-24 c-wrapper">
			<div
				class="bg-c-indigo px-7 py-16 rounded-2xl flex xl:flex-row flex-col xl:items-center items-start xl:justify-between justify-center"
			>
				<div class="text-white xl:mb-0 mb-12">
					<h2 class="mb-2">Ready to boost your practice?</h2>
					<p class="mb-12">
						Get started for free. We only make money when your practice thrives.
					</p>
					<div class="flex items-center justify-start">
						<div class="w-auto xl:mr-6 xl:mb-0 mb-4">
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
  name: "EmrEmh",
})
</script>
