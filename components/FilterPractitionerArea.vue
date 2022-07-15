<template>
	<div>
		<form
			class="xl:w-full lg:w-2/3 w-full mx-auto xl:grid block grid-cols-5 gap-2"
		>
			<div
				v-click-outside="closePractitionerDropdown"
				class="relative col-span-2"
			>
				<div class="input-wrapper flex items-center py-3 px-5 xl:mb-0 mb-4">
					<img
						class="xl:mr-6 mr-4"
						src="/images/akar-icons_search.png"
						alt=""
					/>

					<input
						v-model="providerName"
						type="text"
						placeholder="Provider name, practice name or specialty"
						required
						class="w-10/12 focus:outline-none text-sm xl:mr-2 xl:mb-0 xl:block hidden"
					/>
					<input
						v-model="providerName"
						type="text"
						placeholder="Name or specialty"
						required
						class="w-10/12 focus:outline-none text-sm xl:hidden block"
					/>
				</div>

				<div v-if="practitionersDropdown">
					<div
						class="w-full max-h-80 overflow-y-scroll z-20 mt-10 bg-white px-2 py-4 shadow absolute block top-10"
					>
						<div class="w-full text-left mb-2">
							<div class="ddh w-full px-2 py-4">Specialty</div>
							<ul
								v-for="(specialty, index) in specialties"
								:key="index"
								class="block"
							>
								<li
									class="lowercase px-2 py-4 hover:bg-gray-100 cursor-pointer"
									@click="selectProvider(specialty)"
								>
									{{ specialty }}
								</li>
							</ul>
							<div
								v-if="!loading && specialties.length === 0"
								class="text-razzmataz-pry"
							>
								None found
							</div>
							<div v-if="loading" class="text-blue-500 text-center text-xs">
								Loading
							</div>
						</div>
						<!-- <div class="w-full text-left mb-2">
              <div class="ddh w-full px-2 py-4">Practice</div>
              <ul
                v-for="(practice, index) in practices"
                :key="index"
                class="block"
              >
                <li
                  class="px-2 py-4 lowercase hover:bg-gray-100 cursor-pointer"
                  @click="selectProvider(practice)"
                >
                  {{ practice }}
                </li>
              </ul>
              <div v-if="practices.length === 0" class="text-razzmataz-pry">
                None found
              </div>
            </div> -->
						<div class="w-full text-left">
							<div class="ddh w-full px-2 py-4">Practitioners</div>
							<ul
								v-for="(practitioner, index) in practitioners"
								:key="index"
								class="block"
							>
								<li
									class="lowercase px-2 py-4 hover:bg-gray-100 cursor-pointer"
									@click="selectProvider(practitioner)"
								>
									{{ practitioner }}
								</li>
							</ul>
							<div
								v-if="!loading && practitioners.length === 0"
								class="text-razzmataz-pry"
							>
								None found
							</div>
							<div v-if="loading" class="text-blue-500 text-center text-xs">
								Loading
							</div>
						</div>
					</div>
				</div>
			</div>

			<div v-click-outside="closeLocationDropdown" class="col-span-2 relative">
				<div class="input-wrapper flex items-center py-3 px-5">
					<img class="xl:mr-6 mr-4" src="/images/cil_location-pin.png" alt="" />
					<input
						v-model="cityName"
						type="text"
						placeholder="City name or Zip/Postal code"
						required
						class="w-10/12 focus:outline-none text-sm"
					/>
				</div>

				<div
					v-if="openLocations"
					class="w-full max-h-80 overflow-y-scroll z-20 mt-10 bg-white px-2 py-4 shadow absolute block top-10"
				>
					<div class="ddh w-full px-2 py-4">Select State/Region or City</div>
					<div
						v-for="(location, index) in rLocations"
						:key="index"
						class="text-left px-2 py-4 hover:bg-gray-100 cursor-pointer"
						@click="selectCity(location)"
					>
						{{ location }}
					</div>
					<!-- <div class="text-left px-2 py-4 hover:bg-gray-100 cursor-pointer">
						Anywhere
					</div> -->
					<div v-if="!loading && rLocations.length === 0">
						<span class="text-razzmataz-pry">None found</span>
					</div>
					<div v-if="loading" class="text-blue-500 text-center text-xs">
						Loading
					</div>
				</div>
			</div>
			<div class="xl:ml-1 xl:mt-0 mt-4">
				<button
					type="submit"
					class="w-full text-white bg-c-indigo py-3 px-12"
					:class="{ 'cursor-not-allowed bg-opacity-50': loading }"
					:tertiary="true"
					:disabled="loading"
					@click="goToBookingPage"
				>
					Search
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import vClickOutside from "v-click-outside"
export default {
  name: "FilterPractitioner",

  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      openLocations: false,
      practitionersDropdown: false,
      providerName: "",
      cityName: "",
      searchResult: [],
      rLocations: [],
      specialties: [],
      practices: [],
      practitioners: [],
      loading: false,
    }
  },

  //   @Watch("providerName", { immediate: true }) onInput() {
  //     this.practitionersDropdown = true
  //     const res: any = this.$store.dispatch(
  //       "practitioners/findPractitioners",
  //       this.providerNam
  //     )
  //     this.searchResult = res.data
  //   }
  //   @Watch("cityName", { immediate: true }) input() {
  //     if(this.cityName !== "") {
  //       this.openLocations = true
  //       this.rLocations = this.defLocation.filter((el) => el.toLowerCase().includes(this.cityName.toLowerCase()))
  //     } else this.openLocations = false
  //   }

  watch: {
    cityName() {
      if (this.cityName !== "") {
        this.openLocations = true
        this.findCity(this.cityName)
      } else this.openLocations = false
    },

    providerName() {
      if (this.providerName !== "") {
        this.practitionersDropdown = true
        this.findProviders(this.providerName)
      } else this.practitionersDropdown = false
    },
  },

  created() {},

  methods: {
    selectCity(location) {
      this.cityName = location
      setTimeout(() => {
        this.openLocations = false
      }, 500)
      this.$store.dispatch("misc/updateSelectedLocation", this.cityName)
    },

    selectProvider(pname) {
      this.providerName = pname
      setTimeout(() => {
        this.practitionersDropdown = false
      }, 500)
      this.$store.dispatch("misc/updateSelectedSpecialty", this.providerName)
    },

    closeLocationDropdown() {
      this.openLocations = false
      const em =
        this.rLocations && this.rLocations.find(el => el === this.cityName)
      if (!em) {
        this.cityName = ""
      }
    },

    closePractitionerDropdown() {
      this.practitionersDropdown = false
      const em =
        this.specialties &&
        this.specialties.find(el => el === this.providerName)
      if (!em) {
        this.providerName = ""
      }
    },

    async findCity(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/findLocations",
        query
      )
      this.loading = false
      // if (res.success === "true") {
      this.rLocations = res.data.data || []
      // }
    },

    async findProviders(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/providersDropdown",
        query
      )
      this.loading = false
      // if (res.success === "true") {
      this.specialties = res.data.data.specialties
      this.practitioners = res.data.data.providers.map(el => el.name)
      // }
    },

    async goToBookingPage() {
      if (this.providerName !== "") {
        let data
        if (this.cityName !== "") {
          data = {
            specialty: this.providerName,
            location: this.cityName,
          }
        } else {
          data = {
            specialty: this.providerName,
          }
        }
        try {
          this.loading = true
          const res = await this.$store.dispatch(
            "practitioners/findPractitionersPart",
            { ...data }
          )
          //   if (res.success === "true") {
          this.searchResult = res.data

          this.$router.push(
            `/patients/book-appointment/search/doctors?query=${this.providerName.toLowerCase()}`
          )
          this.loading = false
          //   }
        } catch (err) {
          console.log(err)
        } finally {
          this.loading = false
        }
      }
    },
  },
}
</script>

<style scoped>
.ddh {
  background: #f0f4fe;
  border-radius: 8px;
  padding: 16px auto 16px 8px;
  text-align: left;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #667499;
}
.input-wrapper {
  border: 1px solid #c5c4d4;
  box-sizing: border-box;
  border-radius: 4px;
}

.search-dropdown {
  max-height: 300px;
}

.c-input {
  border: red;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9d8ec1;
  border-radius: 2px;
}

@media screen and (max-width: 1024px) {
  .c-input {
    font-size: 14px !important;
  }
}
</style>
