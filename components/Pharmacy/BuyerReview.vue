<template>
	<div class="mt-8">
		<span class="sub-titles-1 c-indigo font-bold">Product quality</span>

		<div class="grid grid-cols-4 mt-9">
			<div class="bg-lighter-blue mr-6 px-9 flex flex-col items-start justify-center">
				<h1 class="c-indigo font-bold mb-6">5.0</h1>
				<img class="mb-6 h-6 w-36" src="/images/book-appointment/ratings.png" alt="">
				<p>2 reviews</p>
			</div>

			<div class="col-span-3">
				<div class="flex items-center justify-between mb-6">
					<cornie-checkbox name="fiveStar" />
					<p class="c-indigo ml-2">5</p>
					<img class="ml-2" src="/images/dashicons_star-filled.png" alt="" />
					<div class="bg-gray-300 h-2 rounded-full w-10/12"></div>
					<p class="ml-2">0</p>
				</div>
				<div class="flex items-center justify-between mb-6">
					<cornie-checkbox name="fiveStar" />
					<p class="c-indigo ml-2">4</p>
					<img class="ml-2" src="/images/dashicons_star-filled.png" alt="" />
					<div class="bg-gray-300 h-2 rounded-full w-10/12"></div>
					<p class="ml-2">0</p>
				</div>
				<div class="flex items-center justify-between mb-6">
					<cornie-checkbox name="fiveStar" />
					<p class="c-indigo ml-2">3</p>
					<img class="ml-2" src="/images/dashicons_star-filled.png" alt="" />
					<div class="bg-gray-300 h-2 rounded-full w-10/12"></div>
					<p class="ml-2">0</p>
				</div>
				<div class="flex items-center justify-between mb-6">
					<cornie-checkbox name="fiveStar" />
					<p class="c-indigo ml-2">2</p>
					<img class="ml-2" src="/images/dashicons_star-filled.png" alt="" />
					<div class="bg-gray-300 h-2 rounded-full w-10/12"></div>
					<p class="ml-2">0</p>
				</div>
				<div class="flex items-center justify-between mb-6">
					<cornie-checkbox name="fiveStar" />
					<p class="c-indigo ml-2">1</p>
					<img class="ml-2" src="/images/dashicons_star-filled.png" alt="" />
					<div class="bg-gray-300 h-2 rounded-full w-10/12"></div>
					<p class="ml-2">0</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CornieCheckbox from "../CornieCheckbox.vue"
export default {
  name: "BuyerReview",
  components: { CornieCheckbox },
}
</script>

<style></style>
