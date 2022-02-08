<template>
	<div class="bg-cblue-100 c-wrapper">
		<div class="mb-9 flex xl:flex-row flex-col-reverse items-center justify-between py-24">
			<div class="xl:w-1/2 w-full xl:mr-9 xl:mt-0 mt-9">
				<div class="flex items-center xl:justify-start justify-center mb-4">
					<img class="xl:block hidden mr-2" src="/images/good health.svg" alt="" />
					<p class="text-left text-center">Chart your way to better care delivery.</p>
				</div>
				<h2 class="c-indigo mb-8 xl:text-left text-center">
					Integrated Electronic Medical/Health Records (EMR/EHR)
				</h2>
				<p class="mb-8 xl:text-left text-center">
					Create clear, concise, and comprehensive patient documentation,
					easy-to-use and fast, with inbuilt SNOMED-CT, ICD-11, and LOINC codes
					to standardize your documentation.
				</p>

				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>EMR/EHR mode support.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Cloud-based and mobile enabled.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Authenticated access control.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Medication catalogue, powered by EMDEX API.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Electronic request management.</p>
				</div>
				<div class="mt-8">
					<c-button type="button" title="Discover More" secondary small />
				</div>
			</div>

			<div class="xl:w-1/2 w-full flex items-center justify-center">
				<img src="/images/providers/Device-Macbook pro (1).svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "EmrEmh",
  components: { CButton },
})
</script>
