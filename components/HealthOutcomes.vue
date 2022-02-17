<template>
	<div>
		<div class="my-12 mx-6 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
			<div
				v-for="(choice, index) in choices"
				:key="index"
				class="py-12 px-6 cursor-pointer choices c-shadow"
			>
				<img class="mb-7 choices-img" :src="choice.image" alt="" />
				<span class="sub-titles-1">{{ choice.title }}</span>
				<p class="mt-6">{{ choice.text }}</p>
			</div>
		</div>

		<div class="hidden">
			<c-swiper :banners="choices" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

import { choices } from "../plugins/choices"
import CSwiper from "./CSwiper.vue"

export default Vue.extend({
  name: "HealthOutcomes",
  components: {
    CSwiper,
  },

  data() {
    return {
      choices,
    }
  },
})
</script>

<style scoped>
.choices:hover {
  color: #fff;
  background: #fe4d3c;
  border-radius: 8px;
}

.choices:hover img {
  filter: grayscale(1) invert(1) !important;
}

</style>
