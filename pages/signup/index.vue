<template>
	<auth>
		<template #default>
			<div class="w-full h-full flex justify-center items-center">
				<div
					class="w-full h-auto bg-white rounded-md shadow-md p-5 text-center overflow-hidden"
				>
					<h2 class="text-sm text-primary">Early Access Registration</h2>
					<div class="text-left text-sm my-5">
						Please note that Cornie Health is currently in private beta. When
						you sign up, you agree to be notified when our services become
						generally available for use.
					</div>
					<div class="text-left text-sm mb-5">
						We are excited to have you join other amazing people at Cornie
						Health. Let's fix healthcare together.
					</div>
					<div class="w-full text-gray-400 text-center mb-10">
						Choose how you want to register
					</div>
					<div class="w-full h-20 flex overflow-hidden">
						<nuxt-link
							class="rounded-md border-2 border-primary mr-5 text-center flex-1 p-3 flex flex-col justify-between items-center hover:bg-red-500 hover:border-transparent cursor-pointer group"
							to="/signup/patient"
						>
							<patient-icon class="fill-current group-hover:text-white" />
							<div
								class="font-bold text-sm text-primary group-hover:text-white mt-2"
							>
								Patient
							</div>
						</nuxt-link>
						<nuxt-link
							class="rounded-md border-2 border-primary mr-5 text-center flex-1 p-3 flex flex-col justify-center items-center hover:bg-red-500 hover:border-transparent group cursor-pointer"
							to="/signup/provider"
						>
							<provider-icon class="fill-current group-hover:text-white" />
							<div
								class="font-bold text-sm text-primary group-hover:text-white mt-2"
							>
								Provider
							</div>
						</nuxt-link>
						<nuxt-link
							class="rounded-md border-2 border-primary text-center flex-1 p-3 flex flex-col justify-center items-center hover:bg-red-500 hover:border-transparent group cursor-pointer"
							to="/signup/payer"
						>
							<payer-icon class="fill-current group-hover:text-white" />
							<div
								class="font-bold text-sm text-primary group-hover:text-white mt-2"
							>
								Payer
							</div>
						</nuxt-link>
					</div>
					<div class="my-10 w-full text-center">
						Have an account?
						<span
							class="text-red-400 cursor-pointer hover:text-red-300"
							@click="handleSignin"
						>Sign in</span
						>
					</div>
				</div>
			</div>
		</template>
	</auth>
</template>

<script>
import Auth from "@/components/auth/auth.vue"
import PatientIcon from "@/components/icons/patient.vue"
import PayerIcon from "@/components/icons/payer.vue"
import ProviderIcon from "@/components/icons/provider.vue"
export default {
  name: "IndexScreen",
  components: {
    Auth,
    PatientIcon,
    PayerIcon,
    ProviderIcon,
  },
  layout: "auth",
  methods: {
    async handleSignin() {
      location.href =
        "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/login"
    },
  },
}
</script>
