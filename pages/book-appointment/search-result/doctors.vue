<template>
	<div>
		<div class="flex items-center justify-between mb-12">
			<select-dropdown
				head-text="Doctors"
				icon="/images/book-appointment/icon-doctor-grey.png"
				:options="specialty"
			/>
			<select-dropdown
				head-text="Location"
				icon="/images/book-appointment/icon-location-grey.png"
				:options="location"
			/>
			<select-dropdown
				head-text="Hospital"
				icon="/images/book-appointment/icon-hospital-grey.png"
				:options="hospital"
			/>
			<select-dropdown
				head-text="Experience"
				icon="/images/book-appointment/icon-experience-grey.png"
				:options="experience"
			/>
			<select-dropdown
				head-text="Visit Type"
				icon="/images/book-appointment/icon-visit-grey.png"
				:options="visitType"
			/>
			<select-dropdown
				head-text="Insurance"
				icon="/images/book-appointment/icon-insurance-grey.png"
				:options="insurance"
			/>
			<select-dropdown
				head-text="Language"
				icon="/images/book-appointment/icon-lang-grey.png"
				:options="language"
			/>
			<select-dropdown
				head-text="Gender"
				icon="/images/book-appointment/icon-gender-grey.png"
				:options="gender"
			/>
		</div>

		<div class="info-container p-6 w-full flex items-start mb-12">
			<div class="w-4/12 border-r">
				<div class="flex items-center">
					<img class="mr-4" src="/images/book-appointment/Avatar.png" alt="" />
					<div class="">
						<h3 class="mr-4">Dr. Sarah Smith | F</h3>
						<img src="/images/book-appointment/ratings.png" alt="" />
					</div>
				</div>

				<div class="mt-8 xl:grid block grid-cols-1 gap-x-8 gap-y-8">
					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-doctor-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">Dentist</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/science_black_24dp 1.png"
							alt=""
						/>
						<div>
							<p class="mr-2">Mk Labs</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-location-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">234 Admiralty Way Lekki, Lagos</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-phone-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">+234 813 563 8883</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-date-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">20 Years Experience</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/Icon-fee-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">Consultation Fee starts from ₦ 20,000</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-lang-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">English | Yoruba</p>
						</div>
					</div>
				</div>
			</div>

			<div class="w-8/12 pl-6">
				<div class="flex items-center justify-between">
					<span class="sub-titles-1 text-razzmataz-pry"
					>Doctor’s Availability</span
					>

					<div class="flex items-center ap-card px-3 py-2">
						<img
							class="mr-5"
							src="/images/book-appointment/icon-date-black.png"
							alt=""
						/>
						<span class="mr-5">Nov 24 - Nov 26</span>
						<img src="/images/bx_bx-chevron-down.svg" alt="" />
					</div>
				</div>

				<div class="flex items-center justify-between mt-8">
					<div class="text-center ap-card px-12 py-2">
						<span class="sub-titles-2">Wed, 24 Nov</span><br />
						<span class="text-grey-blue mt-2">6 slots available</span>
					</div>
					<div class="text-center px-12 py-2">
						<span class="sub-titles-2">Thurs, 24 Nov</span><br />
						<span class="text-grey-blue mt-2">13 slots available</span>
					</div>
					<div class="text-center px-12 py-2">
						<span class="sub-titles-2">Fri, 24 Nov</span><br />
						<span class="text-grey-blue mt-2">3 slots available</span>
					</div>
				</div>

				<div class="flex items-center justify-between mt-6">
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">09:00</span>
					</div>
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">10:00</span>
					</div>
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">14:00</span>
					</div>
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">21:00</span>
					</div>
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">22:00</span>
					</div>
					<div class="time-card px-8 py-2">
						<span class="text-grey-blue">24:00</span>
					</div>
				</div>

				<div class="flex items-center justify-end mt-32">
					<c-button
						type="button"
						class="mr-2"
						:primary="true"
						small
						@click="$router.push({ path: '/book-appointment/profile' })"
					>
						View profile
					</c-button>
					<c-button
						type="button"
						:secondary="true"
						small
						@click="$router.push({ path: '/book-appointment/book-doctor' })"
					>
						Book Appointment
					</c-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class DoctorsPage extends Vue {
  specialty: Array<any> = [
    "All",
    "Dentists",
    "ENT",
    "General Practice",
    "Obstetricians & Gynecologists",
    "Pedriatricians",
    "Urologist",
  ]

  location: Array<any> = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Delta",
    "Kwara",
    "Ibadan",
    "Calabar",
    "Benin",
  ]

  hospital: Array<any> = [
    "All",
    "Blue Cross Hospital",
    "Eko Hospital",
    "Evercare Hospital",
    "Lagoon Hospital",
    "Good Times",
    "Blue Foundation",
    "New Times",
  ]

  experience: Array<any> = [
    "All",
    "1-5 years",
    "6-10 years",
    "11-15 years",
    "16-20 years",
  ]

  visitType: Array<any> = [
    "All",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ]

  insurance: Array<any> = [
    "All",
    "1-5 years",
    "6-10 years",
    "11-15 years",
    "16-20 years",
  ]

  language: Array<any> = ["All", "English", "Yoruba", "Igbo", "Hausa"]
  gender: Array<any> = ["All", "Male", "Female"]
}
</script>
{

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
</style>
