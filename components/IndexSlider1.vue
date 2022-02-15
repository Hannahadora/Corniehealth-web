<template>
  <div>
    <div
      class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-white bg-razzmataz-pry mt-16 py-3"
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

    <div class="hidden text-white mt-16 py-3">
      <c-swiper class="" offers :banners="offers" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CSwiper from "./CSwiper.vue"
export default Vue.extend({
  name: "IndexSlider1",
  components: { CSwiper },
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
    }
  },
})
</script>
