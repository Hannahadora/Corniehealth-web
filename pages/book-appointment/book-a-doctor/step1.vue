<template>
	<div>
		<div class="text-center">
			<h4 class="mt-12">Have you booked with this practitioner in the past?</h4>
			<div class="flex items-center justify-center mt-8">
				<cornieradio
					v-model="bookedPractitionerBefore"
					class="mr-9"
					name="pastExp"
					label="Yes"
					value="yes"
					@change="handleChecked"
				/>
				<cornieradio
					v-model="bookedPractitionerBefore"
					name="pastExp"
					label="No"
					value="no"
					@change="handleChecked"
				/>
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
			<divh
				v-for="(time, index) in availableTime"
				:key="index"
				class="time-card xl:px-8 px-6 py-2"
				:class="{ 'time-card-active': selectedTime === time }"
				@click="handleTime(time)"
			>
				<span class="">{{ time }}</span>
			</divh>
		</div>

		<div class="mt-12">
			<c-button
				class="w-full"
				type="button"
				:secondary="true"
				small
				@click="$router.push('/book-appointment/signup')"
			>
				Continue
			</c-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import CButton from "~/components/CButton.vue"
import Cornieradio from "~/components/cornieradio.vue"


const appointment = namespace("appointment")
@Component({
  components: { CButton, Cornieradio },
  layout: "Question1",
})
export default class BookDoctorPage extends Vue {
  bookedPractitionerBefore: string = ""
  //   bookedPractitionerBefore: string = ""
  selectedDate: string = ""
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []

  handleDate(val: any) {
    this.selectedDate = val.date
  }

  handleTime(val: any) {
    this.selectedTime = val
  }

  handleChecked(val: any) {
	  this.bookedPractitionerBefore = val
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

  @appointment.Getter
    getSelectedTime!: "";

  @appointment.Getter
    getSelectedDate!: "";

  created(): void {
    this.getAvailableDays()
    this.getAvailableTime()
    this.selectedTime = this.getSelectedTime
    this.selectedDate = this.getSelectedDate
  }

}
</script>

<style scoped>

</style>
