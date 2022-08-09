<template>
	<div class="xl:pt-20 pt-14">
		<breadcrumbs />

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">
						Simplify collections with online payment processing
					</h2>
					<p>
						Empower your team to maximize collection with easy-to-read and
						transparent paperless billing and get paid faster.
					</p>
				</div>
				<div class="xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 40.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 41.png" alt="" />
				</div>
				<div class="xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">Posting bills.</h2>
					<p>
						Empower your practitioners: doctors, lab scientists, pharmacists to
						post bills related to an encounter; process check-outs and audit
						bills in the finance module.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">Transaction history</h2>
					<p>
						View patients and accounts transaction history and filter by status.
					</p>
				</div>
				<div class="xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 42.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 43.png" alt="" />
				</div>
				<div class="xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">Claims management</h2>
					<p>
						Electronically generate invoices and submit claims and track
						settlement status.
					</p>
				</div>
			</div>
		</div>

		<div class="py-14 bg-white">
			<div
				class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
			>
				<div class="xl:mr-14 xl:mb-0 mb-14 xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">Account receivables</h2>
					<p>
						Your account receivables dashboard keeps you up to date on pending
						payments.
					</p>
				</div>
				<div class="xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 45.png" alt="" />
				</div>
			</div>
		</div>

		<div class="py-14 bg-cblue-100">
			<div
				class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
			>
				<div class="xl:mr-14 xl:mt-0 mt-14 xl:w-1/2 w-full">
					<img src="/images/billing-and-payment/image 43.png" alt="" />
				</div>
				<div class="xl:w-1/2 w-full">
					<h2 class="c-indigo mb-8">Reduce billing errors</h2>
					<p>
						Eliminate billing errors and deliver exceptional billing experience.
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
import Breadcrumbs from "~/components/Breadcrumbs.vue"
@Component({
  components: { ProductsFooter2, Breadcrumbs },
})
export default class BillingAndPayment extends Vue {}
</script>
