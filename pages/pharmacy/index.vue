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
					<p>Quality medicines. Top rated pharmacies. Door delivery.</p>
				</div>
				<h1 class="my-2 c-indigo">Your Wellness Pharmacy</h1>
				<p class="mb-14 xl:w-3/5 w-full mx-auto">
					Convenient, private, virtual pharmacy. Enjoy best prices and
					guaranteed availability. Compare prices for meds, other healthcare
					products, and save.
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

				<pharm-filter />

				<div class="mt-2 xl:block hidden"></div>
				<div>
					<img
						class="header-image mx-auto mt-8 mb-20"
						src="/images/header-image-2.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="c-wrapper xl:mt-0 mt-16">
			<div class="text-center xl:w-1/2 w-full mx-auto xl:mb-24 mb-16">
				<h2 class="c-indigo">Popular medications & products?</h2>
				<p class="mt-4">
					Enjoy bargain prices when you shop original medications and other
					healthcare products from CornieHealth
					<span class="text-razzmataz-pry">Up to 25% savings!</span>
				</p>
			</div>

			<pharm-slider-1 class="mt-20" />
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
						<h4 class="md:block hidden">4. Get refill reminders</h4>
						<h4 class="md:hidden block">4. Get refill</h4>
						<img
							src="/images/plus-circle.svg"
							class="ml-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
					</div>
				</div>

				<img
					class="col-span-2 md:row-span-2 md:order-2 order-3"
					src="/images/img-center-2.png"
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
						<h4 class="md:block hidden">3. Manage & Track Delivery</h4>
						<h4 class="md:hidden block">3. Management</h4>
						<img
							src="/images/plus-circle.svg"
							class="ml-5 md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
					</div>
					<img
						class="md:self-auto self-end md:w-36 w-16"
						src="/images/hiwp3.png"
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
						<h4 class="md:block hidden">2. Order your medications</h4>
						<h4 class="md:hidden block">2. Order</h4>
					</div>
					<img
						class="md:self-auto self-start md:w-36 w-16"
						src="/images/hiwp2.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<div class="c-wrapper mt-20 text-center lg:w-1/2 w-9/12 mx-auto mb-52">
			<div class="text-2xl">
				No additional charges apply; you only pay the cost of your medications
				and delivery
			</div>
			<div class="mt-6">
				<c-button
					type="button"
					class="whitespace-nowrap"
					:secondary="true"
					:small="true"
				>Sign Up for free</c-button
				>
			</div>
		</div>

		<div class="c-wrapper mt-40 mb-40">
			<div class="text-center xl:w-1/2 lg:w-2/3 mx-auto mb-6">
				<h2 class="c-indigo mb-4">Take complete charge of your health</h2>
				<p>
					You must be registered on CornieHealth to enjoy these benefits and
					more
				</p>
			</div>

			<pharm-slider-2 />
		</div>

		<div class="bg-cotton-ball py-28 c-wrapper">
			<div class="grid grid-cols-3 gap-6">
				<div class="flex flex-col items-center justify-center">
					<div class="flex items-center justify-center mb-6">
						<img src="/images/about/frame12349.png" alt="" />
					</div>
					<h3 class="mb-6 font-bold c-indigo">Regular medication?</h3>
					<div class="lg:h-28 mb-12">
						<p class="text-center">
							Experience, fast and reliable refills of your medications for
							heart health, diabetes, HIV, sexual health, etc. We will sort and
							arrange your meds and make it easier for you to stick to your
							medication routine:
						</p>
					</div>
					<div class="flex items-center justify-center">
						<button
							type="button"
							class="text-base font-bold border border-indigo-900 rounded c-indigo bg-white px-9 py-3"
							@click="$router.push('/signin')"
						>
							SIgn Up for Free
						</button>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div class="flex items-center justify-center mb-6">
						<img src="/images/about/frame12349(1).png" alt="" />
					</div>
					<h3 class="mb-6 font-bold c-indigo">Understand your medications</h3>
					<div class="lg:h-28 mb-12">
						<p class="text-center">
							Get comprehensive information on all your medications, powered by
							EMDEX
						</p>
					</div>

					<div class="flex items-center justify-center">
						<button
							type="button"
							class="text-base font-bold border border-indigo-900 rounded c-indigo bg-white px-9 py-3"
							@click="$router.push('/signin')"
						>
							SIgn Up for Free
						</button>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<div class="flex items-center justify-center mb-6">
						<img src="/images/about/frame12349(2).png" alt="" />
					</div>
					<h3 class="mb-6 font-bold c-indigo">Want a prescription?</h3>
					<div class="mb-12 lg:h-28">
						<p class="text-center">
							Consult a licensed doctor online, get a prescription, and we will
							deliver to your preferred location.
						</p>
					</div>
					<div class="flex items-center justify-center">
						<button
							type="button"
							class="text-base font-bold border border-indigo-900 rounded c-indigo bg-white px-9 py-3"
							@click="$router.push('/signin')"
						>
							Find a Doctor
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="c-wrapper mt-20 mb-20">
			<div class="text-center xl:w-1/2 lg:w-2/3 mx-auto mb-6">
				<h2 class="c-indigo mb-4">Choose whichever works best for you</h2>
			</div>

			<div class="grid grid-cols-4 gap-3 my-20">
				<div>
					<img class="w-full" src="/images/about/image23(1).png" alt="" />
				</div>
				<div class="bg-lighter-blue pt-6 pl-6 pr-14">
					<div class="sub-titles-1 mb-2 font-bold">
						Pick up at a Pharmacy near you
					</div>
					<p class="mb-4">
						Shop best prices and pick up your medication at any of our
						participating neighborhood pharmacies.
					</p>

					<div class="border px-4 py-4 flex items-center py-3 px-5">
						<img class="xl:mr-6 mr-4 w-5 h-5" src="/images/search.svg" alt="" />
						<input
							type="text"
							placeholder="Enter city or state"
							required
							class="w-10/12 bg-transparent focus:outline-none text-sm"
							@input="$emit('input', $event.target.value)"
						/>
					</div>
				</div>
				<div>
					<img class="w-full" src="/images/about/image24.png" alt="" />
				</div>
				<div class="bg-lighter-blue pt-6 pl-6 pr-14">
					<div class="sub-titles-1 mb-2 font-bold">Shop for home delivery.</div>
					<p class="mb-6">
						Fast, convenient delivery to your preferred location.
					</p>
					<p>
						<span class="font-bold">Delivery Partners:</span> MuleEx and Gokada.
					</p>
				</div>
			</div>

			<div class="mt-20 text-center lg:w-1/2 w-9/12 mx-auto mb-52">
				<div class="text-2xl font-bold c-indigo">
					Sign up to experience our virtual pharmacy today
				</div>
				<div class="mt-6">
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
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "../../components/CButton.vue"
import InputComp from "../../components/InputComp.vue"
import PharmSlider1 from "~/components/PharmSlider1.vue"
import PharmSlider2 from "~/components/PharmSlider2.vue"

@Component({
  components: {
    CButton,
    InputComp,
    PharmSlider1,
    PharmSlider2,
  },
})
export default class PharmacyPage extends Vue {
  goToSignup() {
    this.$router.push(`/signup?redirect=${this.$route.path}`)
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
