<template>
  <div v-swiper="swiperOption" :loadtheme="false">
    <div class="swiper-wrapper">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="swiper-slide py-12 px-6 cursor-pointer c-shadow"
          :class="{ choices: choices, 'offers' : offers }"
      >
        <div
          class="flex flex-col items-center justify-center"
        >
          <img class="mb-7" :src="banner.image" alt="" />
          <span class="text-center sub-titles-1">{{ banner.title }}</span>
          <p class="text-center mt-6">{{ banner.text }}</p>
        </div>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { directive } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default Vue.extend({
  name: "CSwiper",
  directives: {
    swiper: directive,
  },
  props: {
    banners: Array,
    offers: Boolean,
    choices: Boolean,
  },
  data() {
    return {
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

.offers {
  background: #fe4d3c;
}
</style>
