<template>
	<div class="">
		<div class="intro-wrapper mt-16">
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

			<div class="text-center xl:pt-24 pt-12">
				<div class="flex items-center justify-center">
					<img
						class="mr-2 lg:block hidden"
						src="/images/good health.svg"
						alt=""
					/>
					<p>Connected. Patient-Centric. Supportive.</p>
				</div>
				<h1 class="my-2 c-indigo">
					Find the best doctors <br class="xl:block hidden" />
					and other healthcare providers.
				</h1>
				<p class="mb-14">
					View all practice information and ratings, no calls or messaging
					required
				</p>

				<div
					class="xl:w-full lg:w-2/3 w-full mx-auto flex xl:flex-row flex-col items-center justify-center"
				>
					<input-comp
						v-model="providerName"
						type="text"
						class="xl:mr-2 xl:mb-0 xl:w-2/5 xl:flex hidden"
						input-icon="/images/search.svg"
						placeholder="Provider name, practice name or specialty"
					/>
					<input-comp
						v-model="providerName"
						type="text"
						class="w-full mb-4 xl:hidden flex"
						input-icon="/images/search.svg"
						placeholder="Name or specialty"
					/>
					<input-comp
						v-model="cityName"
						type="text"
						class="xl:mr-2 mr-0 xl:mb-0 mb-4 xl:w-2/5 w-full"
						input-icon="/images/cil_location-pin.svg"
						placeholder="City name or Zip/Postal code"
					/>
					<div class="xl:w-1/5 w-full">
						<c-button
							type="button"
							class="w-full"
							:tertiary="true"
							@click="goToBookingPage"
						>Search</c-button
						>
					</div>
				</div>
				<div>
					<img
						class="header-image mx-auto lg:mt-0 mt-16"
						src="/images/header-image.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="mt-12 pt-14">
			<div class="text-center xl:w-1/2 lg:w-2/3 w-9/12 mx-auto">
				<h2 class="c-indigo">Actively manage your health</h2>
				<p class="mt-5">
					We empower you and your loved ones with secure access to your health
					records and the needed control to better manage your health
				</p>
			</div>
			<div class="c-wrapper mt-16 b-2">
				<div class="flex xl:flex-row flex-col items-center justify-center">
					<div
						class="xl:mb-0 mb-16 sub-sect-2 xl:h-52 h-auto flex xl:flex-row flex-col items-center justify-center mb-2 xl:w-1/2 w-full"
					>
						<div
							class="p-image lg:w-1/2 w-full h-52 bg-center bg-cover bg-no-repeat"
							style="background: url('/images/image 23.svg')"
						>
							<!-- <img class="w-full h-52" src="/images/image 23.svg" alt="" /> -->
						</div>
						<div
							class="lg:w-1/2 w-full xl:h-full xl:px-6 px-6 xl:py-9 py-6 bg-cblue-100"
						>
							<span class="mb-2 sub-titles-1">For you and your loved ones</span>
							<p class="mb-6">Private</p>
							<div class="w-48">
								<c-button
									type="button"
									class="whitespace-nowrap"
									:secondary="true"
									:small="true"
								>Sign Up for free</c-button
								>
							</div>
						</div>
					</div>

					<div
						class="sub-sect-2 xl:h-52 h-auto flex xl:flex-row flex-col items-center justify-center mb-2 xl:w-1/2 w-full"
					>
						<div
							class="p-image lg:w-1/2 w-full h-52 bg-center bg-cover bg-no-repeat"
							style="background: url('/images/image 23 (1).svg')"
						></div>
						<div
							class="lg:w-1/2 w-full xl:h-full h-auto xl:px-6 px-6 xl:py-9 py-6 bg-cblue-100"
						>
							<span class="mb-2 sub-titles-1">For your employees</span>
							<p class="mb-6">Employer</p>
							<div class="w-10/12">
								<c-button
									type="button"
									class="whitespace-nowrap"
									:secondary="true"
									:small="true"
								>Sign Up for free</c-button
								>
							</div>
						</div>
					</div>
				</div>

				<IndexSlider1 />
			</div>
		</div>

		<div class="mt-20">
			<div class="text-center lg:w-1/2 w-9/12 mx-auto mb-2">
				<h2 class="c-indigo">How it works</h2>
				<p>
					Sign Up to the CornieCare App and enjoy better healthcare outcomes.
					Engage with doctors, shop medicines, book diagnostic tests, available
					24/7
				</p>
			</div>

			<div
				class="mt-24 xl:mx-56 lg:mx-32 mx-11 circ-grid grid md:items-center items-start md:grid-rows-2 md:grid-cols-4 md:gap-x-3 gap-x-20 md:gap-y-32 gap-y-10"
			>
				<div
					class="flex flex-col items-end justify-end order-1 md:self-auto self-end"
				>
					<img
						class="md:self-auto self-start md:w-36 w-16"
						src="/images/Medical prescription-pana 1.svg"
						alt=""
					/>
					<div class="flex md:flex-row flex-col md:items-center items-end">
						<h4 class="md:block hidden">4. Manage your health records</h4>
						<h4 class="md:hidden block">4. Access records</h4>
						<img
							src="/images/plus-circle.svg"
							class="ml-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
					</div>
				</div>

				<img
					class="col-span-2 md:row-span-2 md:order-2 order-3"
					src="/images/Img-center.png"
					alt=""
				/>

				<div
					class="flex flex-col items-start justify-start md:order-3 order-2 md:self-auto self-end"
				>
					<img
						class="md:hidden block self-end w-16"
						src="/images/Mobile login-pana.svg"
						alt=""
					/>
					<div
						class="flex md:flex-row flex-col flex-col-reverse md:items-center items-start"
					>
						<img
							src="/images/plus-circle.svg"
							class="mr-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
						<h4>1. Sign up</h4>
					</div>
					<img
						class="md:block hidden w-36"
						src="/images/Mobile login-pana.svg"
						alt=""
					/>
				</div>

				<div class="flex flex-col items-center justify-end order-4">
					<div
						class="flex md:flex-row flex-col flex-col-reverse md:items-center items-end"
					>
						<h4 class="md:block hidden">3. Access Quality Care</h4>
						<h4 class="md:hidden block">3. Visit</h4>
						<img
							src="/images/plus-circle.svg"
							class="ml-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
					</div>
					<img
						class="md:self-auto self-end md:w-36 w-16"
						src="/images/Medical care-rafiki 1.svg"
						alt=""
					/>
				</div>

				<div class="flex flex-col items-start justify-start order-5">
					<div class="flex md:flex-row flex-col items-center">
						<img
							src="/images/plus-circle.svg"
							class="mr-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
						<h4 class="md:block hidden">2. Explore & Engage</h4>
						<h4 class="md:hidden block">2. Search</h4>
					</div>
					<img
						class="md:self-auto self-start md:w-36 w-16"
						src="/images/explore-engage.svg"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="c-wrapper mt-40">
			<div class="text-center xl:w-1/2 lg:w-2/3 mx-auto mb-6">
				<h2 class="c-indigo">It’s your health, make better choices</h2>
				<p>
					Sign Up to the CornieCare App and enjoy better healthcare outcomes.
					Engage with doctors, shop medicines, book diagnostic tests, available
					24/7
				</p>
			</div>

			<HealthOutcomes />
		</div>

		<div class="text-center xl:w-1/2 lg:w-2/3 w-9/12 mx-auto mt-9 pt-20 mb-32">
			<h2 class="c-indigo mb-4">Take charge of your health, today.</h2>
			<p class="mb-4">
				Sign Up to the CornieCare App and enjoy better healthcare outcomes.
				Engage with doctors, shop medicines, book diagnostic tests, available
				24/7
			</p>
			<div class="flex items-center justify-center mb-14">
				<div class="w-auto mr-6">
					<c-button type="button" :secondary="true" :small="true"
					>Get started for free</c-button
					>
				</div>
				<div class="w-auto">
					<c-button type="button" :primary="true" :small="true"
					>Contact us</c-button
					>
				</div>
			</div>
			<span class="sub-titles-1">Coming soon to your mobile Apps.</span>
			<div class="mt-8 flex items-center justify-center">
				<div class="xl:w-52 w-40 mr-6">
					<img class="" src="/images/Apple Store.svg" alt="" />
				</div>
				<div class="xl:w-52 w-40">
					<img class="" src="/images/Gogle store.svg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "../components/CButton.vue"
import HealthOutcomes from "../components/HealthOutcomes.vue"

@Component({
  components: {
    CButton,
    HealthOutcomes,
  },
})
export default class IndexPage extends Vue {
  providerName: String = ""
  cityName: String = ""

  goToBookingPage() {
    this.$router.push("/book-appointment/search-result/doctors")
  }
}
</script>

<style scoped>
.circ-grid {
  display: grid;
  grid-template-rows: 2 (0, 1fr);
  grid-template-columns: 4 (0, 1fr);
}
.intro-wrapper {
  padding: 0 210px;
}
.z--50 {
  z-index: -50;
}

.p-image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
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

@media screen and (max-width: 600px) {
  .circ-grid {
    grid-template-rows: 3 (0, 25%, 50%, 25%);
    grid-template-columns: 4 (0, 1fr);
  }
}
</style>
