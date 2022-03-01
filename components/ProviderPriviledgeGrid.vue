<template>
	<div>
		<div
			class="mt-12 mb-20 mx-6 xl:grid hidden grid-cols-4 gap-x-6 gap-y-16"
		>
			<div
				v-for="(priviledge, index) in providerPriviledges"
				:key="index"
				class="py-12 px-6 cursor-pointer choices c-shadow"
			>
				<div class="flex items-center justify-center">
					<img class="mb-7 choices-img" :src="priviledge.image" alt="" />
				</div>
				<div class="h-16 text-center">
					<span class="sub-titles-1">{{ priviledge.title }}</span>
				</div>
				<p class="mt-6 text-center">{{ priviledge.text }}</p>
			</div>
		</div>

		<div class="xl:hidden block mt-20">
			<hooper :settings="hooperSettings">
				<slide
					v-for="(priviledge, index) in providerPriviledges"
					:key="index"
					class="py-12 px-6 cursor-pointer choices c-shadow"
				>
					<div class="flex items-center justify-center">
						<img class="mb-7 choices-img" :src="priviledge.image" alt="" />
					</div>
					<div class="h-16 text-center">
						<span class="sub-titles-1">{{ priviledge.title }}</span>
					</div>
					<p class="mt-6 text-center">{{ priviledge.text }}</p>
				</slide>

				<!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
				<hooper-pagination slot="hooper-addons"></hooper-pagination>
				<!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
			</hooper>
		</div>
	</div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import { providerPriviledges } from "../plugins/providerPriviledges"
// import CSwiper from "./CSwiper.vue"

import "hooper/dist/hooper.css"

export default {
  name: "ProviderPriviledgeGrid",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      providerPriviledges,
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

.hooper-list {
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  max-height: 350px;
  margin: auto;
}
.hooper-slide {
    height: 400px !important;
}
</style>
