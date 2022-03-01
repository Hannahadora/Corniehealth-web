<template>
	<div>
		<!-- <div class="mb-8 xl:grid hidden grid-cols-8 gap-4 dgridG">
        <multiselectsearch
          icon="/images/book-appointment/icon-doctor-grey.png"
          placeholder="Specialty"
          :items="specialty"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-location-grey.png"
          placeholder="Location"
          :items="location"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-hospital-grey.png"
          placeholder="Hospital"
          :items="hospital"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-experience-grey.png"
          placeholder="Experience"
          :items="experience"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-visit-grey.png"
          placeholder="Visit Type"
          :items="visitType"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-insurance-grey.png"
          placeholder="Insurance"
          :items="insurance"
        />
        <multiselectsearch
          icon="/images/book-appointment/icon-lang-grey.png"
          placeholder="Language"
          :items="language"
        />
        <multiselectsearch id="lcd"
          icon="/images/book-appointment/icon-gender-grey.png"
          placeholder="Gender"
          :items="gender"
        />
    </div> -->

		<div class="block d-slider">
			<hooper class="mb-8" :settings="hooperSettings">
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-doctor-grey.png"
						placeholder="Specialty"
						:items="specialty"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-location-grey.png"
						placeholder="Location"
						:items="location"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-hospital-grey.png"
						placeholder="Hospital"
						:items="hospital"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-experience-grey.png"
						placeholder="Experience"
						:items="experience"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-visit-grey.png"
						placeholder="Visit Type"
						:items="visitType"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-insurance-grey.png"
						placeholder="Insurance"
						:items="insurance"
					/>
				</slide>
				<slide>
					<multiselectsearch
						icon="/images/book-appointment/icon-lang-grey.png"
						placeholder="Language"
						:items="language"
					/>
				</slide>
				<slide>
					<multiselectsearch
						id="lcd"
						icon="/images/book-appointment/icon-gender-grey.png"
						placeholder="Gender"
						:items="gender"
					/>
				</slide>
			</hooper>
		</div>
	</div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "DropdownDoctorArea",
  components: {
    // CSwiper,
    Hooper,
    Slide,
  },

  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: false,
        breakpoints: {
          1440: {
            itemsToShow: 0,
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
          414: {
            itemsToShow: 2.5,
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

      visitType: ["Visit", "Walk in", "Virtual"],

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
.d-slider .hooper-slide {
  width: auto !important;
  padding: 0px 5px 0px 0px !important;
}

.d-slider .hooper-list {
  height: 500px !important;
  max-height: auto !important;
  overflow: visible !important;
}

.d-slider .hooper {
height: auto !important;
}

/* .hooper-list {
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  max-height: 350px;
  margin: auto;
} */
@media screen and (max-width: 1280) {
  .hooper-list {
    overflow-x: hidden !important;
  }
}
</style>
