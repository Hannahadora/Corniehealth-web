<template>
	<div>
		<div
			class="my-12 mx-6 xl:grid xl:grid-cols-4 grid-cols-2 hidden gap-2"
		>
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

		<div class="xl:hidden block mt-20">
			<hooper :settings="hooperSettings">
				<slide v-for="(choice, index) in choices" :key="index"  class="h-80 py-12 px-6 text-center cursor-pointer choices c-shadow">
					<div class="flex items-center justify-center">
						<img class="mb-7 choices-img" :src="choice.image" alt="" />
					</div>
					<span class="sub-titles-1">{{ choice.title }}</span>
					<p class="mt-6 text-center">{{ choice.text }}</p>
				</slide>

				<!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
			</hooper>

		</div>
	</div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
} from "hooper"
import { choices } from "../plugins/choices"
// import CSwiper from "./CSwiper.vue"

import "hooper/dist/hooper.css"

export default {
  name: "HealthOutcomes",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      choices,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          1280: {
            itemsToShow: 3,
          },

          1024: {
            itemsToShow: 2,
          },

          768: {
            itemsToShow: 1,
          },
        },
      },
    }
  },
}
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
