<template>
	<div>
		<div ref="mainboard">
			<div v-if="!loading && practitioners.length === 0" class="mt-24">
				<div class="text-center flex flex-col items-center justify-center">
					<img class="mb-8" src="/images/doctor-bro.svg" alt="" />
					<h3 class="mb-4">
						We couldn’t find any doctor matching your search
					</h3>
					<p class="mb-8">Please modify and search again.</p>
					<div>
						<c-button
							class="w-full"
							type="button"
							:secondary="true"
							small
							@click="$router.go(-1)"
						>
							Go Back
						</c-button>
					</div>
				</div>
			</div>

			<div>
				<div
					v-if="loading"
					class="w-full lg:grid grid-cols-2 block gap-8 items-start mb-12"
				>
					<div
						v-for="(i, idx) in 2"
						:key="idx"
						class="info-container xl:p-6 p-4 xl:mb-0 mb-8"
					>
						<DoctorsResultSkeleton />
					</div>
				</div>
				<div
					v-if="!loading"
					class="w-full lg:grid grid-cols-2 block gap-8 items-start mb-12"
				>
					<div
						v-for="practitioner in filteredPractitioners &&
							filteredPractitioners"
						:key="practitioner.id"
					>
						<doctors-card
							:practitioner="practitioner"
							@viewProfile="viewProfile(practitioner)"
							@openAppointmentModal="
								openAppointmentModal(practitioner)
								SET_MODALSTATE(true)
							"
						/>
					</div>
					<div
						v-if="pages > 0"
						class="col-span-2 pagination flex items-center justify-center my-24"
					>
						<span class="mr-6 font-bold cursor-pointer" @click="previousPage"
						>Previous</span
						>
						<span
							v-for="(page, i) in pages"
							:key="i"
							class="border border-blue-900 px-2 py-1 font-bold text-blue-900 cursor-pointer"
							:class="{ 'bg-blue-900 text-white': currentPage === page }"
							@click="setPage(page)"
						>{{ page }}</span
						>
						<span class="ml-6 font-bold cursor-pointer" @click="nextPage"
						>Next</span
						>
					</div>
				</div>
			</div>

			<cornie-modal :model-value="show" center class="w-full h-full">
				<appointment-modal :id="practitionerId" :location-id="locationId" @close="show = false" />
			</cornie-modal>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import ModalComponent from "~/components/ModalComponent.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"
import DoctorsCard from "~/components/BookAppointment/DoctorsCard.vue"

const appointment = namespace("appointment")
const practitioners = namespace("practitioners")
const misc = namespace("misc")
@Component({
  components: {
    ModalComponent,
    CornieModal,
    AppointmentModal,
    DoctorsCard,
  },
})
export default class DoctorsPage extends Vue {
  selectedDate: string = "Wed, 24 Nov"
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []
  appointmentModal: boolean = false
  practitionerId = ""
  show = false
  loading = false
  pages: number = 0
  currentPage: number = 1
  filteredPractitioners = <any>[]
  search = <any>{}

  @Prop({ type: Array })
    practitioners!: any[]

  @appointment.Mutation
    SET_SELECTEDDATE!: (data: any) => void

  @misc.Mutation
    SET_MODALSTATE!: (data: any) => void

  @appointment.Mutation
    SET_SELECTEDTIME!: (data: any) => void

  @practitioners.Mutation
    SET_INITPRACTITIONERDATA!: (data: any) => void

  setTotalPage() {
    const x: number = this.practitioners && this.practitioners.length / 10
    this.pages = Number(x.toFixed())
  }

  get locationId() {
    return this.search.location
  }

  handleDate(val: any) {
    this.selectedDate = val.date
    this.SET_SELECTEDDATE(val.date)
  }

  handleTime(val: any) {
    this.selectedTime = val
    this.SET_SELECTEDTIME(val)
  }

  viewProfile(practitioner: any) {
    this.$router.push(
      `/patients/appointment//doctor/${practitioner.id}/profile`
    )
    // this.SET_INITPRACTITIONERDATA(practitioner)
  }

  setFilteredPractitioners() {
    if (!this.practitioners) {
      this.loading = true
    } else {
      this.loading = false
      this.setTotalPage()
      this.filteredPractitioners = this.practitioners?.slice(
        this.currentPage - 1,
        this.currentPage + 9
      )
    }
  }

  openAppointmentModal(practitioner: any) {
    this.show = true
    this.practitionerId = practitioner.id
  }

  setPage(page: any) {
    this.currentPage = page
    this.filteredPractitioners = this.practitioners.slice(page - 1, page + 9)
    window.scrollTo(0, 0)
  }

  nextPage() {
    if (this.currentPage < this.pages) {
      this.currentPage++
    }
    this.setPage(this.currentPage)
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
    this.setPage(this.currentPage)
  }

  created() {
    this.setFilteredPractitioners()
  }
}
</script>

<style scoped>
.ap-card-active {
  background: #f0f4fe;
  border: 1px solid #080056;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.text-white {
  color: #fff;
}
</style>
