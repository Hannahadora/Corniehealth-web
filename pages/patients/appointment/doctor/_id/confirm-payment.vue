<template>
	<div class="c-wrapper">
		<back-btn />
		<div class="xl:w-2/3 w-full mx-auto xl:mt-4 mt-2">
			<h2 class="xl:text-center text-left c-indigo mb-12">
				Review Your Booking
			</h2>

			<table class="border w-full">
				<tr>
					<td>Appointment With</td>
					<td>{{ selectedPractitioner.name }}</td>
				</tr>
				<tr>
					<td>Date & Time</td>
					<td class="flex justify-between">
						<span>{{ getSelectedDate }} | {{ getSelectedTime }}</span>
						<div @click="openModal">
							<copy-red class="cursor-pointer" />
						</div>
					</td>
				</tr>
				<tr>
					<td>Consultation Fee</td>
					<td>₦ {{ selectedPractitioner.ConsultationFeePerHour || 0 }}</td>
				</tr>
				<tr>
					<td>Specialty</td>
					<td>{{ selectedPractitioner.designation }}</td>
				</tr>
				<tr>
					<td>Location</td>
					<td>{{ selectedPractitioner.address }}</td>
				</tr>
				<tr>
					<td>Contact Info</td>
					<td>
						{{ selectedPractitioner.phone }} | {{ selectedPractitioner.email }}
					</td>
				</tr>
				<tr>
					<td>Reason for Appointmment</td>
					<td>Consultation</td>
				</tr>
			</table>

			<p class="my-8">
				You may wish to share additional information about your condition and/or
				the reason for this appointment. Should you have any emergency, kindly
				contact your practitioner by phone.
			</p>

			<div class="flex flex-col w-full mb-20">
				<label class="text-left block text-xs mb-1 font-bold" for=""
				>Note</label
				>
				<textarea
					id=""
					placeholder="Write note for practitioner here"
					class="border p-2"
					name=""
					cols="20"
					rows="5"
					maxlength="255"
				></textarea>
				<span class="text-right text-xs italic font-semibold">0/255</span>
			</div>

			<div class="w-full mx-auto mt-12 mb-72 flex items-center justify-center">
				<c-button
					class="w-1/2 mr-6"
					type="button"
					:primary="true"
					small
					@click="$router.go(-1)"
				>
					Cancel
				</c-button>
				<c-button
					class="w-1/2"
					type="button"
					secondary
					small
					@click="
						$router.push({
							path: `/patients/appointment/doctor/${selectedPractitioner.id}/booking-confirmed?locationId=${$route.query.locationId}`,
						})
					"
				>
					Next
				</c-button>
			</div>
		</div>

		<cornie-modal :model-value="show" center class="w-full h-full">
			<appointment-modal :id="selectedPractitioner.id" @close="show = false" />
		</cornie-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import CButton from "~/components/CButton.vue"
import BackBtn from "~/components/BackBtn.vue"
import CopyRed from "~/components/icons/copy-red.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"

const practitioners = namespace("practitioners")
const appointment = namespace("appointment")
const user = namespace("user")
@Component({
  components: { CButton, BackBtn, CopyRed, CornieModal, AppointmentModal },
  layout: "appointment",
})
export default class ConfirmPaymentPage extends Vue {
  show = false

  @practitioners.Getter
    selectedPractitioner!: any

  @user.Action
    findUser!: () => void

  @user.Mutation
    SET_TOKEN!: (token: any) => void

  @appointment.Getter
    getSelectedTime!: ""

  @appointment.Getter
    getSelectedDate!: ""

  openModal() {
    this.show = true
  }

  async created() {
    if (this.$route.query.token) {
      await this.SET_TOKEN(this.$route.query.token)
      await this.findUser()
    }
    if (this.$route.query.practitioner) {
      await this.$store.dispatch(
        "practitioners/getAPractitionerProfile",
        this.$route.params.id
      )
    }
  }
}
</script>

<style scoped>
tr {
  /* border-bottom: 1px solid rgb(95, 94, 94); */
  line-break: normal;
}
td {
  font-size: 16px;
  padding: 16px;
}
tr:nth-child(even) {
  background: #f0f4fe;
}

@media screen and (max-width: 768px) {
  tr {
    line-break: auto;
  }
  td {
    font-size: 14px;
  }
}
</style>
