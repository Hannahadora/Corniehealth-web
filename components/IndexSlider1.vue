<template>
	<div>
		<div
			class="xl:grid xl:grid-cols-4 grid-cols-2 hidden text-white bg-razzmataz-pry mt-16 py-3"
		>
			<div
				v-for="(offer, index) in offers"
				:key="index"
				class="px-6 py-8 border-r border-white"
			>
				<div class="flex items-center xl:justify-start justify-center">
					<img class="mb-4" :src="offer.image" alt="" />
				</div>
				<div class="h-16">
					<span class="sub-titles-1">{{ offer.title }}</span>
				</div>
				<p class="mt-4">
					{{ offer.text }}
				</p>
			</div>
		</div>

		<div class="mt-20 xl:hidden block">
      <hooper :settings="hooperSettings">
			<slide
				v-for="(offer, index) in offers"
				:key="index"  class="h-80 flex flex-col justify-center items-center text-white bg-razzmataz-pry px-6 py-8 border-r border-white">
				<div class="flex items-center xl:justify-start justify-center">
					<img class="mb-4" :src="offer.image" alt="" />
				</div>
				<div class="h-16">
					<span class="sub-titles-1">{{ offer.title }}</span>
				</div>
				<p class="mt-4">
					{{ offer.text }}
				</p>
			</slide>

			<hooper-pagination slot="hooper-addons"></hooper-pagination>
		</hooper>
    </div>
	</div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
} from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "IndexSlider1",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      offers: [
        {
          image: "/images/book-appointment.svg",
          title: "Book and manage appointments",
          text: "Schedule and manage appointments online and view details of past and src upcoming appointments.",
        },
        {
          image: "/images/appointments/healthicons_doctor-male-outline.png",
          title: "Consult your doctor",
          text: "Consult with your doctor from your comfort and enjoy timely and quality care.",
        },
        {
          image: "/images/carbon_medication.svg",
          title: "Medications",
          text: " View past and current medications and request a medication refill instantly.",
        },
        {
          image: "/images/carbon_result.svg",
          title: "Lab test",
          text: "Frequent lab visits are so old school. Access your diagnostic results, accompanying doctor's notes InApp.",
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
