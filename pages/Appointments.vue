<template>
	<div class="mt-14">
		<div class="intro-wrapper relative">
			<div class="text-center xl:pt-24 pt-12">
				<div class="flex items-center justify-center">
					<img
						class="lg:block hidden mr-2"
						src="/images/good health.svg"
						alt=""
					/>
					<p>Connected. Patient-Centric. Supportive.</p>
				</div>
				<h1 class="my-2 c-indigo">
					Find the best doctors <br class="xl:block hidden" />
					and other healthcare providers.
				</h1>
				<p class="mb-14 xl:w-3/5 w-full mx-auto">
					View all practice information and ratings, no calls or messaging
					required
				</p>

				<img
					class="absolute xl:bottom-11 bottom-2 xl:right-11 right-2 xl:w-auto w-24 xl:h-auto h-20"
					src="/images/providers/bg-img.svg"
					alt=""
				/>
				<img
					class="absolute xl:right-28 right-2 xl:top-28 top-7 z--50"
					src="/images/shapes (1).svg"
					alt=""
				/>
				<img
					class="absolute left-16 bottom-40"
					src="/images/providers/img.svg"
					alt=""
				/>

				<filter-practitioner-area />

				<div class="mt-2 xl:block hidden">
					<p>
						<span class="text-razzmataz-pry">Popular Searches:</span> Family
						Medicine | Pediatrician | Dermatologist | ENT |
						Gynecologist/Obstetrician | All Specialties
					</p>
				</div>
				<div>
					<img
						class="header-image mx-auto mt-0"
						src="/images/appointments/pana.svg"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="c-wrapper xl:mt-0 mt-16">
			<appoint-slider-1 />

			<div class="text-center xl:w-1/2 w-full mx-auto mt-20 xl:mb-24 mb-16">
				<h2 class="c-indigo">
					Our service is free. We deliver affordable healthcare, at no extra
					cost
				</h2>
				<p class="mt-4">
					You only get to pay for your healthcare services and medications
				</p>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-20 xl:mt-0 mt-20 xl:w-2/5 w-full">
					<h2 class="c-indigo mb-8">Security and access control</h2>
					<p class="mb-8">
						Control access to your and your dependent’s health records and
						manage authorization. Your data is always encrypted.
					</p>

					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Multi-level Security</p>
					</div>
					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>256-bit encryption</p>
					</div>
					<div class="flex items-start gap-4 mb-8">
						<img src="/images/checkmark.svg" alt="" />
						<p>HIPAA Compliant Data Centers</p>
					</div>
					<c-button type="button" :secondary="true" small @click="goToSignup">
						Sign up for free
					</c-button>
				</div>
				<div class="xl:w-3/5 w-full">
					<img src="/images/appointments/Group 11649.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-20 xl:mb-0 mb-20 xl:w-2/5 w-full">
					<img src="/images/appointments/Group 11647.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Book & Manage Doctor’s Appointments</h2>

					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Verified doctor’s</p>
					</div>
					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Patient’s rated</p>
					</div>
					<div class="flex items-start gap-4 mb-8">
						<img src="/images/checkmark.svg" alt="" />
						<p>Broad specialties</p>
					</div>
					<c-button type="button" :secondary="true" small @click="goToSignup">
						Sign up for free
					</c-button>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-20 xl:mt-0 mt-20 xl:w-2/5 w-full">
					<h2 class="c-indigo mb-8">
						No Time for In-Person Visit? Consult Virtually
					</h2>

					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Fees start at N2000</p>
					</div>
					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Quick response time</p>
					</div>
					<div class="flex items-start gap-4 mb-8">
						<img src="/images/checkmark.svg" alt="" />
						<p>Private and confidential</p>
					</div>
					<div class="flex itesm-center">
						<c-button type="button" secondary small>Consult Now</c-button>
						<button
							class="text-razzmataz-pry font-bold py-3 px-9 whitespace-nowrap rounded-xl focus:outline-none bg-transparent"
						>
							256 Doctors Online
						</button>
					</div>
				</div>
				<div class="xl:w-3/5 w-full">
					<img src="/images/appointments/Group 11647 (1).svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-20 xl:mb-0 mb-20 xl:w-3/5 w-full">
					<img src="/images/appointments/Group 11647 (2).svg" alt="" />
				</div>
				<div class="xl:w-2/5 w-full">
					<h2 class="c-indigo mb-8">Shop Pharmacy</h2>

					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Verified doctor’s</p>
					</div>
					<div class="flex items-start gap-4 mb-4">
						<img src="/images/checkmark.svg" alt="" />
						<p>Patient’s rated</p>
					</div>
					<div class="flex items-start gap-4 mb-8">
						<img src="/images/checkmark.svg" alt="" />
						<p>Broad specialties</p>
					</div>
					<c-button type="button" :secondary="true" small>
						Order Medicines
					</c-button>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-20 xl:mt-0 mt-20 xl:w-2/5 w-full">
					<h2 class="c-indigo mb-8">Book Lab Tests</h2>

					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Your preferred laboratories</p>
					</div>
					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Affordable price</p>
					</div>
					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Home sample pick-up</p>
					</div>
					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Fast turnaround time</p>
					</div>
					<div class="flex items-start mb-8">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Result uploaded to your health record</p>
					</div>
					<c-button type="button" :secondary="true" small>
						Book Lab Tests
					</c-button>
				</div>
				<div class="xl:w-3/5 w-full">
					<img src="/images/appointments/Group 11646.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-20 xl:mb-0 mb-20 xl:w-3/5 w-full">
					<img src="/images/appointments/Group 11647 (3).svg" alt="" />
				</div>
				<div class="xl:w-2/5 w-full">
					<h2 class="c-indigo mb-8">
						All Your Health Data in One Secure Place
					</h2>

					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>256 bits end-to-end encryption</p>
					</div>
					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Access management</p>
					</div>
					<div class="flex items-start mb-4">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Audit reports</p>
					</div>
					<div class="flex items-start mb-8">
						<img class="mr-4" src="/images/checkmark.svg" alt="" />
						<p>Updated across facilities</p>
					</div>
					<c-button type="button" :secondary="true" small @click="goToSignup">
						Sign up for free
					</c-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "../components/CButton.vue"
import InputComp from "../components/InputComp.vue"
import FilterPractitionerArea from "~/components/FilterPractitionerArea.vue"

@Component({
  components: {
    CButton,
    InputComp,
    FilterPractitionerArea,
  },
})
export default class AppointmentPage extends Vue {

  goToSignup() {
    this.$router.push("/signup")
  }

  async created() {}
}
</script>
<style scoped>
.intro-wrapper {
  padding: 0 210px;
}

.z--50 {
  z-index: -50;
}

@media screen and (max-width: 1024px) {
  .intro-wrapper {
    padding: 0 72px;
  }
}
@media screen and (max-width: 768px) {
  .intro-wrapper {
    padding: 0 50px;
  }
}
</style>
