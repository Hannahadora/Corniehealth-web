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

		<div class="xl:flex block items-center justify-center mt-8">
			<div v-if="selectedDate" class="mr-12">
				<div
					class="text-center ap-card px-12 py-2 xl:w-auto w-full"
					:class="{ 'ap-card-active': selectedDate }"
					@click="handleDate(selectedDate)"
				>
					<span class="sub-titles-2">{{ formatDate(selectedDate) }}</span
					><br />
					<span class="text-grey-blue mt-2"
					>{{ availableTime.length }}
						{{ availableTime.length < 2 ? "slot" : "slots" }} available</span
					>
				</div>
			</div>

			<div class="">
				<div
					class="time-card xl:px-8 px-6 py-2"
					:class="{ 'time-card-active': selectedTime }"
				>
					<span class="">{{ selectedTime }}</span>
				</div>
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
		<div v-else class="flex items-center justify-center mt-10">
			<c-button
				class="w-1/2"
				type="button"
				:secondary="true"
				small
				@click="
					$router.push(
						`/patients/appointment/doctor/${practitioner.id}/confirm-payment?locationId=${$route.query.locationId}`
					)
				"
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
  availableHour: any = {}

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

  getAvailableTime() {
    this.availableTime = []
    Object.entries(this.availableHour).forEach(([key, value]) => {
      if (value === "unavailable") {
        console.log("key", key)
        const formattedKey = Number(key).toFixed(2)
        this.availableTime.push(formattedKey)
      }
    })
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

  async fetchAvailability() {
    if (this.selectedDate) {
      try {
        const res: any = await this.$store.dispatch(
          "practitioners/fetchAvailability",
          {
            locationId: this.$route.query.locationId,
            id: this.$route.params.id,
            // actor: "practitioner",
            date: new Date(this.selectedDate).toISOString(),
          }
        )
        if (res.data.success) {
          this.availableHour = res.data.data
          this.getAvailableTime()
        }
      } catch (error: any) {}
    }
  }

  formatDate(date: any) {
    return new Date(date).toDateString()
  }

  async created() {
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
    await this.fetchAvailability()
  }
}
</script>

<style scoped></style>
