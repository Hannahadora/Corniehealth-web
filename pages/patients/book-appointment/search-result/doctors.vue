<template>
	<div>
		<dropdowns-doctors-area />

		<div v-if="availablePractitioners.length === 0">
			<h1 class="text-center mt-10">None found</h1>
		</div>

		<div class="w-full lg:grid grid-cols-2 block gap-8 items-start mb-12">
			<div
				v-for="practitioner in availablePractitioners"
				:key="practitioner.id"
				class="info-container xl:p-6 p-4 xl:mb-0 mb-8"
			>
				<div class="w-full xl:pb-0 pb-8">
					<div class="flex items-center">
						<img
							class="mr-4"
							src="/images/book-appointment/Avatar.png"
							alt=""
						/>
						<div class="">
							<h3 class="mr-4">
								Dr. {{ practitioner.firstName }} {{ practitioner.lastName }}
							</h3>
							<img src="/images/book-appointment/ratings.png" alt="" />
						</div>
					</div>

					<div class="mt-6 grid grid-cols-1 gap-4">
						<div class="flex items-start">
							<img
								class="mr-2"
								src="/images/book-appointment/icon-doctor-white.png"
								alt=""
							/>
							<div>
								<p class="mr-2">{{ practitioner.specialty }}</p>
							</div>
						</div>

						<div class="flex items-start">
							<img
								class="mr-2"
								src="/images/book-appointment/icon-doctor-white.png"
								alt=""
							/>
							<div>
								<p class="mr-2">Visit Type - {{ practitioner.visitType }}</p>
							</div>
						</div>

						<div class="flex items-start">
							<img
								class="mr-2"
								src="/images/book-appointment/icon-lang-white.png"
								alt=""
							/>
							<div>
								<p class="mr-2">English | Yoruba</p>
							</div>
						</div>

						<div class="flex items-start">
							<img
								class="mr-2"
								src="/images/book-appointment/Icon-fee-white.png"
								alt=""
							/>
							<div>
								<p class="mr-2">
									Consultation Fee - {{ practitioner.consultationRate }}
								</p>
							</div>
						</div>
					</div>

					<div
						class="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-6 mt-8"
					>
						<c-button
							type="button"
							class="xl:mr-6 xl:mb-0 mb-6 xl:w-1/2 w-full"
							:primary="true"
							small
							@click="viewProfile(practitioner)"
						>
							View profile
						</c-button>
						<c-button
							class="xl:w-1/2 w-full"
							type="button"
							:secondary="true"
							small
							@click="
								openAppointmentModal(practitioner)
								SET_MODALSTATE(true)
							"
						>
							Book Appointment
						</c-button>
					</div>
				</div>
			</div>

			<!-- <div class="info-container xl:p-6 p-4 xl:mb-0 mb-8">
        <div class="w-full xl:pb-0 pb-8">
          <div class="flex items-center">
            <img
              class="mr-4"
              src="/images/book-appointment/Avatar.png"
              alt=""
            />
            <div class="">
              <h3 class="mr-4">Dr. Sarah Smith | F</h3>
              <img src="/images/book-appointment/ratings.png" alt="" />
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-4">
            <div class="flex items-start">
              <img
                class="mr-2"
                src="/images/book-appointment/icon-doctor-white.png"
                alt=""
              />
              <div>
                <p class="mr-2">Dentist</p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="mr-2"
                src="/images/book-appointment/icon-doctor-white.png"
                alt=""
              />
              <div>
                <p class="mr-2">Visit Type - Hospital/Clinic</p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="mr-2"
                src="/images/book-appointment/icon-lang-white.png"
                alt=""
              />
              <div>
                <p class="mr-2">English | Yoruba</p>
              </div>
            </div>

            <div class="flex items-start">
              <img
                class="mr-2"
                src="/images/book-appointment/Icon-fee-white.png"
                alt=""
              />
              <div>
                <p class="mr-2">Consultation Fee - ₦ 20,000</p>
              </div>
            </div>
          </div>

          <div
            class="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-6 mt-8"
          >
            <c-button
              type="button"
              class="xl:mr-6 xl:mb-0 mb-6 xl:w-1/2 w-full"
              :primary="true"
              small
              @click="
                $router.push({
                  path: '/patients/book-appointment/doctor-profile',
                })
              "
            >
              View profile
            </c-button>
            <c-button
              class="xl:w-1/2 w-full"
              type="button"
              :secondary="true"
              small
              @click="
                $router.push({
                  path: '/patients/book-appointment/book-a-doctor/step1',
                })
              "
            >
              Book Appointment
            </c-button>
          </div>
        </div>
 -->
			<!-- <div class="xl:w-8/12 w-full xl:pl-6 xl:mt-0 mt-8">
          <div class="flex items-center justify-between">
            <span class="sub-titles-1 text-razzmataz-pry whitespace-nowrap"
              >Doctor’s Availability</span
            >

            <div class="flex items-center ap-card1 px-3 py-2">
              <img
                class="xl:mr-5 mr-2"
                src="/images/book-appointment/icon-date-black.png"
                alt=""
              />
              <span class="dmSans xl:block hidden mr-5">Nov 24 - Nov 26</span>
              <span class="dmSans xl:hidden block mr-2">Nov 24</span>
              <img src="/images/bx_bx-chevron-down.svg" alt="" />
            </div>
          </div>

          <div
            class="xl:flex block items-center justify-between mt-8 xl:overflow-x-hidden overflow-x-scroll"
          >
            <div
              v-for="(day, index) in availableDays"
              :key="index"
              class="text-center ap-card px-12 py-2 xl:w-auto w-full"
              :class="{ 'ap-card-active': selectedDate === day.date }"
              @click="handleDate(day)"
            >
              <span class="sub-titles-2">{{ day.date }}</span
              ><br />
              <span class="text-grey-blue mt-2">{{ day.slot }}</span>
            </div>
          </div>

          <div
            class="grid xl:grid-cols-6 grid-cols-3 gap-6 items-center justify-between mt-6"
          >
            <div
              v-for="(time, index) in availableTime"
              :key="index"
              class="time-card xl:px-8 px-6 py-2"
              :class="{ 'time-card-active': selectedTime === time }"
              @click="handleTime(time)"
            >
              <span class="">{{ time }}</span>
            </div>
          </div>

		   <div
            class="flex xl:flex-row flex-col items-center xl:justify-end justify-center xl:mt-32 mt-8"
          >
            <c-button
              type="button"
              class="xl:mr-2 xl:mb-0 mb-6 xl:w-auto w-full"
              :primary="true"
              small
              @click="
                $router.push({ path: '/book-appointment/doctor-profile' })
              "
            >
              View profile
            </c-button>
            <c-button
              class="xl:w-auto w-full"
              type="button"
              :secondary="true"
              small
              @click="
                $router.push({ path: '/book-appointment/book-a-doctor/step1' })
              "
            >
              Book Appointment
            </c-button>
          </div>
        </div> -->
			<!-- </div> -->
		</div>

		<cornie-modal :model-value="show" center class="w-full h-full">
			<appointment-modal
				:id="practitionerId"
				@close="show = false"
			/>
		</cornie-modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import DropdownsDoctorsArea from "~/components/DropdownsDoctorsArea.vue"
