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
			>
				<span class="">{{ time }}</span>
			</div>
		</div>

		<div v-if="!userData" class="mt-12">
			<c-button
				class="w-full"
				type="button"
				:secondary="true"
				small
				@click="handleSignin"
			>
				Sign in to continue
			</c-button>
			<div class="mt-7 text-center">
				<span
					class="sub-titles-1 text-razzmataz-pry cursor-pointer"
					@click="handleSignup"
				>Don’t have an account? Sign up</span
				>
			</div>
		</div>
		<div v-else class="flex items-center justify-center">
			<c-button
				class="w-1/2"
				type="button"
				:secondary="true"
				small
				@click="handleSignin"
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
const user = namespace("user")
@Component({
  components: { CButton, Cornieradio },
  layout: "appointment",
})
export default class StepOne extends Vue {
  bookedPractitionerBefore: string = ""
  selectedDate: string = ""
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []
  practitioner: any = {}

  handleSignin() {
    location.href = `http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/login?practitioner=${this.practitionerId}`
  }

  handleSignup() {
    location.href = `http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/signup?practitioner=${this.practitionerId}`
  }

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
    getSelectedTime!: ""

  @appointment.Getter
    getSelectedDate!: ""

  @user.Getter
    userData!: any

  get practitionerId() {
    return this.practitioner?.id as string
  }

  async created() {
    this.getAvailableDays()
    this.getAvailableTime()
    this.selectedTime = this.getSelectedTime
    this.selectedDate = this.getSelectedDate
    const res: any = await this.$store.dispatch(
      "practitioners/getAPractitionerProfile",
      this.$route.params.id
    )
    if (res.data.success === true) {
      this.practitioner = {
        ...res.data.data,
      }
    }
  }
}
</script>

<style scoped></style>
