<template>
  <div>
    <linear-loader v-if="loading" />
    <div ref="mainboard">
      <select-group :search="search" />

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
        <appointment-modal :id="practitionerId" @close="show = false" />
      </cornie-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import SelectGroup from "~/components/SelectGroup.vue"
import ModalComponent from "~/components/ModalComponent.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"
import DoctorsCard from "~/components/BookAppointment/DoctorsCard.vue"

const appointment = namespace("appointment")
const practitioners = namespace("practitioners")
const misc = namespace("misc")
@Component({
  components: {
    SelectGroup,
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

  @Watch("search", { immediate: true })
  onChange() {
    this.loading = true
    this.$store.dispatch("practitioners/fetchPractitioners", {
      ...this.search,
    })
    this.setFilteredPractitioners()
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
    this.$router.push(
      `/patients/book-appointment/doctor/${practitioner.id}/profile`
    )
    this.SET_INITPRACTITIONERDATA(practitioner)
  }

  setFilteredPractitioners() {
    this.availablePractitioners = this.getRelatedPractitioners
    if (!this.getRelatedPractitioners) {
      this.loading = true
    } else {
      this.loading = false
      this.setTotalPage()
      this.filteredPractitioners = this.availablePractitioners?.slice(
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
    this.filteredPractitioners = this.availablePractitioners.slice(
      page - 1,
      page + 9
    )
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
