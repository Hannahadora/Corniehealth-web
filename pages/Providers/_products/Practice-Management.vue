<template>
	<div class="xl:pt-20 pt-14">
		<breadcrumbs />

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Full-circle practice management</h2>
					<p>
						Scheduling, online appointment booking, e-requests, self-enrollment,
						forms, questionnaires, refill management, patient-initiated testing,
						and a HIPAA-compliant patient portal for ongoing engagement.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/practice-management/image 24.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/practice-management/image 37.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Engage, gain, and retain patients.</h2>
					<p>
						Show up when patients search for practices on Cornie health.
						Leverage our marketing solutions to grow and scale your healthcare
						practice. Improve online visibility and search engine optimization
						with our listing and rating service.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Connect and extend your reach</h2>
					<p>
						Boost your practice and stand out with all the features to build a
						strong relationship with patients. From views, searches, reviews,
						referrals, bookings to calls, understand how your patients choose to
						engage.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/practice-management/image 38.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/practice-management/image 39.svg" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Healthcare information exchange</h2>
					<p>
						We provide an integrated healthcare practice management software for
						hospitals/clinics, pharmacies, and Laboratories and enable ecosystem
						collaboration and healthcare information exchange.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Streamline commercials</h2>
					<p>
						Streamline billing and other financial management with an integrated
						charge description master; a comprehensive listing of all items that
						could produce a charge, from consultations, diagnostics, other
						services and procedures, medicines, supplies, devices, to
						consumables.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/practice-management/image 31.svg" alt="" />
				</div>
			</div>
		</div>

		<ProductsFooter2 />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ProductsFooter2 from "../../../components/Providers/ProductsFooter2.vue"
import Breadcrumbs from "../../../components/Breadcrumbs.vue"
@Component({
  components: { ProductsFooter2, Breadcrumbs },
})
export default class PracticeManagement extends Vue {}
</script>
