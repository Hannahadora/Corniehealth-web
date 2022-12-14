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
					@query="findSpecialtys"
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
					v-if="tab === 'doctors'"
					v-model="search.experience"
					icon="/images/book-appointment/icon-experience-grey.png"
					placeholder="Experience"
					:items="experiences"
				/>
				<multiselectsearch
					v-if="tab === 'doctors'"
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
					v-if="tab === 'hospitals'"
					v-model="search.rating"
					icon="/images/book-appointment/icon-insurance-grey.png"
					placeholder="Rating"
					:items="ratings"
				/>
				<multiselectsearch
					v-if="tab === 'doctors'"
					v-model="search.language"
					icon="/images/book-appointment/icon-lang-grey.png"
					placeholder="Language"
					:items="languages"
				/>
				<multiselectsearch
					v-if="tab === 'doctors'"
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
  name: "SelectGroup",
  components: {},

  props: {
    tab: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      loading: false,
      search: {
        specialty: undefined,
        location: undefined,
        hospital: undefined,
        min: undefined,
        max: undefined,
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
      async handler() {
        this.$emit("searchQuery", this.search)
        this.$emit("loadingState", this.loading)
        this.$router.push(
          `${
            this.$route.path
          }?specialty=${this.search.specialty.toLowerCase()}?location=${this.search.location.toLowerCase()}`
        )
        await this.fetchPractitioners()
        await this.fetchHospitals()
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

    async findSpecialtys(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/searchForPractitioners",
        query
      )
      if (res.data.success === true) {
        const xspecialties = res.data.data.specialties
        this.specialties = xspecialties.specialties.map(el => el.name)
      }
      this.loading = false
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

    async fetchHospitals() {
      try {
        this.loading = true
        await this.$store.dispatch("practitioners/fetchPractice", {
          ...this.search,
        })
      } catch (err) {
        alert("There was error fetching Hospitals")
      } finally {
        this.loading = false
      }
    },

    async fetchPractitioners() {
      try {
        this.loading = true
        await this.$store.dispatch("practitioners/fetchPractitioners", {
          ...this.search,
        })
      } catch (err) {
        alert("There was error fetching Practitioners")
      } finally {
        this.loading = false
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
