<template>
  <div>
    <div
      class="xl:w-full lg:w-2/3 w-full mx-auto xl:grid block grid-cols-5 gap-2"
    >
      <div class="relative col-span-2">
        <div class="input-wrapper flex items-center py-3 px-5 xl:mb-0 mb-4">
          <img
            class="xl:mr-6 mr-4"
            src="/images/akar-icons_search.png"
            alt=""
          />

          <input
            v-model="productName"
            type="text"
            placeholder="Search by generic medication or by brand "
            required
            class="w-10/12 focus:outline-none text-sm xl:mr-2 xl:mb-0 xl:block hidden"
            @input="$emit('input', $event.target.value)"
          />
          <input
            v-model="productName"
            type="text"
            placeholder="Medication"
            required
            class="w-10/12 focus:outline-none text-sm xl:hidden block"
            @input="$emit('input', $event.target.value)"
          />

          <img src="/images/carbon_camera.png" alt="" />
        </div>

        <div
          v-click-outside="closeLocationDropdown"
          class="col-span-2 relative"
        >
          <div class="input-wrapper flex items-center py-3 px-5">
            <img
              class="xl:mr-6 mr-4"
              src="/images/cil_location-pin.png"
              alt=""
            />
            <input
              v-model="cityName"
              type="text"
              placeholder="City name or Zip/Postal code"
              required
              class="w-10/12 focus:outline-none text-sm"
              @input="openLocations = true"
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
            <div v-if="!loading && rLocations.length === 0">
              <span class="text-razzmataz-pry">None found</span>
            </div>
            <div v-if="loading" class="text-blue-500 text-center text-xs">
              Loading
            </div>
          </div>
        </div>
      </div>
      <div class="xl:ml-1 xl:mt-0 mt-4">
        <button
          type="button"
          class="w-full text-white bg-c-indigo py-3 px-5"
          :tertiary="true"
          @click="goShopping"
        >
          Find the best prices
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
      prdoductDropdown: false,
      productName: "",
      cityName: "",
      searchResult: [],
      rLocations: [],
      loading: false,
    }
  },

  watch: {
    cityName() {
      if (this.cityName !== "") {
        this.openLocations = true
        this.findCity()
      } else this.openLocations = false
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

    closeLocationDropdown() {
      this.openLocations = false
      this.rLocations.forEach((el) => {
        if (this.cityName !== el || this.rLocations.length === 0) {
          this.cityName = ""
        }
      })
    },

    async findCity() {
      this.loading = true
      const res = await this.$store.dispatch("pharmacy/fetchProductLocations")
      this.loading = true
      this.rLocations = res.data.data || []
    },

    async goShopping() {
      if (this.cityName !== "" && this.productName !== "") {
        this.$router.push(
          `/pharmacy/search?product=${this.productName}?location=${this.cityName}`
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
