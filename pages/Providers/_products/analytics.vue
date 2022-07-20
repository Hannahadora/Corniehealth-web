<template>
	<div class="xl:pt-20 pt-14">
		<div class="bg-cblue-100 xl:px-32 py-16 h-52 text-center relative">
			<h1 class="c-indigo mb-2">Analytics</h1>
			<p class="flex items-center justify-center">
				<img class="mr-2" src="/images/nav/home.svg" alt="" />
				<span class="mr-2">Home /</span>
				<img class="mr-2" src="/images/nav/about.svg" alt="" />
				<span class="text-razzmataz-pry">Analytics</span>
			</p>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">See what works</h2>
					<p>
						Get detailed performance reports to understand what works and what
						doesn’t. Filter operational data by practice, location, specialty,
						period, and account to get specific performance data.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/analytics/image 50.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/analytics/image 50 (1).png" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">
						Leverage intelligence, drive your practice.
					</h2>
					<p>
						Trend your data over time to gain invaluable business insights, all
						the information you need to drive growth.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Clinical analytics</h2>
					<p>
						Let your clinical data help you better assess and improve the
						quality of care and outcomes.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/analytics/image 51.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/analytics/image 54.png" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Finacial Inteliigence</h2>
					<p>
						Harness discrete data to understand your practice’s financial
						standing, from input costs, resource utilization, billing,
						receivables, etc., to get insights to optimize cost and grow
						revenue.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Patient experience</h2>
					<p>
						Feel your patients’ pulses and learn new ways to offer wholesome
						patient experiences.
					</p>
				</div>
				<div class="xl:w-2/5 w-full">
					<img src="/images/analytics/image 52.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
					<img src="/images/analytics/Doctor_And_Patient (1) 1.png" alt="" />
				</div>
				<div class="xl:w-3/5 w-full">
					<h2 class="c-indigo mb-8">Patient Engagement</h2>
					<p>
						Measure patient’s engagement and understand the best approach to
						better activate patients to be more involved in caring for
						themselves. Classify and identify individual patient needs.
					</p>
				</div>
			</div>
		</div>

		<ProductsFooter2 />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ProductsFooter2 from "../../../components/Providers/ProductsFooter2.vue"
@Component({
  components: { ProductsFooter2 },
})
export default class Analytics extends Vue {}
</script>
