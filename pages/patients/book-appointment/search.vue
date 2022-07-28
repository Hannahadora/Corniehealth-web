<template>
  <div>
    <linear-loader v-if="loading" />
    <div class="c-wrapper w-full xl:mt-40 mt-20">
      <div class="mt-16 mb-12 flex items-center">
        <div
          @click="selectTab('doctors')"
          :class="{ activetab: selectedTab === 'doctors' }"
          class="mr-6 pb-4 flex items-center"
        >
          <img
            class="mr-2 sub-titles-1"
            src="/images/book-appointment/Icon-doctor-black.png"
            alt=""
          />
          <span class="text-grey-eth font-bold">Doctors</span>
        </div>
        <div
          @click="selectTab('hospitals')"
          :class="{ activetab: selectedTab === 'hospitals' }"
          class="mr-6 pb-4 flex items-center"
        >
          <img
            class="mr-2 sub-titles-1"
            src="/images/book-appointment/Icon-hospital-black.png"
            alt=""
          />
          <span class="text-grey-eth font-bold">Hospital/Clinic</span>
        </div>
      </div>

      <!-- <NuxtChild /> -->

      <select-group @searchQuery="getSearchQuery" :tab="selectedTab" />
      <div>
        <div v-if="selectedTab === 'doctors'">
          <doctors :practitioners="relatedPractitioners" />
        </div>
        <div v-if="selectedTab === 'hospitals'">
          <hospitals :hospitals="relatedProviders" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import Doctors from "~/components/BookAppointment/Search/Doctors.vue"
import Hospitals from "~/components/BookAppointment/Search/Hospitals.vue"
import SelectGroup from "~/components/SelectGroup.vue"
import LinearLoader from "~/components/LinearLoader.vue"
import { namespace } from "vuex-class"

const practitioners = namespace("practitioners")

@Component({
  components: { Doctors, Hospitals, SelectGroup, LinearLoader },
  layout: "book-appointment",
})
export default class SearchResult extends Vue {
  selectedTab: String = "doctors"
  search: any = <any>{}
  loading: Boolean = false

  @practitioners.Getter
  relatedPractitioners!: []

  @practitioners.Getter
  relatedProviders!: []

//   @Watch("search", { immediate: true }) updated() {
//     this.fetchHospitals()
//     this.fetchPractitioners()
//   }

  @Watch("selectedTab") onChange() {
    this.fetchData()
  }

  getSearchQuery(values: any) {
    this.search = values
  }

  selectTab(tab: string) {
    this.selectedTab = tab
  }

  get payload() {
    return {
      ...this.search,
    }
  }

  async fetchPractitioners() {
    try {
      this.loading = true
      await this.$store.dispatch(
        "practitioners/fetchPractitioners",
        {
          ...this.payload
        }
      )
    } catch (err) {
      alert("There was error fetching Practitioners")
    } finally {
      this.loading = false
    }
  }
  async fetchHospitals() {
    try {
      this.loading = true
      await this.$store.dispatch("practitioners/fetchPractice", {
        ...this.payload
      })
    } catch (err) {
      alert("There was error fetching Hospitals")
    } finally {
      this.loading = false
    }
  }

  async fetchData() {
    if (this.selectedTab === "doctors") {
      await this.fetchPractitioners()
    } else if (this.selectedTab === "hospitals") {
      await this.fetchHospitals()
    }
  }

  created() {
    this.fetchData()
    this.search.specialty = this.$route.query.specialty
    this.search.location = this.$route.query.location
  }
}
</script>

<style scoped>
img {
  filter: brightness(8.5);
}
.activetab {
  border-bottom: 3px solid #fe4d3c;
}
.activetab span {
  color: #14171f !important;
}
a.nuxt-link-active img {
  filter: brightness(1);
}
</style>
