<template>
	<div class="w-full">
		<div class="mb-8">
			<div class="h-full xl:grid grid-cols-7 flex flex-wrap gap-4">
				<multiselectsearch
					v-model="search.specialty"
					icon="/images/book-appointment/icon-doctor-grey.png"
					:placeholder="specialtyPlaceholder"
					:items="specialties"
					:active="specialtyActive"
					@query="findProviders"
				/>
				<multiselectsearch
					v-model="search.location"
					icon="/images/book-appointment/icon-location-grey.png"
					:placeholder="locationPlaceholder"
					:items="locations"
					:active="locationActive"
					@query="findCity"
				/>
				<multiselectsearch
					v-model="search.hospital"
					icon="/images/book-appointment/icon-hospital-grey.png"
					:placeholder="hospitalPlaceholder"
					:items="hospitals"
					:active="hospitalActive"
				/>
				<multiselectsearch
					v-model="search.experience"
					icon="/images/book-appointment/icon-experience-grey.png"
					placeholder="Experience"
					:items="experiences"
				/>
				<multiselectsearch
					v-model="search.visitType"
					icon="/images/book-appointment/icon-visit-grey.png"
					placeholder="Visit Type"
					:items="visitTypes"
				/>
				<!-- <multiselectsearch
						v-model="search.insurance"
						icon="/images/book-appointment/icon-insurance-grey.png"
						placeholder="Insurance"
						:items="insurances"
					/> -->
				<multiselectsearch
					v-model="search.language"
					icon="/images/book-appointment/icon-lang-grey.png"
					placeholder="Language"
					:items="languages"
				/>
				<multiselectsearch
					id="lcd"
					v-model="search.gender"
					icon="/images/book-appointment/icon-gender-grey.png"
					placeholder="Gender"
					:items="genders"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "DropdownDoctorArea",

  data() {
    return {
      loading: false,
      search: {
        specialty: null,
        location: null,
        hospital: null,
        min: 1,
        max: 1,
        visitType: null,
        insurance: null,
        language: null,
        gender: null
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
      specialtyActive: false,
      locationActive: false,
      hospitalActive: false,
    }
  },

  computed: {
    specialtyPlaceholder() {
      if(this.search.specialty) {
        return this.search.specialty
      } else {
        return "Specialty"
      }
    },
    locationPlaceholder() {
      if(this.search.location) {
        return this.search.location
      } else {
        return "Location"
      }
    },
    hospitalPlaceholder() {
      if(this.search.hospital) {
        return this.search.hospital
      } else {
        return "Hospital"
      }
    }
  },

  watch: {
    search: {
      handler() {
        try {
          this.loading = true
          const res = this.$store.dispatch("practitioners/findPractitionersAll", {
            ...this.search,
            location: null,
          })
          //   if (res.success === "true") {
          this.searchResult = res.data
          this.$router.push(
            `/patients/book-appointment/search/doctors?query=${this.search.specialty.toLowerCase()}`
          )
          //   }
        } catch (err) {
          console.log(err)
        } finally {
          this.loading = false
        }
      },
      deep: true,
    },
  },
  
  
  mounted() {
    this.search.specialty = this.$store.getters["misc/selectedSpecialty"]
    this.search.location = this.$store.getters["misc/selectedLocation"]
    this.setActiveStates()
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

    setActiveStates() {
      if(this.search.specialty) {
        this.specialtyActive = true
      }if(this.search.location) {
        this.locationActive = true
      }if(this.search.hospital) {
        this.hospitalActive = true
      }
    },
  },
}
</script>

<style scoped>
.x-scroll {
  overflow-x: scroll;
}
.y-visible {
  overflow-y: visible !important;
  height: 80px;
}
</style>
