<template>
	<div class="c-wrapper bg-white relative">
		<div
			class="mb-9 flex xl:flex-row flex-col items-center justify-between py-24"
		>
			<div class="xl:mr-9 xl:mb-0 mb-9 xl:w-1/2 w-full flex items-center justify-center">
				<img src="/images/providers/Group 11651.svg" alt="" />
			</div>
			<div class="xl:w-1/2 w-full">
				<h2 class="c-indigo mb-8 xl:text-left text-center">
					Data Protection and Security
				</h2>
				<p class="mb-8 xl:text-left text-center">
					We are HIPAA and NDPR compliant and offer network traffic encryption
					to properly secure patients’ data.
				</p>

				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>2-factor authentication enabled.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Permission-based access.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Access controlled health records.</p>
				</div>
				<div class="flex items-start mb-4">
					<img class="mr-4" src="/images/checkmark.svg" alt="" />
					<p>Audits logs.</p>
				</div>
				<div class="mt-8">
					<c-button type="button" secondary small>Discover More</c-button>
				</div>
			</div>
		</div>

		<img
			class="xl:block hidden absolute bottom-24 left-6"
			src="/images/providers/img.svg"
			alt=""
		/>
		<img
			class="xl:hidden block absolute bottom-24 left-2"
			src="/images/providers/img (1).svg"
			alt=""
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "DataProtection",
  components: { CButton },
})
</script>
