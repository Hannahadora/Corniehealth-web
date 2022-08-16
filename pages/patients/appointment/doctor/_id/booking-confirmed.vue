<template>
  <div class="c-wrapper">
    <back-btn />
    <div class="xl:w-2/3 w-full mx-auto xl:mt-4 mt-2">
      <h2 class="xl:text-center text-left c-indigo mb-12">
        Confirm your appointment
      </h2>

      <div class="my-12 flex">
        <tooltip-red class="mr-2" />
        <p v-if="paymentIsRequired">
          This practitioner requires payment to confirm your appointment |
          <span style="color: #667499"
            >The payment service is secured by Paystack</span
          >.
        </p>
        <p v-else>
          You can confirm your booking by choosing to pay now or pay later at
          the hospital |
          <span style="color: #667499"
            >The payment service is secured by Paystack</span
          >.
        </p>
      </div>

      <table class="border w-full">
        <tr>
          <td>Appointment With</td>
          <td>{{ selectedPractitioner.name }}</td>
        </tr>
        <tr>
          <td>Date & Time</td>
          <td>{{ getSelectedDate }} | {{ getSelectedTime }}</td>
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
          rows="10"
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
          @click="confirmPayment"
        >
          Pay
        </c-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import CButton from "~/components/CButton.vue"
import BackBtn from "~/components/BackBtn.vue"
import TooltipRed from "~/components/icons/tooltip-red.vue"

const practitioners = namespace("practitioners")
const appointment = namespace("appointment")
const user = namespace("user")
@Component({
  components: { CButton, BackBtn, TooltipRed },
  layout: "appointment",
})
export default class BookingConfirmed extends Vue {
  paymentIsRequired = false

  @practitioners.Getter
  selectedPractitioner!: any

  @user.Getter
  userData!: any

  @appointment.Getter
  getSelectedTime!: ""

  @appointment.Getter
  getSelectedDate!: ""

  async created() {
    if (this.$route.query.practitioner) {
      await this.$store.dispatch(
        "practitioners/getAPractitionerProfile",
        this.$route.params.id
      )
    }
  }

  async confirmPayment() {
    try {
      const res = await this.$store.dispatch("practitioners/bookPractitioner", {
        locationId: this.$route.query.locationId,
        date: this.getSelectedDate,
        startTime: this.getSelectedTime,
        endTime: undefined,
        billingType: "insurance",
        practitionerId: this.selectedPractitioner.id,
        patientId: this.userData.user.id,
      })
      if (res.status === true) {
        alert("Booking confirmed!!")
        this.$router.push("/")
      }
    } catch (error: any) {}
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
