<template>
  <div>
    <div
      class="xl:w-full lg:w-2/3 w-full mx-auto xl:grid block grid-cols-5 gap-2"
    >
      <div
        v-click-outside="closePractitionerDropdown"
        class="relative col-span-2"
      >
        <div class="input-wrapper flex items-center py-3 px-5 xl:mb-0 mb-4">
          <img class="xl:mr-6 mr-4" src="/images/search.svg" alt="" />

          <input
            v-model="providerName"
            type="text"
            placeholder="Provider name, practice name or specialty"
            required
            class="w-10/12 focus:outline-none text-sm xl:mr-2 xl:mb-0 xl:block hidden"
            @input="$emit('input', $event.target.value)"
          />
          <input
            v-model="providerName"
            type="text"
            placeholder="Name or specialty"
            required
            class="w-10/12 focus:outline-none text-sm xl:hidden block"
            @input="$emit('input', $event.target.value)"
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
                  class="px-2 py-4 capitalize hover:bg-gray-100 cursor-pointer"
                  @click="selectProvider(specialty)"
                >
                  {{ specialty }}
                </li>
              </ul>
              <div v-if="specialties.length === 0" class="text-razzmataz-pry">
                None found
              </div>
            </div>
            <div class="w-full text-left mb-2">
              <div class="ddh w-full px-2 py-4">Practice</div>
              <ul
                v-for="(practice, index) in practices"
                :key="index"
                class="block"
              >
                <li
                  class="px-2 py-4 capitalize hover:bg-gray-100 cursor-pointer"
                  @click="selectProvider(practice)"
                >
                  {{ practice }}
                </li>
              </ul>
              <div v-if="practices.length === 0" class="text-razzmataz-pry">
                None found
              </div>
            </div>
            <div class="w-full text-left">
              <div class="ddh w-full px-2 py-4">Practitioners</div>
              <ul
                v-for="(practitioner, index) in practitioners"
                :key="index"
                class="block"
              >
                <li
                  class="px-2 py-4 capitalize hover:bg-gray-100 cursor-pointer"
                  @click="selectProvider(practitioner)"
                >
                  {{ practitioner }}
                </li>
              </ul>
              <div v-if="practitioners.length === 0" class="text-razzmataz-pry">
                None found
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-click-outside="closeLocationDropdown" class="col-span-2 relative">
        <div class="input-wrapper flex items-center py-3 px-5">
          <img class="xl:mr-6 mr-4" src="/images/cil_location-pin.svg" alt="" />
          <input
            v-model="cityName"
            type="text"
            placeholder="City name or Zip/Postal code"
            required
            class="w-10/12 focus:outline-none text-sm"
            @input="$emit('input', $event.target.value)"
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
          <div v-if="rLocations.length === 0">
            <span class="text-razzmataz-pry">None found</span>
          </div>
        </div>
      </div>
      <div class="xl:ml-1 xl:mt-0 mt-4">
        <button
          type="button"
          class="w-full text-white bg-c-indigo py-3 px-12"
          :tertiary="true"
          @click="goToBookingPage"
        >
          Search
        </button>
      </div>
    </div>
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
      defLocation: [
        "Lagos",
        "Abuja",
        "Port Harcourt",
        "Delta",
        "Kwara",
        "Ibadan",
        "Calabar",
        "Benin",
        "Abia",
        "Enugu",
      ],
      xres: {
        specialty: ["game", "read", "write"],
        practice: ["play", "jump", "run"],
        practitioners: ["me", "you", "them"],
      },
      specialties: [],
      practices: [],
      practitioners: [],
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
        this.rLocations = this.defLocation.filter((el) =>
          el.toLowerCase().includes(this.cityName.toLowerCase())
        )
      } else this.openLocations = false
    },

    providerName() {
      if (this.providerName !== "") {
        this.practitionersDropdown = true
        this.findProviders()
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
    },

    selectProvider(pname) {
      this.providerName = pname
      setTimeout(() => {
        this.practitionersDropdown = false
      }, 500)
    },

    closeLocationDropdown() {
      this.openLocations = false
    },
    closePractitionerDropdown() {
      this.practitionersDropdown = false
    },

    async findProviders() {
      const res = await this.$store.dispatch(
        "practitioners/findPractitioners",
        this.providerName
      )
      if (res.success === "true") {
        this.specialties = res.data.specialty.filter((el) =>
          el.toLowerCase().includes(this.providerName.toLowerCase())
        )
        this.practices = res.data.practice.filter((el) =>
          el.toLowerCase().includes(this.providerName.toLowerCase())
        )
        this.practitioners = res.data.practitioners.filter((el) =>
          el.toLowerCase().includes(this.providerName.toLowerCase())
        )
      }
    },

    async goToBookingPage() {
      if (this.cityName !== "" && this.providerName !== "") {
        try {
          const res = await this.$store.dispatch(
            "practitioners/findPractitioners",
            this.providerName
          )
          //   if (res.success === "true") {
          this.searchResult = res.data

          this.$router.push("/patients/book-appointment/search-result/doctors")
          //   }
        } catch (err) {
          console.log(err)
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