import ModalComponent from "~/components/ModalComponent.vue"
import CornieModal from "~/components/CornieModal.vue"
import AppointmentModal from "~/components/AppointmentModal.vue"

const appointment = namespace("appointment")
const practitioners = namespace("practitioners")
const misc = namespace("misc")
@Component({
  components: {
    DropdownsDoctorsArea,
    ModalComponent,
    CornieModal,
    AppointmentModal
  },
})
export default class DoctorsPage extends Vue {
  selectedDate: string = "Wed, 24 Nov"
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []
  appointmentModal: boolean = false
  availablePractitioners = []
  practitionerId = ""
  show = false

  @appointment.Mutation
    SET_SELECTEDDATE!: (data: any) => void

  @misc.Mutation
    SET_MODALSTATE!: (data: any) => void

  @appointment.Mutation
    SET_SELECTEDTIME!: (data: any) => void

  @practitioners.Getter
    getRelatedPractitioners!: []

  handleDate(val: any) {
    this.selectedDate = val.date
    this.SET_SELECTEDDATE(val.date)
  }

  handleTime(val: any) {
    this.selectedTime = val
    this.SET_SELECTEDTIME(val)
  }

  
  viewProfile(practitioner: any) {
    this.$router.push(`/patients/doctor/${practitioner.id}/profile`)
  }

  openAppointmentModal(practitioner: any) {
    this.show = true
    this.practitionerId = practitioner.id
  }

  created() {
    this.availablePractitioners = this.getRelatedPractitioners
  }
}
</script>

<style scoped>
.ap-card-active {
  background: #f0f4fe;
  border: 1px solid #080056;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}
</style>
