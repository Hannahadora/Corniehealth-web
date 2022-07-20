<template>
	<div class="block h-slider">
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
					icon="/images/book-appointment/icon-insurance-grey.png"
					placeholder="Rating"
					:items="rating"
				/>
			</slide>
			<slide>
				<multiselectsearch
					icon="/images/book-appointment/icon-insurance-grey.png"
					placeholder="Insurance"
					:items="insurance"
				/>
			</slide>
		</hooper>
	</div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide } from "hooper"
// import "hooper/dist/hooper.css"
import "../static/css/doctorhooper.css"

export default {
  name: "HospitalDropdownArea",
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

      rating: ["All", "1-5 years", "6-10 years", "11-15 years", "16-20 years"],

      insurance: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],
    }
  },
}
</script>

<style scoped>

</style>
