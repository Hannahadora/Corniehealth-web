<template>
	<div class="xl:pt-20 pt-16">
		<breadcrumbs />

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
					<img src="/images/emr-emh/03_03_2020_18_59_34_5882013 1.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/emr-emh/image 36.svg" alt="" />
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

		<ProductsFooter2 />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ProductsFooter2 from "../../../components/Providers/ProductsFooter2.vue"
import Breadcrumbs from "../../../components/Breadcrumbs.vue"
@Component({
  components: { ProductsFooter2, Breadcrumbs },
})
export default class EmrEmh extends Vue {}
</script>
