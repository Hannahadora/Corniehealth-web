<template>
  <div class="">
    <div class="xl:grid hidden grid-cols-5 text-white bg-razzmataz-pry py-2">
      <div
        class="px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
      >
        <img class="mb-4" src="/images/book-appointment.svg" alt="" />
        <span class="sub-titles-1">Manage Appointments</span>
      </div>
      <div
        class="tooltip px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
      >
        <span class="tooltiptext">Coming soon</span>
        <img
          class="mb-4"
          src="/images/appointments/healthicons_doctor-male-outline.png"
          alt=""
        />
        <span class="sub-titles-1">Shop Pharmacy</span>
      </div>
      <div
        class="tooltip px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
      >
        <span class="tooltiptext">Coming soon</span>
        <img class="mb-4" src="/images/carbon_medication.svg" alt="" />
        <span class="sub-titles-1">Book Lab Tests</span>
      </div>
      <div
        class="tooltip px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
      >
        <span class="tooltiptext">Coming soon</span>
        <img class="mb-4" src="/images/carbon_result.svg" alt="" />
        <span class="sub-titles-1">Shop Plan</span>
      </div>
      <div
        class="px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
      >
        <img class="mb-4" src="/images/carbon_result.svg" alt="" />
        <span class="sub-titles-1">My Health Records</span>
      </div>
    </div>

    <div class="mt-20 xl:hidden block">
      <hooper :settings="hooperSettings">
        <slide
          ><div
            class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
          >
            <img class="mb-4" src="/images/book-appointment.svg" alt="" />
            <span class="sub-titles-1">Manage Appointments</span>
          </div>
        </slide>
        <slide
          ><div
            class="tooltip h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
          >
            <span class="tooltiptext">Coming soon</span>
            <img
              class="mb-4"
              src="/images/appointments/healthicons_doctor-male-outline.png"
              alt=""
            />
            <span class="sub-titles-1">Shop Pharmacy</span>
          </div>
        </slide>
        <slide>
          <div
            class="tooltip h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
          >
            <span class="tooltiptext">Coming soon</span>
            <img class="mb-4" src="/images/carbon_medication.svg" alt="" />
            <span class="sub-titles-1">Book Lab Tests</span>
          </div>
        </slide>
        <slide
          ><div
            class="tooltip h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
          >
            <span class="tooltiptext">Coming soon</span>
            <img class="mb-4" src="/images/carbon_result.svg" alt="" />
            <span class="sub-titles-1">Shop Plan</span>
          </div>
        </slide>
        <slide>
          <div
            class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
          >
            <img class="mb-4" src="/images/carbon_result.svg" alt="" />
            <span class="sub-titles-1">My Health Records</span>
          </div>
        </slide>

        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "AppointSlider1",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
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
