<template>
	<div ref="mainboard">
		<dropdowns-doctors-area :search="search" />

		<div v-if="!loading && availablePractitioners.length === 0">
			<h1 class="text-center mt-10">None found</h1>
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
					class="info-container xl:p-6 p-4 xl:mb-0 mb-8"
				>
					<div class="w-full xl:pb-0 pb-8">
						<div class="flex items-center">
							<img
								class="mr-4 w-16 h-16 rounded-full"
								:src="practitioner.photo"
								alt=""
							/>
							<div class="">
								<div class="mr-4 sub-titles-1">
									{{ practitioner.name }}
								</div>
								<div class="mt-1 text-base">
									{{ practitioner.designation }}
								</div>
								<img
									:src="`/images/ratings/${practitioner.rating}star.svg`"
									alt=""
								/>
							</div>
						</div>

						<div class="mt-6 grid grid-cols-1 gap-4">
							<div class="flex items-start">
								<img
									class="mr-2"
									src="/images/book-appointment/icon-doctor-white.png"
									alt=""
								/>
								<div>
									<p class="mr-2">{{ practitioner.specialty }}</p>
								</div>
							</div>

							<div class="flex items-start">
								<img
									class="mr-2"
									src="/images/book-appointment/icon-doctor-white.png"
									alt=""
								/>
								<div>
									<p class="mr-2">Visit Type - {{ practitioner.visitType }}</p>
								</div>
							</div>

							<div class="flex items-start">
								<img
									class="mr-2"
									src="/images/book-appointment/icon-lang-white.png"
									alt=""
								/>
								<div>
									<p class="mr-2">{{ practitioner.language }}</p>
								</div>
							</div>

							<div class="flex items-start">
								<img
									class="mr-2"
									src="/images/book-appointment/Icon-fee-white.png"
									alt=""
								/>
								<div>
									<p class="mr-2">
										Consultation Fee - {{ practitioner.consultationFeePerHour }}
									</p>
								</div>
							</div>
						</div>

						<div
							class="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-6 mt-8"
						>
							<c-button
								type="button"
								class="xl:mr-6 xl:mb-0 mb-6 xl:w-1/2 w-full"
								:primary="true"
								small
								@click="viewProfile(practitioner)"
							>
								View profile
							</c-button>
							<c-button
								class="xl:w-1/2 w-full"
								type="button"
								:secondary="true"
								small
								@click="
									openAppointmentModal(practitioner)
									SET_MODALSTATE(true)
								"
							>
								Book Appointment
							</c-button>
						</div>
					</div>
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
			<appointment-modal :id="practitionerId" @close="show = false" />
		</cornie-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import DropdownsDoctorsArea from "~/components/DropdownsDoctorsArea.vue"
import ModalComponent from "~/components/ModalComponent.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"

const appointment = namespace("appointment")
const practitioners = namespace("practitioners")
const misc = namespace("misc")
@Component({
  components: {
    DropdownsDoctorsArea,
    ModalComponent,
    CornieModal,
    AppointmentModal,
  },
})
export default class DoctorsPage extends Vue {
  selectedDate: string = "Wed, 24 Nov"
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []
  appointmentModal: boolean = false
  availablePractitioners = []
  practitionerId = ""
  show = false
  loading = false
  pages: number = 0
  currentPage: number = 1
  filteredPractitioners = <any>[]
  search = <any>{}

  @appointment.Mutation
    SET_SELECTEDDATE!: (data: any) => void

  @misc.Mutation
    SET_MODALSTATE!: (data: any) => void

  @appointment.Mutation
    SET_SELECTEDTIME!: (data: any) => void

  @practitioners.Getter
    getRelatedPractitioners!: []

  @practitioners.Mutation
    SET_INITPRACTITIONERDATA!: (data: any) => void

  @practitioners.Getter
    loadingState!: false

	
  @Watch("query")
  onChange() {
    this.loading = true
    this.$store.dispatch("practitioners/findPractitionersAll", {
      ...this.search,
      location: null, min: 1, max: 1, specialty: this.query
    })
		  this.loading = false
  }

  get query() {
    return this.$route?.query?.query as string
  }

  setTotalPage() {
    const x: number =
      this.availablePractitioners && this.availablePractitioners.length / 10
    this.pages = Number(x.toFixed())
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
    this.$router.push(`/patients/doctor/${practitioner.id}/profile`)
    this.SET_INITPRACTITIONERDATA(practitioner)
  }

  openAppointmentModal(practitioner: any) {
    this.show = true
    this.practitionerId = practitioner.id
  }

  setPage(page: any) {
    this.currentPage = page
    this.filteredPractitioners = this.availablePractitioners.slice(page - 1, page + 9)
    window.scrollTo(0,0)
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
    this.availablePractitioners = this.getRelatedPractitioners
    if (!this.getRelatedPractitioners) {
      this.loading = true
    } else {
      this.loading = false
      this.setTotalPage()
      this.filteredPractitioners = this.availablePractitioners.slice(this.currentPage - 1, this.currentPage + 9)
    }
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
