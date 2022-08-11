<template>
  <div>
    <linear-loader v-if="loading" />
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
            <div v-if="loading" class="text-blue-500 text-center text-xs">
              Searching
            </div>

            <div v-if="!loading && specialties.length > 0">
              <div class="w-full text-left mb-2">
                <div class="ddh w-full px-2 py-4">Specialty</div>
                <ul
                  v-for="(specialty, index) in specialties"
                  :key="index"
                  class="block"
                >
                  <li
                    class="lowercase px-2 py-4 hover:bg-gray-100 cursor-pointer"
                    @click="selectProvider(specialty, 'specialty')"
                  >
                    {{ specialty.name }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="providers.length > 0">
              <div class="w-full text-left mb-2">
                <div class="ddh w-full px-2 py-4">Provider</div>
                <ul
                  v-for="(provider, index) in providers"
                  :key="index"
                  class="block"
                >
                  <li
                    class="px-2 py-4 lowercase hover:bg-gray-100 cursor-pointer"
                    @click="selectProvider(provider, 'provider')"
                  >
                    {{ provider.name }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="!loading && practitioners.length > 0">
              <div class="w-full text-left">
                <div class="ddh w-full px-2 py-4">Practitioners</div>
                <ul
                  v-for="(practitioner, index) in practitioners"
                  :key="index"
                  class="block"
                >
                  <li
                    class="lowercase px-2 py-4 hover:bg-gray-100 cursor-pointer"
                    @click="selectProvider(practitioner, 'practitioner')"
                  >
                    {{ practitioner.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-click-outside="closeLocationDropdown" class="col-span-2 relative">
        <div class="input-wrapper flex items-center py-3 px-5">
          <img class="xl:mr-6 mr-4" src="/images/cil_location-pin.png" alt="" />
          <input
            v-model="locationName"
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
            {{ location.name }}
          </div>
          <div v-if="!loading && rLocations.length === 0">
            <div
              class="text-left px-2 py-4 hover:bg-gray-100 cursor-pointer"
              @click="selectCity('Everywhere')"
            >
              Everywhere
            </div>
          </div>
          <div v-if="loading" class="text-blue-500 text-center text-xs">
            Searching
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
          {{ type === "provider" || type === "practitioner" ? "Go" : "Search" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside"
export default {
  name: "ProviderSearch",

  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      openLocations: false,
      practitionersDropdown: false,
      type: "",
      providerData: "",
      providerName: "",
      locationName: "",
      locationId: "",
      rLocations: [],
      specialties: [],
      providers: [],
      practitioners: [],
      loading: false,
    }
  },

  computed: {
    payload() {
      let data
      if (this.locationName !== "") {
        data = {
          specialty: this.providerName,
          location: this.locationName,
        }
      }
      if (this.locationName === "Everywhere" || "") {
        data = {
          specialty: this.providerName,
          location: undefined,
        }
      }

      return data
    },
  },

  watch: {
    locationName() {
      if (this.locationName !== "") {
        this.openLocations = true
        // if (this.type === "specialty") {
        //   this.findCity(this.locationName)
        // }
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
        this.locationName = location.name
        this.locationId = location.id
      setTimeout(() => {
        this.openLocations = false
      }, 500)
      this.$store.dispatch("misc/updateSelectedLocation", this.locationName)
    },

    selectProvider(value, type) {
      this.providerData = value
      this.providerName = value.name
      this.type = type
      this.rLocations = value.locations
      this.locationName = value.locations?.length
        ? value.locations[0]?.name
        : []
      this.$store.dispatch("misc/updatePractitionerLocations", this.rLocations)
      setTimeout(() => {
        this.practitionersDropdown = false
      }, 500)
      this.$store.dispatch("misc/updateSelectedSpecialty", this.providerName)
    },

    closeLocationDropdown() {
      this.openLocations = false
      const em =
        this.rLocations &&
        this.rLocations.find((el) => el === this.locationName)
      if (!em || this.locationName !== "Everywhere") {
        this.locationName = ""
      }
    },

    closePractitionerDropdown() {
      this.practitionersDropdown = false
      // const xspecialty = this.specialties?.find(
      //   el => el.name === this.providerName
      // )
      // const xpractitioners = this.practitioners?.find(
      //   el => el.name === this.providerName
      // )
      // const xproviders = this.providers?.find(
      //   el => el.name === this.providerName
      // )
      // if (!xspecialty || !xpractitioners || !xproviders) {
      //   this.providerName = ""
      // }
    },

    async findCity(query) {
      this.loading = true
      const res = await this.$store.dispatch(
        "practitioners/findLocations",
        query
      )
      this.loading = false
      if (res.data.success === true) {
        this.rLocations = res.data.data || []
      }
    },

    async findProviders(query) {
      try {
        this.loading = true
        const res = await this.$store.dispatch(
          "practitioners/searchForPractitioners",
          query
        )
        if (res.data.success === true) {
          this.specialties = res.data.data.specialties
          this.practitioners = res.data.data.practitioners
          this.providers = res.data.data.providers
        }
      } catch (err) {
        alert(err.message)
      } finally {
        this.loading = false
      }
    },

    async goToBookingPage() {
      if (this.type === "specialty") {
        try {
          this.loading = true
          const res = await this.$store.dispatch(
            "practitioners/fetchPractitioners",
            { ...this.payload }
          )
          if (res.data.success === true) {
            this.$router.push(
              `/patients/appointment/search?specialty=${this.providerName.toLowerCase()}&location=${this.locationName.toLowerCase()}`
            )
            this.loading = false
          }
        } catch (err) {
          alert(err)
        } finally {
          this.loading = false
        }
      } else if (this.type === "practitioner") {
        this.$router.push(
          `/patients/appointment/doctor/${this.providerData.id}/profile`
        )
      } else if (this.type === "provider") {
        this.$router.push(
          `/patients/appointment/hospital/${this.providerData.id}/info`
        )
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
