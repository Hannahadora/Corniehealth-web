<template>
	<div>
		<cornie-dialog
			v-if="showDiag"
			:firstname="form.firstName"
			@close-diag="showDiag = false"
		/>
		<auth>
			<template #default>
				<div class="w-full h-full flex justify-center items-center">
					<div
						class="w-full h-auto bg-white rounded-md shadow-md p-9 overflow-hidden"
					>
						<h2 class="text-sm text-primary">Create Account</h2>
						<div class="my-4 p-4 bg-cblue-100">
							<span>
								You must be 18 or older to create a CornieCare Patient Online
								account. Parents must create dependent accounts for patients
								under 18.
							</span>
						</div>

						<div class="my-8">
							<div class="flex items-center justify-between">
								<div
									class="tab-header"
									:class="{ 'active-tab': activeTab === 0 }"
									@click="handleActiveTab(0)"
								>
									Enter Information
								</div>
								<div
									class="tab-header"
									:class="{
										'active-tab': activeTab === 1,
									}"
									@click="handleActiveTab(1)"
								>
									Verify Email & Set Password
								</div>
								<div
									class="tab-header"
									:class="{ 'active-tab': activeTab === 2 }"
									@click="handleActiveTab(2)"
								>
									Access Dashboard
								</div>
							</div>

							<div class="bar-container h-1 flex items-center">
								<div
									class="flex items-center justify-start w-1/3" :class="{
										'w-2/3': activeTab === 1,
										'w-full': activeTab === 2,
									}">
									<div
										class="progress-red w-full"
                  
									></div>
									<div class="w-4 h-4 rounded-3xl border border-red-400"></div>
								</div>
							</div>
							
						</div>

						<form class="h-auto mt-10" @submit.prevent="submit">
							<div class="md:grid grid-cols-12 gap-3">
								<div class="col-span-6 mb-3">
									<cornie-input
										v-model="form.firstName"
										label="First Name"
										name="firstName"
										placeholder="--Enter--"
										required
									></cornie-input>
								</div>
								<div class="col-span-6 mb-3">
									<cornie-input
										v-model="form.lastName"
										label="Last Name"
										name="lastName"
										placeholder="--Enter--"
										required
									></cornie-input>
								</div>
								<div class="col-span-6 mb-3">
									<cornie-input
										v-model="form.phoneNumber.number"
										label="Mobile"
										name="mobile"
										type="tel"
										placeholder="(+234)"
										required
									></cornie-input>
								</div>
								<div class="col-span-6 mb-3">
									<cornie-input
										v-model="form.email"
										label="Email Address"
										name="email"
										placeholder="--Enter--"
										type="email"
										required
									></cornie-input>
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
									I agree to CorieHealth's
									<a href="#" class="text-red-400">Terms of service</a> and
									<a href="#" class="text-red-400">Private policy</a>
								</div>
							</div>
							<div class="w-full mt-5">
								<button
									class="rounded-md w-full text-center font-bold py-2"
									:class="[
										!agree || disabled
											? 'bg-gray-300 text-gray-400'
											: 'bg-red-500 text-white hover:bg-red-400',
									]"
								>
									Submit
								</button>
							</div>
						</form>
						<div class="my-6 w-full text-center">
							Have an account?
							<span
								class="text-red-400 cursor-pointer"
								@click="$router.push('/patients/appointment/login')"
							>Sign in</span
							>
						</div>
						<div class="w-full text-center">
							<a href="#">Terms of use</a> | <a href="#">Private policy</a> |
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
					<div class="text-xs">Connected. Patient-Centric. Supportive.</div>
				</div>
				<div class="text-center text-2xl font-bold">
					Connected, Simple Practice Management Software.
				</div>
			</template>
		</auth>
	</div>
</template>

<script>
import Auth from "@/components/auth/auth.vue"
import HeartPulse from "@/components/icons/heartpulse.vue"
import CornieInput from "@/components/CornieInput.vue"
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
  },
  layout: "auth",
  data: () => ({
    disabled: false,
    showDiag: false,
    agree: false,
    activeTab: 0,
    form: {
      type: "Patient",
      firstName: "",
      lastName: "",
      phoneNumber: {
        dialCode: "+234",
        number: "",
      },
      email: "",
      // providerProfile: "Independent physician",
      // practiceName: "NA",
      patientProfile: "",
    },
  }),
  methods: {
    handleChange(val) {
      this.form.patientProfile = val
    },
    handleAgree(val) {
      this.agree = val
    },

    handleActiveTab(tab) {
      this.activeTab = tab
    },

    async submit() {
    //   this.$router.push(`/patients/appointment/doctor/${doctor.id}/book/step2`)
      try {
        this.disabled = true
        const response = await this.$axios.post(
          `${this.url}/api/v1/early-access`,
          this.form
        )

        if (response.success) {
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

<style scoped>
.tab-header {
  color: #667499;
  font-size: 14px;
  cursor: pointer;
}
.bar-container {
  background-color: #F0F4FE;
  width: 100%;
  border-radius: 16px;
  margin-top: 16px;
}

.active-tab {
  color: #14171f;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

.progress-red {
  background-color: #fe4d3c;
  color: white;
  height: 4px;
  border-radius: 16px;
}
</style>
