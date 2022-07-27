<template>
	<div class="w-full xl:mt-16 mt-14">
		<div class="c-wrapper xl:mt-40 mt-16">
			<back-btn />
			<hospital-profile :hospital="hospital" />
			<p class="sub-titles-3 text-center text-razzmataz-pry mt-9 mb-14">
				View address in map
			</p>

			<div class="info-container p-6 mb-28">
				<div class="sub-titles-1 mb-8">Photos</div>
				<div class="px-12">
					<hospital-photos :hospital="hospital" />
				</div>
			</div>

			<div class="info-container p-6 mb-28">
				<ul class="flex items-center border-b mb-8">
					<li
						v-for="(tab, index) in tabs"
						:key="index"
						:class="{ 'active-tab': activeTab === tab }"
						class="py-2 px-4 text-grey-blue cursor-pointer"
						@click="handleActiveTab(tab)"
					>
						{{ tab }}
					</li>
				</ul>

				<div v-if="activeTab === 'Specialties'">
					<hospital-specialties :hospital="hospital" />
				</div>
				<div v-if="activeTab === 'Doctors'">
					<div v-for="practitioner in hospital.practioners" :key="practitioner.id">
						<doctors-card :practitioner="practitioner" />
					</div>
				</div>
				<div v-if="activeTab === 'Insurance'"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import SelectGroup from "~/components/SelectGroup.vue"
import HospitalProfile from "~/components/BookAppointment/HospitalProfile.vue"
import BackBtn from "~/components/BackBtn.vue"
import HospitalSpecialties from "~/components/BookAppointment/Profile/HospitalSpecialties.vue"
import DoctorsCard from "~/components/BookAppointment/DoctorsCard.vue"
import HospitalPhotos from "~/components/BookAppointment/HospitalPhotos.vue"

@Component({
  components: {
    CButton,
    SelectGroup,
    HospitalProfile,
    BackBtn,
    HospitalSpecialties,
    DoctorsCard,
    HospitalPhotos,
  },
  layout: "book-appointment",
})
export default class HospitalDetails extends Vue {
  activeTab: string = "Specialties"
  tabs: Array<any> = ["Specialties", "Doctors"]
  loading: boolean = false
  hospital: any = <any>{}

  get payload() {
	return {
		// locationId: "",
		practiceId: this.$route.params.id
	}
  }

  handleActiveTab(tab: any) {
    this.activeTab = tab
  }

   async fetchHospitalInfo() {
    try {
      this.loading = true
      const res = await this.$store.dispatch("practitioners/fetchProviderData", {
        ...this.payload,
      })
      if (res.data.success === true) {
        this.hospital = res.data.data
        this.loading = false
      }
    } catch (err) {
      alert(err)
    } finally {
      this.loading = false
    }
  }

  async created() {
	await this.fetchHospitalInfo()
  }
}
</script>

<style scoped>
.hospital-icon {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.active-tab {
  border-bottom: 4px solid #fe4d3c;
  font-weight: 600;
  color: #14171f;
}

.info-container > ul > li:nth-of-type(1) {
  padding-left: 0px;
}

.info-container > ul > li:nth-of-type(3) {
  padding-right: 0px;
}
</style>
