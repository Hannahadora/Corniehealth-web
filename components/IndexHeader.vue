<template>
	<div class=" intro-wrapper">
		<div class="text-center">
			<div class="flex items-center justify-center gap-2">
				<img src="/images/good health.svg" alt="">
				<p>Connected. Patient-Centric. Supportive.</p>
			</div>
			<h1 class="my-2 c-indigo">
				Find your preferred doctors, other healthcare service providers, and
				book instantly.
			</h1>
			<p class="mb-14">View all practice information and ratings, no calls or messaging required</p>

			<div class="w-full flex items-center justify-center gap-2">
				<input-comp class="w-2/5" input-icon="/images/search.svg" placeholder="Provider name, practice name or specialty" />
				<input-comp class="w-2/5" input-icon="/images/location.svg" placeholder="City name or Zip/Postal code" />
				<c-button class="w-1/5" title="Search" :tertiary="true" />
			</div>
			<div>
				<img class="header-image mx-auto" src="/images/header-image.png" alt="">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import InputComp from "./InputComp.vue"
import CButton from "@/components/CButton.vue"
export default Vue.extend({
  name: "IndexHeader",
  components: {
    InputComp,
    CButton
  }
})
</script>

<style>
.intro-wrapper {
    padding: 0 210px;
}
</style>