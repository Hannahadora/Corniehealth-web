<template>
	<div class=" intro-wrapper">
		<div class="text-center">
			<div class="flex items-center justify-center gap-2">
				<img class="lg:block hidden" src="/images/good health.svg" alt="">
				<p>Connected. Patient-Centric. Supportive.</p>
			</div>
			<h1 class="my-2 c-indigo">
				Find your preferred doctors, other healthcare service providers, and
				book instantly.
			</h1>
			<p class="mb-14">View all practice information and ratings, no calls or messaging required</p>

			<div class="w-full flex lg:flex-row flex-col items-center justify-center gap-2">
				<input-comp class="lg:w-2/5 lg:flex hidden" input-icon="/images/search.svg" placeholder="Provider name, practice name or specialty" />
				<input-comp class="w-full lg:hidden block" input-icon="/images/search.svg" placeholder="Name or specialty" />
				<input-comp class="lg:w-2/5 w-full" input-icon="/images/location.svg" placeholder="City name or Zip/Postal code" />
				<div class="lg:w-1/5 w-full">
					<c-button title="Search" :tertiary="true" />
				</div>
			</div>
			<div>
				<img class="header-image mx-auto lg:mt-0 mt-16 " src="/images/header-image.png" alt="">
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

@media screen and (max-width: 1024px) {
	.intro-wrapper {
		 padding: 0 72px;
	}
}
@media screen and (max-width: 768px) {
	.intro-wrapper {
		 padding: 0 50px;
	}
}
</style>