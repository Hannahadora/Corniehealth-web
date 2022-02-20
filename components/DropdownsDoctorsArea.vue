<template>
  <div>
    <hooper class="mb-8">
      <slide>
        <select-dropdown
          class=""
          head-text="Doctors"
          icon="/images/book-appointment/icon-doctor-grey.png"
          :options="specialty"
        />
      </slide>
      <slide>
        <select-dropdown
          class=""
          head-text="Location"
          icon="/images/book-appointment/icon-location-grey.png"
          :options="location"
        />
      </slide>
      <slide>
        <select-dropdown
          class="w-auto"
          head-text="Hospital"
          icon="/images/book-appointment/icon-hospital-grey.png"
          :options="hospital"
        />
      </slide>
      <slide
        ><select-dropdown
          class=""
          head-text="Experience"
          icon="/images/book-appointment/icon-experience-grey.png"
          :options="experience"
      /></slide>
      <slide>
        <select-dropdown
          class=""
          head-text="Visit Type"
          icon="/images/book-appointment/icon-visit-grey.png"
          :options="visitType"
        />
      </slide>
      <slide>
        <select-dropdown
          class=""
          head-text="Insurance"
          icon="/images/book-appointment/icon-insurance-grey.png"
          :options="insurance"
        />
      </slide>
      <slide>
        <select-dropdown
          class=""
          head-text="Language"
          icon="/images/book-appointment/icon-lang-grey.png"
          :options="language"
        />
      </slide>
      <slide>
        <select-dropdown
          class=""
          head-text="Gender"
          icon="/images/book-appointment/icon-gender-grey.png"
          :options="gender"
        />
      </slide>
    </hooper>
  </div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "DropdownDoctorArea",
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
          1440: {
            itemsToShow: 8,
          },
          1280: {
            itemsToShow: 6,
          },

          1024: {
            itemsToShow: 4,
          },

          768: {
            itemsToShow: 2,
          },
        },
      },

      specialty: [
        "All",
        "Dentists",
        "ENT",
        "General Practice",
        "Obstetricians & Gynecologists",
        "Pedriatricians",
        "Urologist",
      ],

      location: [
        "Lagos",
        "Abuja",
        "Port Harcourt",
        "Delta",
        "Kwara",
        "Ibadan",
        "Calabar",
        "Benin",
      ],

      hospital: [
        "All",
        "Blue Cross Hospital",
        "Eko Hospital",
        "Evercare Hospital",
        "Lagoon Hospital",
        "Good Times",
        "Blue Foundation",
        "New Times",
      ],

      experience: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],

      visitType: [
        "Visit",
        "Walk in",
        "Virtual",
      ],

      insurance: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],
      language: ["English", "Yoruba", "Ibo", "Hausa", "French"],
      gender: ["All", "Male", "Female"],
    }
  },
}
</script>


<style scoped>
.hooper-slide {
    width: auto !important;
    padding: 0px 16px 0px 0px!important;
}

.hooper-list {
    height: 500px !important;
    max-height: auto !important;
}


@media screen and (max-width: 1280) {
    .hooper-list {
   overflow-x: hidden;
}
}

</style>