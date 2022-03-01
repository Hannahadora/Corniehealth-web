<template>
	<div>
		<hospitals-dropdown-area />

		<div class="info-container p-6 mb-12">
			<div class="flex items-center mb-8">
				<img
					class="mr-4"
					src="/images/book-appointment/unsplash_gkZ-k3xf25w.png"
					alt=""
				/>
				<div>
					<span class="sub-titles-1 mb-2">Reddington Hospital</span><br />
					<img src="/images/book-appointment/ratings.png" alt="" />
				</div>
			</div>

			<div class="grid grid-cols-2 gap-6">
				<div class="flex items-center col-span-2">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-doctor-grey.png"
						alt=""
					/>
					<span class="sub-titles-2"
					>General Practice (4) | OBGTN (4) | Pediatrics (7) | Emergency
						Medicine (3) | Pathologist (5)</span
					>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-sethos-grey.png"
						alt=""
					/>
					<span class="">23 Doctors</span>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-patients-grey.png"
						alt=""
					/>
					<span class="">1034 Patients seen</span>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-lang-grey.png"
						alt=""
					/>
					<span class="">www.reddington.com.ng</span>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-phone-white.png"
						alt=""
					/>
					<span class="">+234 802 000 0000</span>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-location-grey.png"
						alt=""
					/>
					<span class="">234 Admiralty Way Lekki, Lagos, Nigeria</span>
				</div>
				<div class="flex items-center">
					<img
						class="mr-3"
						src="/images/book-appointment/icon-date-white.png"
						alt=""
					/>
					<span class="">Active since 1st May 2021</span>
				</div>
			</div>

			<div class="mt-10">
				<c-button
					type="button"
					secondary
					small
					@click="$router.push({ path: '/book-appointment/hospital-profile' })"
				>View Profile</c-button
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton },
})
export default class HospitalsPage extends Vue {}
</script>
