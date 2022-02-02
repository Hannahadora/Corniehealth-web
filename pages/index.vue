<template>
	<div class>
		<IndexHeader class="lg:mt-24 mt-16" />
		<div class="mt-12 pt-14">
			<div class="text-center xl:w-1/2 lg:w-2/3 w-9/12 mx-auto">
				<h2 class="c-indigo">Actively manage your health</h2>
				<p class="mt-5">
					We empower you and your loved ones with secure access to your health
					records and the needed control to better manage your health
				</p>
			</div>
			<div class="c-wrapper mt-16 b-2">
				<div
					class="flex xl:flex-row flex-col items-center justify-center xl:gap-0 gap-16"
				>
					<div
						class="sub-sect-2 xl:h-52 h-auto flex xl:flex-row flex-col items-center justify-center mb-2 xl:w-1/2 w-full"
					>
						<div
							class="lg:w-1/2 w-full h-52 bg-center bg-cover bg-no-repeat"
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
									title="Sign Up for free"
									:secondary="true"
									:small="true"
								/>
							</div>
						</div>
					</div>

					<div
						class="sub-sect-2 xl:h-52 h-auto flex xl:flex-row flex-col items-center justify-center mb-2 xl:w-1/2 w-full"
					>
						<div
							class="lg:w-1/2 w-full h-52 bg-center bg-cover bg-no-repeat"
							style="background: url('/images/image 23 (1).svg')"
						>
							<!-- <img
                class="w-full"
                src="/images/image 23 (1).svg"
                alt=""
              /> -->
						</div>
						<div
							class="lg:w-1/2 w-full xl:h-full h-auto xl:px-6 px-6 xl:py-9 py-6 bg-cblue-100"
						>
							<span class="mb-2 sub-titles-1">For your employees</span>
							<p class="mb-6">Employer</p>
							<div class="w-48">
								<c-button
									title="Sign Up for free"
									:secondary="true"
									:small="true"
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					class="lg:grid block grid-cols-4 text-white bg-razzmataz-pry mt-16 py-3"
				>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-4" src="/images/book-appointment.svg" alt="" />
						<span class="sub-titles-1">Book and manage appointments</span>
						<p class="mt-4">
							Schedule and manage appointments online and view details of past
							and upcoming appointments.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-4" src="/images/consultant.svg" alt="" />
						<span class="sub-titles-1">Consult your doctor </span>
						<p class="mt-4">
							Consult with your doctor from your comfort and enjoy timely and
							quality care.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-4" src="/images/carbon_medication.svg" alt="" />
						<span class="sub-titles-1">Medications</span>
						<p class="mt-4">
							View past and current medications and request a medication refill
							instantly.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-4" src="/images/carbon_result.svg" alt="" />
						<span class="sub-titles-1">Lab test </span>
						<p class="mt-4">
							Frequent lab visits are so old school. Access your diagnostic
							results, accompanying doctor's notes InApp.
						</p>
					</div>
				</div>
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
					<div
						class="flex md:flex-row flex-col md:items-center items-end gap-5"
					>
						<h4 class="md:block hidden">4. Manage your health records</h4>
						<h4 class="md:hidden block">4. Access records</h4>
						<img
							src="/images/plus-circle.svg"
							class="md:w-10 w-7 md:h-10 h-7"
							alt=""
						/>
					</div>
				</div>

				<img
					class="col-span-2 md:row-span-2 md:order-2 order-3"
					src="/images/img-center.svg"
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
						class="flex md:flex-row flex-col flex-col-reverse md:items-center items-start gap-5"
					>
						<img
							src="/images/plus-circle.svg"
							class="md:w-10 w-7 md:h-10 h-7"
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
						class="flex md:flex-row flex-col flex-col-reverse md:items-center items-end gap-5"
					>
						<h4 class="md:block hidden">3. Access Quality Care</h4>
						<h4 class="md:hidden block">3. Visit</h4>
						<img
							src="/images/plus-circle.svg"
							class="md:w-10 w-7 md:h-10 h-7"
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
					<div class="flex md:flex-row flex-col items-center gap-5">
						<img
							src="/images/plus-circle.svg"
							class="md:w-10 w-7 md:h-10 h-7"
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

			<div
				class="my-12 mx-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2"
			>
				<div
					v-for="(choice, index) in choices"
					:key="index"
					class="py-12 px-6 cursor-pointer choices"
				>
					<img class="mb-7" :src="choice.image" alt="" />
					<span class="sub-titles-1">{{ choice.title }}</span>
					<p class="mt-6">{{ choice.text }}</p>
				</div>
			</div>
		</div>

		<div class="text-center xl:w-1/2 lg:w-2/3 w-9/12 mx-auto mt-9 pt-20 mb-32">
			<h2 class="c-indigo mb-4">Take charge of your health, today.</h2>
			<p class="mb-4">
				Sign Up to the CornieCare App and enjoy better healthcare outcomes.
				Engage with doctors, shop medicines, book diagnostic tests, available
				24/7
			</p>
			<div class="flex items-center justify-center gap-6 mb-14">
				<div class="w-auto">
					<c-button
						title="Get started for free"
						:secondary="true"
						:small="true"
					/>
				</div>
				<div class="w-auto">
					<c-button title="Contact us" :primary="true" :small="true" />
				</div>
			</div>
			<span class="sub-titles-1">Coming soon to your mobile Apps.</span>
			<div class="mt-8 flex items-center justify-center gap-6">
				<div class="xl:w-52 w-40">
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
import Vue from "vue"
// import { Component } from "vue-property-decorator";
import CButton from "../components/CButton.vue"
import { choices } from "../plugins/choices"
import IndexHeader from "../components/IndexHeader.vue"
export default Vue.extend({
  name: "IndexPage",
  components: {
    CButton,
    IndexHeader,
  },
  data() {
    return {
      choices,
    }
  },
})
</script>

<style scoped>
.circ-grid {
  display: grid;
  grid-template-rows: 2 (0, 1fr);
  grid-template-columns: 4 (0, 1fr);
}
.choices:hover {
  color: #fff;
  background: #fe4d3c;
  border-radius: 8px;
}

@media screen and (max-width: 600px) {
  .circ-grid {
    grid-template-rows: 3 (0, 25%, 50%, 25%);
    grid-template-columns: 4 (0, 1fr);
  }
}
</style>
