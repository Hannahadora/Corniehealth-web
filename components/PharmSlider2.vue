<template>
	<div>
		<div class="my-12 mx-6 xl:grid xl:grid-cols-4 grid-cols-2 hidden gap-2">
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
				<slide
					v-for="(choice, index) in choices"
					:key="index"
					class="h-80 py-12 px-6 text-center cursor-pointer choices c-shadow"
				>
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
import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
// import CSwiper from "./CSwiper.vue"

import "hooper/dist/hooper.css"

export default {
  name: "PharmSlider2",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      choices: [
        {
          active: false,
          image: "/images/providers/linked account.png",
          title: "Medicine List.",
          text: "Keep accurate record of your past and current medications on your mobile.",
        },
        {
          active: true,
          image: "/images/providers/linked account (1).png",
          title: "Help your doctor do better",
          text: "Empower your doctor with the information to treat you better."
        },
        {
          active: false,
          image: "/images/providers/linked account (2).png",
          title: "Exclusive Offers and Discounts",
          text: "Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders.",
        },
        {
          active: false,
          image: "/images/providers/linked account (3).png",
          title: "Unwavering Support",
          text: "Our team work round the clock to make sure we deliver the best prices and convenience to you.",
        },
      ],
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
</style>
