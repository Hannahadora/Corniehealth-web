<template>
	<div>
		<div class="hidden my-12 mx-6 xl:grid xl:grid-cols-4 xl:gap-2">
			<div
				v-for="(choice, index) in choices"
				:key="index"
				class="py-12 px-6 cursor-pointer choices c-shadow"
			>
				<img class="mb-7" :src="choice.image" alt="" />
				<span class="sub-titles-1">{{ choice.title }}</span>
				<p class="mt-6">{{ choice.text }}</p>
			</div>
		</div>

		<div class="xl:hidden block">
			<div v-swiper="swiperOption" :loadtheme="false">
				<div class="swiper-wrapper">
					<div
						v-for="(choice, index) in choices"
						:key="index"
						class="swiper-slide py-12 px-6 cursor-pointer choices c-shadow"
					>
						<div class="flex flex-col items-center justify-center">
							<img class="mb-7" :src="choice.image" alt="" />
							<span class="text-center sub-titles-1">{{ choice.title }}</span>
							<p class="text-center mt-6">{{ choice.text }}</p>
						</div>
					</div>
				</div>
				<div slot="pagination" class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

import { directive } from "vue-awesome-swiper"

import { choices } from "../plugins/choices"

export default Vue.extend({
  name: "HealthOutcomes",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      choices,
      banners: choices,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: -10,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
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
</style>
