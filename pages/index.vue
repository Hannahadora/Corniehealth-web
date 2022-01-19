<template>
	<div class>
		<TopNav />
		<IndexHeader class="mt-24" />
		<div class="mt-12 pt-14">
			<div class="text-center w-1/2 mx-auto">
				<h2 class="c-indigo">Actively manage your health</h2>
				<p>
					We empower you and your loved ones with secure access to your health
					records and the needed control to better manage your health
				</p>
			</div>
			<div class="c-wrapper mt-16 b-2">
				<div class="sub-sect-2 flex items-center justify-center mb-2 w-full">
					<div class="w-1/2 px-9 py-20 bg-cblue-100 h-full">
						<h2 class="mb-2">For you and your loved ones</h2>
						<p class="mb-6 font-bold">Private</p>
						<c-button
							title="Get started for free"
							:secondary="true"
							:small="true"
						/>
					</div>
					<img class="h-full w-1/2" src="/images/image 23.svg" alt="" />
				</div>
				<div
					class="
            flex
            items-start
            justify-center
            text-white
            bg-razzmataz-pry
            mt-16
            py-3
          "
				>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-6" src="/images/book-appointment.svg" alt="" />
						<span class="sub-titles-1">Book and manage appointments</span>
						<p>
							Schedule and manage appointments online and view details of past
							and upcoming appointments.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-6" src="/images/consultant.svg" alt="" />
						<span class="sub-titles-1 mb-6">Consult your doctor </span>
						<p>
							Consult with your doctor from your comfort and enjoy timely and
							quality care.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-6" src="/images/medications.svg" alt="" />
						<span class="sub-titles-1 mb-6">Medications</span>
						<p>
							View past and current medications and request a medication refill
							instantly.
						</p>
					</div>
					<div class="px-6 py-8 border-r border-white">
						<img class="mb-6" src="/images/lab-test.svg" alt="" />
						<span class="sub-titles-1 mb-6">Lab test </span>
						<p>
							Frequent lab visits are so old school. Access your diagnostic
							results, accompanying doctor's notes InApp.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-20">
			<div class="text-center w-1/2 mx-auto mb-2">
				<h2 class="c-indigo">How it works</h2>
				<p>
					Sign Up to the CornieCare App and enjoy better healthcare outcomes.
					Engage with doctors, shop medicines, book diagnostic tests, available
					24/7
				</p>
			</div>

			<div class="mt-24 mx-56 grid grid-rows-2 grid-cols-4 gap-x-3 gap-y-32">
				<div class="flex flex-col items-end justify-end">
					<img src="/images/Medical prescription-pana 1.svg" alt="" />
					<div class="flex items-center gap-5">
						<h4>4. Manage your health records</h4>
						<img src="/images/plus-circle.svg" alt="" />
					</div>
				</div>

				<img
					class="col-span-2 row-span-2"
					src="/images/img-center.svg"
					alt=""
				/>

				<div class="flex flex-col items-start justify-start">
					<div class="flex items-center gap-5">
						<img src="/images/plus-circle.svg" alt="" />
						<h4>1. Sign up</h4>
					</div>
					<img src="/images/Mobile login-pana.svg" alt="" />
				</div>

				<div class="flex flex-col items-center justify-end">
					<div class="flex items-center gap-5">
						<h4>3. Access Quality Care</h4>
						<img src="/images/plus-circle.svg" alt="" />
					</div>
					<img src="/images/Medical care-rafiki 1.svg" alt="" />
				</div>

				<div class="flex flex-col items-start justify-start">
					<div class="flex items-center gap-5">
						<img src="/images/plus-circle.svg" alt="" />
						<h4>2. Explore & Engage</h4>
					</div>
					<img src="/images/explore-engage.svg" alt="" />
				</div>
			</div>
		</div>

		<div class="c-wrapper mt-40">
			<div class="text-center w-1/2 mx-auto mb-6">
				<h2 class="c-indigo">It’s your health, make better choices</h2>
				<p>
					Sign Up to the CornieCare App and enjoy better healthcare outcomes.
					Engage with doctors, shop medicines, book diagnostic tests, available
					24/7
				</p>
			</div>

			<div class="my-12 mx-6 grid grid-cols-4 gap-2">
				<div
					v-for="(choice, index) in choices"
					:key="index"
					class="py-12 px-6"
					:class="{ 'bg-razzmataz-pry rounded-lg text-white': choice.active }"
				>
					<img class="mb-7" :src="choice.image" alt="" />
					<span class="sub-titles-1">{{ choice.title }}</span>
					<p class="mt-6">{{ choice.text }}</p>
				</div>
			</div>
		</div>

		<div class="text-center w-1/2 mx-auto mt-9 pt-20 mb-32">
			<h2 class="c-indigo mb-4">Take charge of your health, today.</h2>
			<p class="mb-4">
				Sign Up to the CornieCare App and enjoy better healthcare outcomes.
				Engage with doctors, shop medicines, book diagnostic tests, available
				24/7
			</p>
			<div class="flex items-center justify-center gap-6 mb-14">
				<c-button
					title="Get started for free"
					:secondary="true"
					:small="true"
				/>
				<c-button title="Contact us" :primary="true" :small="true" />
			</div>
			<span class="sub-titles-1">Coming soon to your mobile Apps.</span>
			<div class="mt-8 flex items-center justify-center gap-6">
				<img src="/images/Apple Store.svg" alt="" />
				<img src="/images/Gogle store.svg" alt="" />
			</div>
		</div>

		<CFooter />
	</div>
</template>

<script lang="ts">
import Vue from "vue"
// import { Component } from "vue-property-decorator";
import TopNav from "~/components/TopNav.vue"
import IndexHeader from "~/components/IndexHeader.vue"
import CButton from "~/components/CButton.vue"
import choices from "~/utils/choices.js"
import CFooter from "~/components/CFooter.vue"
export default Vue.extend({
  name: "IndexPage",
  components: {
    TopNav,
    IndexHeader,
    CButton,
    CFooter,
  },
  data() {
    return {
      choices,
    }
  },
})
</script>

<style scoped>
.sub-sect-2 {
  height: 310px;
}
</style>
