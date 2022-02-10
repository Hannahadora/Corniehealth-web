<template>
  <div>
    <div class="flex items-center mb-12">
      <select-dropdown class="mr-4"
        head-text="Doctors"
        icon="/images/book-appointment/icon-doctor-grey.png"
        :options="specialty"
      />
      <select-dropdown class="mr-4"
        head-text="Location"
        icon="/images/book-appointment/icon-location-grey.png"
        :options="location"
      />
      <select-dropdown class="mr-4"
        head-text="Hospital"
        icon="/images/book-appointment/icon-hospital-grey.png"
        :options="hospital"
      />
      <select-dropdown class="mr-4"
        head-text="Rating"
        icon="/images/book-appointment/icon-rating-grey.png"
        :options="rating"
      />
      <select-dropdown class="mr-4"
        head-text="Insurance"
        icon="/images/book-appointment/icon-insurance-grey.png"
        :options="insurance"
      />
    </div>

	<div class="info-container p-6">
		<div class="flex items-center mb-8">
			<img class="mr-4" src="/images/book-appointment/unsplash_gkZ-k3xf25w.png" alt="">
			<div>
				<span class="sub-titles-1 mb-2">Reddington Hospital</span><br>
				<img src="/images/book-appointment/ratings.png" alt="">
			</div>
		</div>

		<div class="grid grid-cols-2 gap-6">
			<div class="flex items-center col-span-2">
				<img class="mr-3" src="/images/book-appointment/icon-doctor-grey.png" alt="">
				<span class="sub-titles-2">General Practice (4) | OBGTN (4) | Pediatrics (7) | Emergency Medicine (3) | Pathologist (5)</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-sethos-grey.png" alt="">
				<span class="">23 Doctors</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-patients-grey.png" alt="">
				<span class="">1034 Patients seen</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-lang-grey.png" alt="">
				<span class="">www.reddington.com.ng</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-phone-white.png" alt="">
				<span class="">+234 802 000 0000</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-location-grey.png" alt="">
				<span class="">234 Admiralty Way Lekki, Lagos, Nigeria</span>
			</div>
			<div class="flex items-center">
				<img class="mr-3" src="/images/book-appointment/icon-date-white.png" alt="">
				<span class="">Active since 1st May 2021</span>
			</div>
		</div>

		<div class="mt-10">
			<c-button type="button" secondary small>View Profile</c-button>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
@Component({
  components: {CButton},
})
export default class HospitalsPage extends Vue {
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
  rating: Array<any> = [
    "All",
    "1-5 years",
    "6-10 years",
    "11-15 years",
    "16-20 years",
  ]
}
</script>
