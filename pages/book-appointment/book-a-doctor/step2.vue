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
						model-value="yes"
						value="yes"
					/>
					<cornieradio
						v-model="haveInsurance"
						name="insurance"
						label="No"
						model-value="no"
						value="no"
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
						v-model="insuranceprovider"
						class="mr-9"
						name="insuranceprovider"
						label="Employer"
						model-value="employer"
						value="employer"
					/>
					<cornieradio
						v-model="insuranceprovider"
						name="insuranceprovider"
						label="Private"
						model-value="private"
						value="private"
					/>
				</div>
			</form>
		</div>

		<div
			v-if="insuranceprovider === 'employer' && haveInsurance === 'yes'"
			class="w-1/2 mx-auto my-8"
		>
			<cornie-input placeholder="Enter employer's name" class="" />
			<span class="mt-1 text-grey-blue small text-sm italic"
			>Enter the primary beneficiary’s employer if you are a covered
				dependent</span
			>
		</div>

		<div
			v-if="insuranceprovider === 'private' && haveInsurance === 'yes'"
			class="c-w-45 mx-auto text-center"
		>
			<h4 class="mt-12 text-center">Select your insurance plan</h4>
			<span class="mt-2 text-grey-blue small-text"
			>This will help us connect you to a provider that accepts your
				plan</span
			>

			<form action="" class="w-full mx-auto mt-8">
				<div class="mt-8">
					<label class="text-left block text-xs mb-1 font-bold">Insurance Carrier</label>
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
					<label class="text-left block text-xs mb-1 font-bold">Insurance Plan</label>
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

		<div class="w-2/5 mx-auto mt-12 flex items-cente justify-center">
			<c-button
				class="w-1/2 mr-6"
				n
				type="button"
				:primary="true"
				small
				@click="$router.push({ path: '/book-appointment/' })"
			>
				skip
			</c-button>
			<c-button
				class="w-1/2"
				type="button"
				secondary
				small
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
  haveInsurance: string = ""
  insuranceprovider: string = ""
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
}
</script>

<style scoped>
.ap-card {
  background: #f0f4fe;
  border: 0.5px solid #c2c7d6;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.time-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
}

.c-w-45 {
  width: 45%;
}
</style>
