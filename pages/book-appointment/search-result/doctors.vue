<template>
  <div>
    <dropdowns-doctors-area />

    <div
      class="info-container xl:p-6 p-4 w-full flex xl:flex-row flex-col items-start mb-12"
    >
      <div
        class="xl:w-4/12 w-full xl:border-r xl:border-b-0 border-b xl:pb-0 pb-8"
      >
        <div class="flex items-center">
          <img class="mr-4" src="/images/book-appointment/Avatar.png" alt="" />
          <div class="">
            <h3 class="mr-4">Dr. Sarah Smith | F</h3>
            <img src="/images/book-appointment/ratings.png" alt="" />
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-x-8 xl:gap-y-8 gap-y-6">
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
              src="/images/book-appointment/science_black_24dp 1.png"
              alt=""
            />
            <div>
              <p class="mr-2">Mk Labs</p>
            </div>
          </div>

          <div class="flex items-start">
            <img
              class="mr-2"
              src="/images/book-appointment/icon-location-white.png"
              alt=""
            />
            <div>
              <p class="mr-2">234 Admiralty Way Lekki, Lagos</p>
            </div>
          </div>

          <div class="flex items-start">
            <img
              class="mr-2"
              src="/images/book-appointment/icon-phone-white.png"
              alt=""
            />
            <div>
              <p class="mr-2">+234 813 563 8883</p>
            </div>
          </div>

          <div class="flex items-start">
            <img
              class="mr-2"
              src="/images/book-appointment/icon-date-white.png"
              alt=""
            />
            <div>
              <p class="mr-2">20 Years Experience</p>
            </div>
          </div>

          <div class="flex items-start">
            <img
              class="mr-2"
              src="/images/book-appointment/Icon-fee-white.png"
              alt=""
            />
            <div>
              <p class="mr-2">Consultation Fee starts from ₦ 20,000</p>
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
        </div>
      </div>

      <div class="xl:w-8/12 w-full xl:pl-6 xl:mt-0 mt-8">
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
            @click="$router.push({ path: '/book-appointment/doctor-profile' })"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters, mapMutations } from "vuex"
import { Component, Vue } from "nuxt-property-decorator"
import DropdownsDoctorsArea from "~/components/DropdownsDoctorsArea.vue"

import { namespace } from "vuex-class"

const appointment = namespace("appointment")
@Component({
  components: {
    DropdownsDoctorsArea,
  },
})
export default class DoctorsPage extends Vue {
  selectedDate: string = "Wed, 24 Nov"
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []

  @appointment.Mutation
  SET_SELECTEDDATE!: (data: any) => void

  @appointment.Mutation
  SET_SELECTEDTIME!: (data: any) => void

  handleDate(val: any) {
    this.selectedDate = val
    this.SET_SELECTEDDATE(val.date)
  }

  handleTime(val: any) {
    this.selectedTime = val
    this.SET_SELECTEDTIME(val)
  }

  getAvailableDays() {
    return (this.availableDays = [
      { date: "Wed, 24 Nov", slot: "6 slots available" },
      { date: "Thur, 25 Nov", slot: "13 slots available" },
      { date: "Fri, 26 Nov", slot: "3 slots available" },
    ])
  }

  getAvailableTime() {
    return (this.availableTime = [
      "09:00",
      "10:00",
      "14:00",
      "21:00",
      "22:00",
      "24:00",
    ])
  }

  created() {
    this.getAvailableDays()
    this.getAvailableTime()
  }
}
</script>

<style scoped></style>
