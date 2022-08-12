<template>
	<div class="w-full xl:my-16 my-14">
		<div class="c-wrapper xl:mt-40 mt-16">
			<back-btn />
			<div class="info-container px-6 pt-6 pb-7">
				<div class="flex items-center">
					<img
						class="mr-4 w-20 h-20 rounded-full"
						:src="practitioner.photo"
						alt=""
					/>
					<div class="w-11/12 flex justify-between">
						<div class="xl:flex block items-center">
							<h3 class="mr-4">
								{{ practitioner && practitioner.name }}
							</h3>
							<!-- <img
							:src="`/images/ratings/${practitioner.rating}star.svg`"
							alt=""
						/> -->
						</div>

						<div class="flex items-center justify-end">
							<c-button
								class=""
								type="button"
								:secondary="true"
								small
								@click="openAppointmentModal"
							>
								Book Appointment
							</c-button>
						</div>
					</div>
				</div>

				<div class="mt-8 xl:grid block grid-cols-4 gap-x-8 gap-y-8">
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
							<p class="text-grey-blue mr-2">
								{{ practitioner && practitioner.specialization }}
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
							>Clinical Experience</span
							>
							<p class="text-grey-blue mr-2">
								{{ practitioner && practitioner.clinicalExperienceInMonths }}
								Years
							</p>
						</div>
					</div>

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
								<span class="text-grey-blue mr-2"><u></u></span> ₦
								{{ practitioner && practitioner.consultationFeePerHour }}
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
							<span class="sub-titles-2 text-black-xiketic capitalize mb-2"
							>Active Since</span
							>
							<p
								v-if="practitioner && practitioner.activeSince"
								class="text-grey-blue mr-2"
							>
								{{ formatDate(practitioner.activeSince) }}
							</p>
						</div>
					</div>

					<div class="flex items-start xl:mb-0 mb-6">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (3).png"
							alt=""
						/>
						<!-- <div>
							<span class="sub-titles-2 text-black-xiketic mb-2"
							>Patient Reviews</span
							>
							<p class="text-grey-blue">
								<span class="ml-4 text-razzmataz-pry">View</span>
							</p>
						</div> -->
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
							<p class="text-grey-blue mr-2">
								{{ practitioner && practitioner.phone }}
							</p>
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
							<p class="text-grey-blue capitalize mr-2">
								{{ practitioner && practitioner.email }}
							</p>
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
							<p class="text-grey-blue capitalize mr-2">
								{{ practitioner && practitioner.address }}
							</p>
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
					<basic-info :practitioner="practitioner"></basic-info>
				</div>
				<!-- <div v-if="activeTab === 'Reviews'">
					<reviews :practitioner="practitioner"></reviews>
				</div> -->
				<!-- <div v-if="activeTab === 'Insurance'">
					<insurance :practioner="practitioner" />
				</div> -->
			</div>
		</div>

		<cornie-modal :model-value="show" center class="w-full h-full">
			<appointment-modal
				:id="practitioner.id"
				@close="show = false"
			/>
		</cornie-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import BasicInfo from "@/components/BookAppointment/Profile/BasicInfo.vue"
import Insurance from "@/components/BookAppointment/Profile/Insurance.vue"
import Reviews from "@/components/BookAppointment/Profile/Reviews.vue"
import BackBtn from "~/components/BackBtn.vue"
import CButton from "~/components/CButton.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"

const practitioners = namespace("practitioners")
@Component({
  components: {
    BasicInfo,
    Reviews,
    Insurance,
    BackBtn,
    CButton,
    CornieModal,
    AppointmentModal,
  },
  layout: "book-appointment",
})
export default class ProfileDetails extends Vue {
  activeTab: string = "Basic"
  tabs: Array<any> = ["Basic"]
  show = false;

  practitioner = <any>{}

  @practitioners.Getter
    selectedPractitioner!: {}

  @practitioners.Getter
    getInitPractitionerData!: {}

  handleActiveTab(tab: any) {
    this.activeTab = tab
  }

  formatDate(date: any) {
    return new Date(date).toLocaleString("en-US")
  }

  async created() {
    await this.$store.dispatch(
      "practitioners/getAPractitionerProfile",
      this.$route.params.id
    )
    this.practitioner = {
      ...this.selectedPractitioner,
      //   ...this.getInitPractitionerData,
    }
  }

  openAppointmentModal() {
    this.show = true
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
