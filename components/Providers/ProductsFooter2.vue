<template>
	<div class="my-24 c-wrapper">
		<div
			class="bg-c-indigo px-7 py-16 rounded-2xl flex xl:flex-row flex-col xl:items-center items-start"
		>
			<div class="text-white xl:mb-0 mb-12">
				<h2 class="mb-2">Ready to boost your practice?</h2>
				<p class="mb-12">
					Get started for free. We only make money when your practice thrives.
				</p>
				<div class="flex items-center justify-start">
					<div class="w-auto xl:mr-6 mr-4">
						<c-button type="button" :secondary="true" :small="true" @click="$router.push('/signup')"
						>Sign up for free</c-button
						>
					</div>
					<div class="w-auto">
						<c-button type="button" :primary="true" :small="true"
						>Contact Us</c-button
						>
					</div>
				</div>
			</div>

			<div>
				<img src="/images/patient-experience/image 30.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "ProductsFooter2",
  components: { CButton },
})
</script>
