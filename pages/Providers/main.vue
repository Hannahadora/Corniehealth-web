<template>
	<div>
		<div
			class="c-wrapper xl:pt-44 pt-32 pb-20 flex xl:flex-row flex-col items-center"
		>
			<div class="xl:w-1/2 w-full xl:mr-14 xl:mb-0 mb-14">
				<div class="flex items-center xl:justify-start justify-center">
					<img
						class="xl:block hidden mr-2"
						src="/images/good health.svg"
						alt=""
					/>
					<p class="xl:text-left text-center">
						#1 healthcare information exchange platform for Africa
					</p>
				</div>
				<h1 class="c-indigo mt-3 xl:text-left text-center">
					Manage your practice, as you should
				</h1>
				<p class="my-4 xl:text-left text-center">
					Streamline your practice workflow, connect with third-party providers,
					and engage with patients in real-time, virtually, in-office, or both.
				</p>
				<span class="sub-titles-2 font-bold"
				>Mobile, from anywhere. Collaborative. Patient-Centric.
				</span>
				<div class="mt-12 flex items-center xl:justify-start justify-center">
					<div class="w-auto mr-6">
						<c-button type="button" secondary small
						>Get started for free</c-button
						>
					</div>
					<div class="w-auto">
						<c-button type="button" primary small>Contact Us</c-button>
					</div>
				</div>
			</div>
			<div class="xl:w-1/2 w-full flex items-center justify-center">
				<img src="/images/providers/rafiki.png" alt="" />
			</div>
		</div>

		<div class="c-wrapper">
			<div class="text-center my-24 xl:w-2/3 w-full mx-auto">
				<h2 class="c-indigo">
					Empowering ecosystem providers and delivering unmatched access for
					patients
				</h2>
				<span class="text-lg mt-4"
				>Join a growing number of providers who manage their patients with
					CornieHealth.</span
				>
			</div>

			<div class="grid xl:grid-cols-2 grid-cols-1 gap-y-32">
				<div class="flex xl:flex-row flex-col items-center">
					<div class="bg-razzmataz-pry text-white xl:w-1/2 w-full p-6">
						<div class="flex items-center justify-start">
							<img class="mb-4" src="/images/book-appointment.svg" alt="" />
						</div>
						<div class="">
							<span class="sub-titles-1">Hospitals and Clinics</span>
						</div>
						<p class="my-6">
							We empower your team with tools and resources to efficiently run
							your healthcare operation, deliver superior patient
							experience,connect with third-party providers and patients for
							better care coordination.
						</p>
						<div>
							<NuxtLink
								to="/providers/type/hospitals-and-clinics"
								class="flex items-center"
							>
								<img src="/images/providers/bi_arrow-down.png" alt="" />
								<span class="ml-2 sub-titles-2">Learn more</span></NuxtLink
							>
						</div>
					</div>
					<div class="xl:w-1/2 w-full">
						<img src="/images/providers/image 54.png" alt="" />
					</div>
				</div>

				<div class="flex xl:flex-row flex-col items-center">
					<div class="bg-razzmataz-pry text-white xl:w-1/2 w-full p-6">
						<div class="flex items-center xl:justify-start justify-center">
							<img
								class="mb-4"
								src="/images/appointments/healthicons_doctor-male-outline.png"
								alt=""
							/>
						</div>
						<div class="">
							<span class="sub-titles-1">Solo Practice</span>
						</div>
						<p class="my-6">
							Build your independent healthcare practice; with integrated EHR,
							patient experience management, and collaborations tools for better
							care coordination and operate from anywhere.
						</p>
						<div>
							<NuxtLink
								to="/providers/type/solo-practice"
								class="flex items-center"
							>
								<img src="/images/providers/bi_arrow-down.png" alt="" />
								<span class="ml-2 sub-titles-2">Learn more</span></NuxtLink
							>
						</div>
					</div>
					<div class="xl:w-1/2 w-full">
						<img src="/images/providers/image 23.png" alt="" />
					</div>
				</div>

				<div class="flex xl:flex-row flex-col-reverse items-center">
					<div class="xl:w-1/2 w-full">
						<img src="/images/providers/image 55.png" alt="" />
					</div>
					<div class="bg-razzmataz-pry text-white xl:w-1/2 w-full p-6">
						<div class="flex items-center justify-start">
							<img class="mb-4" src="/images/carbon_medication.svg" alt="" />
						</div>
						<div class="">
							<span class="sub-titles-1">Community Pharmacies</span>
						</div>
						<p class="my-6">
							Powerful tools and resources to efficiently run your pharmacy
							operation, process electronic prescriptions from third-party
							doctors, manage online sales, collaborate, and deliver superior
							patient experience.
						</p>
						<div>
							<NuxtLink
								to="/providers/type/pharmacies"
								class="flex items-center"
							>
								<img src="/images/providers/bi_arrow-down.png" alt="" />
								<span class="ml-2 sub-titles-2">Learn more</span></NuxtLink
							>
						</div>
					</div>
				</div>

				<div class="flex xl:flex-row flex-col-reverse items-center">
					<div class="xl:w-1/2 w-full">
						<img src="/images/providers/image 22.png" alt="" />
					</div>
					<div class="bg-razzmataz-pry text-white xl:w-1/2 w-full p-6">
						<div class="flex items-center justify-start">
							<img class="mb-4" src="/images/carbon_result.svg" alt="" />
						</div>
						<div class="">
							<span class="sub-titles-1">Diagnostics Centers</span>
						</div>
						<p class="my-6">
							Leverage our LIMS solutions to drive your diagnostic practice,
							manage electronic requests and reports, collaborate with
							third-party providers across facilities, and deliver a superior
							patient experience.
						</p>
						<div>
							<NuxtLink
								to="/providers/type/pharmacies"
								class="flex items-center"
							>
								<img src="/images/providers/bi_arrow-down.png" alt="" />
								<span class="ml-2 sub-titles-2">Learn more</span></NuxtLink
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="c-wrapper mt-52">
			<div class="text-center mb-20 xl:w-2/3 w-full mx-auto">
				<h2 class="c-indigo">
					Connect, exchange data at scale, drive better care coordination, and
					improve care outcomes.
				</h2>
				<span class="text-lg mt-4"
				>Join a growing number of providers who manage their patients with
					CornieHealth.</span
				>
			</div>

			<div
				class="mt-12 mb-20 mx-6 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16"
			>
				<div
					v-for="(priviledge, index) in providerPriviledges"
					:key="index"
					class="py-12 px-6 cursor-pointer choices c-shadow"
				>
					<div class="flex items-center justify-center">
						<img class="mb-7 choices-img" :src="priviledge.image" alt="" />
					</div>
					<div class="h-16 text-center">
						<span class="sub-titles-1">{{ priviledge.title }}</span>
					</div>
					<p class="mt-6 text-center">{{ priviledge.text }}</p>
				</div>
			</div>

			

			<div class="info-container py-4 px-6 border-none flex items-center mb-9">
				<div class="mr-12">
					<img src="/images/providers/img.png" alt="" />
				</div>

				<div class="w-2/3">
					<h2 class="c-indigo">Patient Experience</h2>
					<p class="mt-2">
						Leverage our experience dashboard to manage and track patients along
						their care journeys. View visit timelines to identify and unblock
						delays, drive operational efficiency, provide timely care, and
						deliver a superior patient experience.
					</p>
					<div class="mt-12">
						<c-button type="button" secondary small>Discover more</c-button>
					</div>
				</div>
			</div>

			<div class="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gridcols-1 gap-6">
				<NuxtLink to="/providers/products/patient-experience">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Nasal spray-rafiki 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">Patient Experience</span>
				</NuxtLink>
				<NuxtLink to="/providers/products/emr-emh">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Breast cancer research-rafiki 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">EMR/EHR</span>
				</NuxtLink>
				<NuxtLink to="/providers/products/patient-experience">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Medicine-pana 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">Practice Workflows</span>
				</NuxtLink>
				<NuxtLink to="/providers/products/billing-and-payment">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Credit Card Payment-rafiki 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">Billing & Payment</span>
				</NuxtLink>
				<NuxtLink to="/providers/products/patient-portal">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Ophthalmologist-rafiki 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">Patient Portal</span>
				</NuxtLink>
				<NuxtLink to="/providers/products/analytics">
					<div class="mb-6 img-rack">
						<img src="/images/providers/Business analytics-rafiki 1.png" alt="" />
					</div>
					<span class="sub-titles-2 c-indigo">Analytics</span>
				</NuxtLink>
			</div>

			<div class="mt-28 flex items-center justify-center mb-36">
				<div class="w-auto mr-6">
					<c-button type="button" secondary small>Sign Up for Free</c-button>
				</div>
				<div class="w-auto">
					<c-button type="button" primary small>Contact Us</c-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { providerPriviledges } from "../../plugins/providerPriviledges"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton },
})
export default class ProvidersMain extends Vue {
  providerPriviledges: Array<any> = providerPriviledges
}
</script>

<style scoped>
.choices:hover {
  color: #fff;
  background: #fe4d3c;
  border-radius: 8px;
}

.choices:hover img {
  filter: grayscale(1) invert(1) !important;
}

.c-h-339 {
  height: 339px;
}

.img-rack {
  width: 189.83px;
  height: 104px;
  background: #ffffff;
  border: 0.4px solid #667499;
  box-shadow: 4px 4px 100px 10px rgba(46, 41, 78, 0.04),
    0px 8px 20px rgba(46, 41, 78, 0.06);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
