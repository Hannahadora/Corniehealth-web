<template>
	<!-- <cornie-modal :modelValue="show" center class="w-full h-full"> -->
	<div class="c-indigo w-full p-10 xl:mt-0 mt-8 info-container">
		<div class="flex items-center justify-between">
			<span class="sub-titles-1 whitespace-nowrap"
			>Dr. {{ practitioner && practitioner.name }} Availability</span
			>

			<div class="flex items-center ap-card1 px-3 py-2">
				<img
					class="xl:mr-5 mr-2"
					src="/images/book-appointment/icon-date-black.png"
					alt=""
				/>
				<span class="dmSans xl:block hidden mr-5">Nov 24 - Nov 26</span>
				<span class="dmSans xl:hidden block mr-2">Nov 24</span>
				<img src="/images/bx_bx-chevron-down.svg" alt="" />
			</div>
		</div>

		<div
			class="xl:flex block items-center justify-between mt-8 xl:overflow-x-hidden overflow-x-scroll"
		>
			<div
				v-for="(day, index) in availableDays"
				:key="index"
				class="text-center ap-card px-12 py-2 xl:w-auto w-full"
				:class="{ 'ap-card-active': selectedDate === day.date }"
				@click="handleDate(day)"
			>
				<span class="sub-titles-2">{{ day.date }}</span
				><br />
				<span class="text-grey-blue mt-2">{{ day.slot }}</span>
			</div>
		</div>

		<div
			class="grid xl:grid-cols-6 grid-cols-3 gap-6 items-center justify-between mt-6"
		>
			<div
				v-for="(time, index) in availableTime"
				:key="index"
				class="time-card xl:px-8 px-6 py-2"
				:class="{ 'time-card-active': selectedTime === time }"
				@click="handleTime(time)"
			>
				<span class="">{{ time }}</span>
			</div>
		</div>

		<div
			class="flex xl:flex-row flex-col items-center xl:justify-end justify-center mt-8"
		>
			<c-button
				type="button"
				class="xl:mr-2 xl:mb-0 mb-6 xl:w-auto w-full"
				:primary="true"
				small
				@click="$emit('close')"
			>
				Close
			</c-button>
			<c-button
				class="xl:w-auto w-full"
				type="button"
				:secondary="true"
				small
				:disabled="!selectedTime.length || !selectedDate.length"
				@click="proceedToBook"
			>
				Book Appointment
			</c-button>
		</div>
	</div>
	<!-- </cornie-modal> -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import CornieModal from "~/components/CornieModal.vue"

const appointment = namespace("appointment")
const practitioners = namespace("practitioners")
const misc = namespace("misc")
@Component({
  components: {
    CornieModal,
  },
})
export default class DoctorsPage extends Vue {
  selectedDate: string = "Wed, 24 Nov"
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []
  availablePractitioners = []
  practitioner: any = <any>{}

  @practitioners.Getter
    selectedPractitioner!: []

  @Prop({ type: String, default: "" })
    id!: string

  @appointment.Mutation
    SET_SELECTEDDATE!: (data: any) => void

  @misc.Mutation
    SET_MODALSTATE!: (data: any) => void

  @appointment.Mutation
    SET_SELECTEDTIME!: (data: any) => void

  @practitioners.Getter
    getRelatedPractitioners!: []

  handleDate(val: any) {
    this.selectedDate = val.date
    this.SET_SELECTEDDATE(val.date)
  }

  handleTime(val: any) {
    this.selectedTime = val
    this.SET_SELECTEDTIME(val)
  }

  getAvailableDays() {
    return (this.availableDays = [
      { date: "Wed, 24 Nov", slot: "6 slots available" },
      { date: "Thur, 25 Nov", slot: "13 slots available" },
      { date: "Fri, 26 Nov", slot: "3 slots available" },
    ])
  }

  getAvailableTime() {
    return (this.availableTime = [
      "09:00",
      "10:00",
      "14:00",
      "21:00",
      "22:00",
      "24:00",
    ])
  }

  dontProceed() {
    this.SET_MODALSTATE(false)
  }

  proceedToBook() {
    this.SET_MODALSTATE(false)
    this.$nextTick(() => {
      this.$router.push(`/patients/appointment/doctor/${this.practitioner.id}/book/step1`)
    })
  }

  async created() {
    await this.$store.dispatch(
      "practitioners/getAPractitionerProfile",
      this.id
    )
    this.practitioner = this.selectedPractitioner
    this.getAvailableDays()
    this.getAvailableTime()
    this.SET_SELECTEDDATE(this.selectedDate)
  }
}
</script>
