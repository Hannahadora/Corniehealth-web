<template>
	<div class=" intro-wrapper">
		<div class="text-center">
			<p>Connected. Patient-Centric. Supportive.</p>
			<h1 class="my-2 c-indigo">
				Find your preferred doctors, other healthcare service providers, and
				book instantly.
			</h1>
			<p class="mb-14">View all practice information and ratings, no calls or messaging required</p>

			<div class="w-full flex items-center justify-center gap-2">
				<c-input class="w-2/5" inputIcon="/images/search.svg" placeholder="Provider name, practice name or specialty" />
				<c-input class="w-2/5" inputIcon="/images/location.svg" placeholder="City name or Zip/Postal code" />
				<c-button class="w-1/5" title="Search" :tertiary="true" />
			</div>
			<div>
				<img class="w-full" src="/images/header-image.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "@/components/CButton.vue"
import CInput from "./CInput..vue"
export default Vue.extend({
  name: "IndexHeader",
  components: {
    CInput,
    CButton 
  }
})
</script>

<style>
.intro-wrapper {
    padding: 0 210px;
}
</style>