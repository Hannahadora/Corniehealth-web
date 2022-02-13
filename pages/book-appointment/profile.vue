<template>
	<div class="w-full xl:mt-16 mt-14">
		<div class="c-wrapper xl:mt-40 mt-16">
			<div class="info-container px-6 pt-6 pb-7">
				<div class="flex items-center">
					<img class="mr-4" src="/images/book-appointment/Avatar.png" alt="" />
					<div class="xl:flex block items-center">
						<h3 class="mr-4">Dr. Sarah Smith | F</h3>
						<img src="/images/book-appointment/ratings.png" alt="" />
					</div>
				</div>

				<div class="flex items-start xl:mb-0 mb-6">
					<img
						class="mr-2"
						src="/images/book-appointment/icon-doctor-white.png"
						alt=""
					/>
					<div>
						<span class="sub-titles-2 text-black-xiketic mb-2"
						>Specialization</span
						>
						<p class="text-grey-blue mr-2">Dentist</p>
					</div>
				</div>

				<div class="flex items-start xl:mb-0 mb-6">
					<img
						class="mr-2"
						src="/images/book-appointment/icon-date-white.png"
						alt=""
					/>
					<div>
						<span class="sub-titles-2 text-black-xiketic mb-2"
						>Clinical Experience</span
						>
						<p class="text-grey-blue mr-2">20 Years</p>
					</div>
				</div>

				<div class="mt-8 xl:grid block grid-cols-4 gap-x-8 gap-y-8">
					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/Icon-fee-white.png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2"
							>Consultation Fee</span
							>
							<p>
								<span class="text-grey-blue mr-2"><u>₦ 34,500</u></span> ₦
								20,500
							</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-date-white.png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2"
							>Active Since</span
							>
							<p class="text-grey-blue mr-2">1st May 2021</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (3).png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2"
							>Patient Reviews</span
							>
							<p class="text-grey-blue">
								1st May 2021<span class="ml-4 text-razzmataz-pry">View</span>
							</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-phone-white.png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2"
							>Phone Number</span
							>
							<p class="text-grey-blue mr-2">+234 813 563 8883</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-mail-white.png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2">Email</span>
							<p class="text-grey-blue mr-2">Mikeobi@reddington.com</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-location-white.png"
							alt=""
						/>
						<div>
							<span class="sub-titles-2 text-black-xiketic mb-2">Address</span>
							<p class="text-grey-blue mr-2">234 Admiralty Way Lekki, Lagos</p>
						</div>
					</div>
				</div>
			</div>

			<p class="sub-titles-3 text-center text-razzmataz-pry mt-9 mb-14">
				View address in map
			</p>

			<div class="info-container p-6">
				<ul class="flex items-center border-b mb-8">
					<li
						v-for="(tab, index) in tabs"
						:key="index"
						:class="{ 'active-tab': activeTab === tab }"
						class="py-2 px-4 text-grey-blue cursor-pointer"
						@click="handleActiveTab(tab)"
					>
						{{ tab }}
					</li>
				</ul>

				<div v-if="activeTab === 'Basic'">
					<basic-info />
				</div>
				<div v-if="activeTab === 'Reviews'">
					<reviews />
				</div>
				<div v-if="activeTab === 'Insurance'">
					<insurance />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import BasicInfo from "../../components/BookAppointment/Profile/BasicInfo.vue"
import Insurance from "../../components/BookAppointment/Profile/Insurance.vue"
import Reviews from "../../components/BookAppointment/Profile/Reviews.vue"
@Component({
  components: { BasicInfo, Reviews, Insurance },
  layout: "book-appointment",
})
export default class ProfileDetails extends Vue {
  activeTab: string = "Basic"
  tabs: Array<any> = ["Basic", "Reviews", "Insurance"]

  handleActiveTab(tab: any) {
    this.activeTab = tab
  }
}
</script>

<style scoped>
.active-tab {
  border-bottom: 4px solid #fe4d3c;
  font-weight: 600;
  color: #14171f;
}
</style>
