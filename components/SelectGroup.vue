<template>
	<div class="w-full">
		<linear-loader v-if="loading" />

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
					item-label-prop="name"
					item-value-prop="id"
					:items="hospitals"
					:active="hospitalActive"
					@query="findHospitals"
				/>
				<multiselectsearch
					v-if="!$route.path.includes('hospital')"
					v-model="search.experience"
					icon="/images/book-appointment/icon-experience-grey.png"
					placeholder="Experience"
					:items="experiences"
				/>
				<multiselectsearch
					v-if="!$route.path.includes('hospital')"
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
					v-if="!$route.path.includes('doctor')"
					v-model="search.rating"
					icon="/images/book-appointment/icon-insurance-grey.png"
					placeholder="Rating"
					:items="ratings"
				/>
				<multiselectsearch
					v-if="!$route.path.includes('hospital')"
					v-model="search.language"
					icon="/images/book-appointment/icon-lang-grey.png"
					placeholder="Language"
					:items="languages"
				/>
				<multiselectsearch
					v-if="!$route.path.includes('hospital')"
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
import LinearLoader from "./LinearLoader.vue"
export default {
  name: "SelectGroup",
  components: { LinearLoader },

  data() {
    return {
      loading: false,
      search: {
        specialty: undefined,
        location: undefined,
        hospital: undefined,
        min: 1,
        max: 1,
        insurance: undefined,
        language: undefined,
        gender: undefined,
        rating: undefined,
        visitType: undefined,
      },
      specialties: [],

      locations: [],

      hospitals: [],

      experiences: [
        "All",
        "1-5 years",
        "6-10 years",
        "11-15 years",
        "16-20 years",
      ],

      visitTypes: ["Visit", "Walk in", "Virtual"],
      ratings: ["All", "1 star", "2 stars", "3 stars", "4 stars, 5 stars"],
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
      if (this.search.specialty) {
        return this.search.specialty
      } else {
        return "Specialty"
      }
    },
    locationPlaceholder() {
      if (this.search.location) {
        return this.search.location
      } else {
        return "Location"
      }
    },
    hospitalPlaceholder() {
      if (this.search.hospital) {
        return this.search.hospital
      } else {
        return "Hospital"
      }
    },
  },

  watch: {
    search: {
      handler() {
        try {
          this.loading = true
          const res = this.$store.dispatch(
            "practitioners/fetchPractitioners",
            { ...this.search }
          )
          //   if (res.data.success === true) {
          this.searchResult = res.data
          this.$router.push(
            `${this.$route.path}?query=${this.search.specialty.toLowerCase()}`
          )
          //   }
        } catch (err) {
          alert(err)
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
        "practitioners/findPractitionerByName",
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
      // if (res.data.success === true) {
      this.locations = res.data.data || []
      // }
    },
    async findHospitals(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/findHospitals",
        query || null
      )
      this.loading = false
      // if (res.data.success === true) {
      this.hospitals = res.data.data || []
      // }
    },

    setActiveStates() {
      if (this.search.specialty) {
        this.specialtyActive = true
      }
      if (this.search.location) {
        this.locationActive = true
      }
      if (this.search.hospital) {
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
