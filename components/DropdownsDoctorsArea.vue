<template>
	<div>
		<!-- <div class="mb-8 flex items-start flex-no-wrap space-x-4 dgridG overflow-x-scroll h-auto border-4"> -->
		<!-- <div class="flex items-start flex-nowrap space-x-4 carousel">
			<multiselectsearch
				icon="/images/book-appointment/icon-doctor-grey.png"
				placeholder="Specialty"
				:items="specialties"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-location-grey.png"
				placeholder="Location"
				:items="locations"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-hospital-grey.png"
				placeholder="Hospital"
				:items="hospitals"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-experience-grey.png"
				placeholder="Experience"
				:items="experiences"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-visit-grey.png"
				placeholder="Visit Type"
				:items="visitTypes"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-insurance-grey.png"
				placeholder="Insurance"
				:items="insurances"
			/>
			<multiselectsearch
				icon="/images/book-appointment/icon-lang-grey.png"
				placeholder="Language"
				:items="languages"
			/>
			<multiselectsearch
				id="lcd"
				icon="/images/book-appointment/icon-gender-grey.png"
				placeholder="Gender"
				:items="genders"
			/>
		</div> -->

		<div class="block d-slider">
			<hooper class="mb-8" :settings="hooperSettings">
				<slide>
					<multiselectsearch
						v-model="search.specialty"
						icon="/images/book-appointment/icon-doctor-grey.png"
						placeholder="Specialty"
						:items="specialties"
						@query="findProviders"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.location"
						icon="/images/book-appointment/icon-location-grey.png"
						placeholder="Location"
						:items="locations"
						@query="findCity"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.hospital"
						icon="/images/book-appointment/icon-hospital-grey.png"
						placeholder="Hospital"
						:items="hospitals"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.experience"
						icon="/images/book-appointment/icon-experience-grey.png"
						placeholder="Experience"
						:items="experiences"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.visitType"
						icon="/images/book-appointment/icon-visit-grey.png"
						placeholder="Visit Type"
						:items="visitTypes"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.insurance"
						icon="/images/book-appointment/icon-insurance-grey.png"
						placeholder="Insurance"
						:items="insurances"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.language"
						icon="/images/book-appointment/icon-lang-grey.png"
						placeholder="Language"
						:items="languages"
					/>
				</slide>
				<slide>
					<multiselectsearch
						id="lcd"
						v-model="search.gender"
						icon="/images/book-appointment/icon-gender-grey.png"
						placeholder="Gender"
						:items="genders"
					/>
				</slide>
			</hooper>
		</div>
	</div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide } from "hooper"
// import "hooper/dist/hooper.css"
import "../static/css/doctorhooper.css"

export default {
  name: "DropdownDoctorArea",
  components: {
    // CSwiper,
    Hooper,
    Slide,
  },

  data() {
    return {
      loading: "",
      search: {},
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

      specialties: [],

      locations: [],

      hospitals: [
        "All",
        "Blue Cross Hospital",
        "Eko Hospital",
        "Evercare Hospital",
        "Lagoon Hospital",
        "Good Times",
        "Blue Foundation",
        "New Times",
      ],

      experiences: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],

      visitTypes: ["Visit", "Walk in", "Virtual"],

      insurances: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],
      languages: ["English", "Yoruba", "Ibo", "Hausa", "French"],
      genders: ["All", "Male", "Female"],
    }
  },

  watch: {
    search: {
      handler() {
        try {
          const res = this.$store.dispatch("practitioners/findPractitionersAll", {
            ...this.search,
            location: null,
          })
          //   if (res.success === "true") {
          this.searchResult = res.data
          //   }
        } catch (err) {
          console.log(err)
        }
      },
      deep: true,
    },
  },

  mounted() {
    this.search.specialty = this.$store.getters["misc/selectedSpecialty"]
    this.search.location = this.$store.getters["misc/selectedLocation"]
  },

  methods: {
    async findProviders(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/providersDropdown",
        query || null
      )
      this.loading = false
      this.specialties = res.data.data.specialties
    },

    async findCity(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/findLocations",
        query || null
      )
      this.loading = false
      // if (res.success === "true") {
      this.locations = res.data.data || []
      // }
    },
  },
}
</script>

<style scoped>
/* width */
/* ::-webkit-scrollbar {
  width: 0px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  display: none;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
  display: none;
} */

.carousel {
  width: 100%;
  display: flex;
  /* overflow-x: scroll; */
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
