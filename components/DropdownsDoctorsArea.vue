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
						v-model="search.specialty"
						icon="/images/book-appointment/icon-doctor-grey.png"
						placeholder="Specialty"
						:items="specialties"
					/>
				</slide>
				<slide>
					<multiselectsearch
						v-model="search.location"
						icon="/images/book-appointment/icon-location-grey.png"
						placeholder="Location"
						:items="locations"
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
      search: {
        specialty: "",
        location: "",
        hospital: "",
        experience: "",
        language: "",
        visitType: "",
        gender: "",
        insurance: "",
      },
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

      specialties: [
        "All",
        "Dentists",
        "ENT",
        "General Practice",
        "Obstetricians & Gynecologists",
        "Pedriatricians",
        "Urologist",
      ],

      locations: [
        "Lagos",
        "Abuja",
        "Port Harcourt",
        "Delta",
        "Kwara",
        "Ibadan",
        "Calabar",
        "Benin",
      ],

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
    search() {
      try {
        this.$store.dispatch(
          "practitioners/findPractitionersAll",
          { ...this.search }
        )
        //   if (res.success === "true") {
        // this.searchResult = res.data
        //   }
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.search.specialty = this.$store.getters["misc/selectedSpecialty"]
    this.search.location = this.$store.getters["misc/selectedLocation"]
  }
}
</script>

<style scoped></style>
