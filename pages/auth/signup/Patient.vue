<template>
	<div>
		<cornie-dialog
			v-if="showDiag"
			:firstname="form.firstName"
			@close-diag="hideDialog"
		/>
		<auth>
			<template #default>
				<div class="w-full h-full flex justify-center items-center">
					<div
						class="w-full h-auto bg-white rounded-md shadow-md p-5 overflow-hidden"
					>
						<h2 class="text-sm text-primary">Early Access Registration</h2>
						<div class="rounded bg-white-cotton-ball my-3 text-sm p-2">
							You must be 18 or older to create a CornieCare Patient Online
							account. Parents must create dependent accounts for patients under
							18.
						</div>
						<ValidationObserver v-slot="{}">
							<form class="h-auto mt-5" @submit.prevent="submit">
								<div class="md:grid grid-cols-12 gap-3">
									<div class="col-span-6 mb-3">
										<cornie-input
											v-model="form.firstName"
											label="First Name"
											placeholder="--Enter--"
											required
										></cornie-input>
									</div>
									<div class="col-span-6 mb-3">
										<cornie-input
											v-model="form.lastName"
											label="Last Name"
											placeholder="--Enter--"
											required
										></cornie-input>
									</div>
									<div class="col-span-6 mb-3">
										<cornie-input
											v-model="form.phoneNumber.number"
											label="Phone Number"
											type="tel"
											placeholder="--Enter--"
											required
										></cornie-input>
									</div>
									<div class="col-span-6 mb-3">
										<ValidationProvider
											v-slot="{ errors }"
											name="email"
											rules="email"
										>
											<cornie-input
												v-model="form.email"
												label="Email Addrees"
												placeholder="--Enter--"
												type="email"
												required
												:class="errors.length ? 'border-red-500' : ''"
											></cornie-input>
											<span class="text-red-500 text-xs">{{ errors[0] }}</span>
										</ValidationProvider>
									</div>
									<div class="col-span-12 mb-3">
										<label class="block text-xs mb-1 font-bold"
										>Patient Profile</label
										>
										<cornie-select
											v-model="form.patientProfile"
											:readonly="false"
											:items="['individual', 'family', 'corporate']"
											required
											@changed="handleChange"
										></cornie-select>
									</div>
								</div>
								<div class="w-full flex items-center">
									<cornie-checkbox
										v-model="form.agree"
										class="mr-1"
										@change="handleAgree"
									/>
									<div class="text-sm">
										I agree to Cornie Health
										<a href="#" class="text-red-400">Terms of service</a> and
										<a href="#" class="text-red-400">Privacy policy</a>
									</div>
								</div>
								<div class="w-full mt-5">
									<button
										class="rounded-md w-full text-center font-bold py-2"
										:class="[
											!formCompleted
												? 'bg-gray-300 text-gray-400'
												: 'bg-red-500 text-white hover:bg-red-400',
										]"
									>
										Submit
									</button>
								</div>
							</form>
						</ValidationObserver>
						<div class="my-5 w-full text-center">
							Have an account?
							<span
								class="text-red-400 hover:text-red-300 cursor-pointer"
								@click="handleSignin"
							>Sign in</span
							>
						</div>
						<div class="w-full text-center">
							<a href="#">Terms of use</a> | <a href="#">Privacy policy</a> |
							<a href="#">Help</a> | 2021 Cornie Health Ltd.
						</div>
					</div>
				</div>
			</template>
			<template #image>
				<img src="@/static/images/healthy_family.svg" class="w-full h-full" />
			</template>
			<template #banner>
				<div class="flex justify-center items-center">
					<heart-pulse class="mr-3" />
					<div class="text-xs">Connected. Patient-Centric. Supportive</div>
				</div>
				<div class="text-center text-2xl font-bold">
					Connected, Simple Practice Management Software.
				</div>
			</template>
		</auth>
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate"
import Auth from "@/components/auth/auth.vue"
import HeartPulse from "@/components/icons/heartpulse.vue"
import CornieInput from "~/components/CornieInput.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import CornieSelect from "@/components/CornieSelect.vue"
import CornieDialog from "@/components/CornieDialog.vue"
export default {
  name: "PatientScreen",
  components: {
    Auth,
    HeartPulse,
    CornieInput,
    CornieCheckbox,
    CornieSelect,
    CornieDialog,
    ValidationObserver,
    ValidationProvider,
  },
  layout: "auth",
  data: () => ({
    disabled: false,
    showDiag: false,
    url: "https://corniehealth.herokuapp.com",
    agree: false,
    form: {
      type: "Patient",
      firstName: "",
      lastName: "",
      phoneNumber: {
        dialCode: "+234",
        number: "",
      },
      email: "",
      patientProfile: "",
    },
  }),
  computed: {
    formCompleted: {
      get() {
        if (
          this.form.firstName !== "" &&
          this.form.lastName !== "" &&
          this.form.phoneNumber.number !== "" &&
          this.form.email !== "" &&
          this.form.patientProfile !== "" &&
          this.agree
        )
          return true
        return false
      },
    },
  },
  methods: {
    reset() {
      this.form.firstName = ""
      this.form.lastName = ""
      this.form.phoneNumber.dialCode = "+234"
      this.form.phoneNumber.number = ""
      this.form.email = ""
      this.form.patientProfile = ""
    },
    async handleSignin() {
      location.href =
        "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/login"
    },
    hideDialog() {
      this.showDiag = false
      this.reset()
    },
    handleChange(val) {
      this.form.patientProfile = val
    },
    handleAgree(val) {
      this.agree = val
    },
    async submit() {
      try {
        this.disabled = true
        const response = await this.$axios.post(
          `${this.url}/api/v1/early-access`,
          this.form
        )
        if (response.data.success) {
          this.showDiag = true
          this.disabled = false
        }
      } catch (err) {
        this.disabled = false
      }
    },
  },
}
</script>