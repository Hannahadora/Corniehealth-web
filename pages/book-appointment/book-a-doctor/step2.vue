<template>
  <div class="">
    <div>
      <h4 class="mt-12 text-center">Have Insurance?</h4>

      <form action="" class="flex items-center justify-center mt-4">
        <div class="flex items-center justify-center">
          <cornieradio
            v-model="haveInsurance"
            class="mr-9"
            name="insurance"
            label="Yes"
            value="yes"
            @change="handleHaveInsurance"
          />
          <cornieradio
            v-model="haveInsurance"
            name="insurance"
            label="No"
            value="no"
            @change="handleHaveInsurance"
          />
        </div>
      </form>
    </div>

    <div v-if="haveInsurance === 'yes'" class="mt-8">
      <h4 class="mt-12 text-center">
        Is your insurance provided by an employer or private?
      </h4>

      <form action="" class="flex items-center justify-center mt-4">
        <div class="flex items-center justify-center">
          <cornieradio
            v-model="insuranceProvider"
            class="mr-9"
            name="insuranceprovider"
            label="Employer"
            value="employer"
            @change="handleInsuranceProvider"
          />
          <cornieradio
            v-model="insuranceProvider"
            name="insuranceprovider"
            label="Private"
            value="private"
            @change="handleInsuranceProvider"
          />
        </div>
      </form>
    </div>

    <div
      v-if="insuranceProvider === 'employer' && haveInsurance === 'yes'"
      class="xl:w-1/2 w-full mx-auto my-8"
    >
      <cornie-input placeholder="Enter employer's name" class="" />
      <span class="mt-1 text-grey-blue small text-sm italic"
        >Enter the primary beneficiary’s employer if you are a covered
        dependent</span
      >
    </div>

    <div
      v-if="insuranceProvider === 'private' && haveInsurance === 'yes'"
      class="c-w-45 mx-auto text-center"
    >
      <h4 class="mt-12 text-center">Select your insurance plan</h4>
      <span class="mt-2 text-grey-blue small-text"
        >This will help us connect you to a provider that accepts your
        plan</span
      >

      <form action="" class="w-full mx-auto mt-8">
        <div class="mt-8">
          <label class="text-left block text-xs mb-1 font-bold"
            >Insurance Carrier</label
          >
          <cornie-select
            v-model="insuranceCarrier"
            class="w-full"
            placeholder="Select"
            :readonly="false"
            :items="['individual', 'family', 'corporate']"
            required
            @changed="handleInsuranceCarrier"
          ></cornie-select>
        </div>

        <div class="mt-8">
          <label class="text-left block text-xs mb-1 font-bold"
            >Insurance Plan</label
          >
          <cornie-select
            v-model="insurancePlan"
            class="w-full"
            placeholder="Select"
            :readonly="false"
            :items="['individual', 'family', 'corporate']"
            required
            @changed="handleInsurancePlan"
          ></cornie-select>
        </div>

        <cornie-input
          v-model="policyNumber"
          placeholder="Enter policy number"
          label="Policy Number"
          class="mt-8 w-full"
        />

        <cornie-checkbox
          v-model="billInsurance"
          class="mt-8"
          name="billAgreement"
          label="Bill my insurance for this service."
          @change="handleAgree"
        />
      </form>
    </div>

    <div class="xl:w-2/5 w-full mx-auto mt-12 flex items-cente justify-center">
      <c-button
        class="w-1/2 mr-6"
        type="button"
        :primary="true"
        small
        @click="$router.push({ path: '/book-appointment/confirm-payment' })"
      >
        skip
      </c-button>
      <c-button
        class="w-1/2"
        type="button"
        small
        :secondary="haveInsurance.length !== 0"
        :disabled="!haveInsurance.length"
        @click="$router.push({ path: '/book-appointment/confirm-payment' })"
      >
        Continue
      </c-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import CornieCheckbox from "~/components/CornieCheckbox.vue"
import CornieInput from "~/components/CornieInput.vue"
import Cornieradio from "~/components/cornieradio.vue"
import CornieSelect from "~/components/CornieSelect.vue"
@Component({
  components: {
    CButton,
    CornieInput,
    CornieSelect,
    Cornieradio,
    CornieCheckbox,
  },
  layout: "InsuranceQuestion",
})
export default class BookDoctorPage extends Vue {
  disabled: Boolean = true
  haveInsurance: string = ""
  insuranceProvider: string = ""
  insuranceCarrier: string = ""
  insurancePlan: string = ""
  billInsurance: boolean = false
  policyNumber: string = ""

  handleInsuranceCarrier(val: any) {
    this.insuranceCarrier = val
  }

  handleInsurancePlan(val: any) {
    this.insurancePlan = val
  }

  handleAgree(val: any) {
    this.billInsurance = val
  }

  handleHaveInsurance(val: any) {
    this.haveInsurance = val
    this.disabled = false
  }

  handleInsuranceProvider(val: any) {
    this.insuranceProvider = val
  }
}
</script>

<style scoped>
.c-w-45 {
  width: 45%;
}

@media screen and (max-width: 1024px) {
  .c-w-45 {
    width: 100%;
  }
}
</style>
