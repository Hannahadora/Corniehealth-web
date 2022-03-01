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
						class="w-full h-auto bg-white rounded-md shadow-md p-5 overflow-hidden"
					>
						<h2 class="text-sm text-primary">Sign In to Cornie Health</h2>

						<form class="h-auto mt-10" @submit.prevent="submit">
							<div class="">
								<div class="mb-3">
									<cornie-input
										v-model="form.email"
										label="Mobile number or email address"
										placeholder="Enter"
										required
									></cornie-input>
								</div>
								<div class="mb-3">
									<cornie-input
										v-model="form.password"
										label="Password"
										placeholder="Enter"
										required
									></cornie-input>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<cornie-checkbox
										v-model="form.agree"
										class="mr-1"
										@change="handleAgree"
									/>
									<div class="text-sm">Keep me logged in</div>
								</div>

								<span class="text-sm text-gray-500">Forgot password?</span>
							</div>
							<div class="w-full mt-5">
								<button
									class="rounded-md w-full text-center font-bold py-2 bg-red-500 text-white hover:bg-red-400"
								>
									Submit
								</button>
							</div>
						</form>
						<div class="my-6 w-full text-center">
							Don’t have an account?<span
								class="cursor-pointer text-red-400"
								@click="$router.push('/book-appointment/signup')"
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
import CornieDialog from "@/components/CornieDialog.vue"

export default {
  name: "PatientScreen",
  components: {
    Auth,
    HeartPulse,
    CornieInput,
    CornieCheckbox,
    CornieDialog,
  },
  layout: "auth",
  data: () => ({
    disabled: false,
    showDiag: false,
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
      this.$router.push("/book-appointment/book-a-doctor/step2")
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
