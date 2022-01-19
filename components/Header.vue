<template>
	<div class=" intro-wrapper">
		<div class="text-center">
			<p>Connected. Patient-Centric. Supportive.</p>
			<h1 class="my-2">
				Find your preferred doctors, other healthcare service providers, and
				book instantly.
			</h1>
			<p class="mb-14">View all practice information and ratings, no calls or messaging required</p>

			<div class="flex items-center gap-2">
				<Button title="Search" :tertiary="true" />
			</div>
			<img src="/images/header-image.png" alt="">
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import Button from "@/components/Button.vue"
export default Vue.extend({
  name: "Header",
  components: {
    Button 
  }
})
</script>

<style>
.intro-wrapper {
    padding: 0 210px;
}
</style>