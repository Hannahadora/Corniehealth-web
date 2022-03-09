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
						class="w-full h-auto bg-white rounded-md shadow-md px-9 py-12 overflow-hidden"
					>
						<h2 class="text-sm text-primary">Sign In to Cornie Health</h2>

						<form class="h-auto mt-10" @submit.prevent="submit">
							<label class="text-sm font-bold" for="email">Password</label>
							<div class="mb-3 login-input-wrapper">
								<input
									v-model="form.email"
									class="login-input text-sm w-full"
									label="Mobile number or email address"
									type="email"
									name="email"
									placeholder="Enter email"
									required
								/>
							</div>

							<label class="text-sm font-bold" for="password">Password</label>
							<div class="mb-3 login-input-wrapper">
								<input
									v-model="form.password"
									class="login-input text-sm w-10/12"
									label="Password"
									:type="passwordType"
									placeholder="Enter password"
									required
								/>
								<img
									class="cursor-pointer"
									src="/images/Union.png"
									alt=""
									@click="switchPasswordType"
								/>
							</div>
							<div class="flex  lg:flex-row flex-col  lg:items-center items-start justify-between">
								<div class="flex items-center">
									<cornie-checkbox
										v-model="form.agree"
										class="mr-1"
										@change="handleAgree"
									/>
									<div class="text-sm">Keep me logged in</div>
								</div>

								<span class="text-sm text-gray-500 cursor-pointer"
								>Forgot password?</span
								>
							</div>
							<div class="w-full mt-12">
								<button
									type="submit"
									class="rounded-md w-full text-center font-bold py-2 bg-red-500 text-white hover:bg-red-400"
								>
									Sign In
								</button>
							</div>
						</form>
						<div class="my-6 w-full text-center">
							Don’t have an account?<span
								class="cursor-pointer text-red-400"
								@click="$router.push('/patients/book-appointment/signup')"
							>
								Sign Up</span
							>
						</div>
					</div>
				</div>
			</template>
			<template #image>
				<img src="@/static/images/smiling lady 1.svg" class="w-full h-full" />
			</template>
			<template #banner>
				<div class="flex justify-center items-center">
					<!-- <heart-pulse class="mr-3" /> -->
					<h2 class="font-bold">Sign In to your account</h2>
				</div>
				<span class="text-center mt-4">
					This helps us verify your identity. You can enable or disable this in
					your profile account settings.
				</span>
			</template>
		</auth>
	</div>
</template>

<script>
import Auth from "@/components/auth/auth.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import CornieDialog from "@/components/CornieDialog.vue"

export default {
  name: "PatientScreen",
  components: {
    Auth,
    CornieCheckbox,
    CornieDialog,
  },
  layout: "auth",
  data: () => ({
    disabled: false,
    showDiag: false,
    passwordType: "text",
    url: "https://corniehealth.herokuapp.com",
    agree: false,
    form: {
      password: "",
      email: "",
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
    async submit() {
      this.$router.push("/patients/book-appointment/book-a-doctor/step2")
      try {
        this.disabled = true
        const response = await this.$axios.post(
          `${this.url}/api/v1/auth/login`,
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

    switchPasswordType() {
      if (this.passwordType === "text") {
        this.passwordType = "password"
      } else if (this.passwordType === "password") {
        this.passwordType = "text"
      }
    },
  },
}
</script>

<style scoped>
.login-input-wrapper {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}

.login-input {
  background: transparent;
  border: none;
}
</style>
