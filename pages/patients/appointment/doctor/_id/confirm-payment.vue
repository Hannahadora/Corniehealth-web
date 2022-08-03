<template>
	<div class="c-wrapper">
		<div class="xl:w-2/3 w-full mx-auto xl:mt-24 mt-14">
			<h2 class="xl:text-center text-left c-indigo mb-12">
				Confirm your appointment
			</h2>

			<table class="border w-full">
				<tr>
					<td>Appointment With</td>
					<td>Dr. Mike Obi</td>
				</tr>
				<tr>
					<td>Date & Time</td>
					<td>29, November 2021 | 21:00</td>
				</tr>
				<tr>
					<td>Date & Time</td>
					<td>29, November 2021 | 21:00</td>
				</tr>
				<tr>
					<td>Consultation Fee</td>
					<td>₦ 20,000.00</td>
				</tr>
				<tr>
					<td>Specialty</td>
					<td>Dentistry</td>
				</tr>
				<tr>
					<td>Location</td>
					<td>Reddington Hospital | 234 Admiralty Way Lekki, Lagos, Nigeria</td>
				</tr>
				<tr>
					<td>Contact Info</td>
					<td>+234 803 767 8909 | Mike.obi@reddington.ng</td>
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
							path: `/patients/appointment/soctor/${selectedPractitioner.id}/booking-confirmed`,
						})
					"
				>
					Confirm
				</c-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
// import CButton from "~/components/CButton.vue"
import { namespace } from "vuex-class"

const practitioners = namespace("practitioners")
const patient = namespace("patient")
@Component({
  //   components: { CButton },
  layout: "appointment",
})
export default class ConfirmPaymentPage extends Vue {
  @practitioners.Getter
    selectedPractitioner!: any

  @patient.Action
    findPatient!: (id: any) => void

  async created() {
    if (this.$route.query.user) {
      this.findPatient(this.$route.query.user)
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
