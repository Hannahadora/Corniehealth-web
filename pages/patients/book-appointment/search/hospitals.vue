<template>
	<div>
		<linear-loader v-if="loading" />
		<select-group :search="search" />
		<div v-for="hospital in hospitals" :key="hospital.id">
			<hospital-profile :hospital="hospital" />
		</div>
		<div
			v-if="hospitals.length === 0"
			class="h-80 flex items-center justify-center font-bold text-ceneter"
		>
			None found
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import SelectGroup from "~/components/SelectGroup.vue"
import HospitalProfile from "~/components/BookAppointment/HospitalProfile.vue"
import LinearLoader from "~/components/LinearLoader.vue"
@Component({
  components: { CButton, SelectGroup, HospitalProfile, LinearLoader },
})
export default class HospitalsPage extends Vue {
  search: any = ""
  loading: boolean = false
  hospitals: Array<any> = []

  @Watch("search", { immediate: true }) onChange() {
    this.fetchHospitals()
  }

  get query() {
    return this.$route?.query?.query as string
  }

  get payload() {
    return {
      specialty: this.search?.specialty,
      location: this.search?.location,
    }
  }

  async fetchHospitals() {
    try {
      this.loading = true
      this.$router.push(
        `/patients/book-appointment/search/hospitals?specialty=${this.search?.specialty.toLowerCase()}&location=${this.search?.specialty.toLowerCase()}`
      )
      const res = await this.$store.dispatch("practitioners/fetchPractice", {
        ...this.payload,
      })
      if (res.data.success === true) {
        this.hospitals = res.data.data
        this.loading = false
      }
    } catch (err) {
      alert(err)
    } finally {
      this.loading = false
    }
  }

  async created() {
    await this.fetchHospitals()
  }
}
</script>

<style scoped>
.hospital-icon {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>
