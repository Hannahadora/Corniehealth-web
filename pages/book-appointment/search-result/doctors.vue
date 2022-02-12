<template>
  <div>
    <div
      class="grid xl:grid-cols-8 grid-cols-2 items-center justify-between mb-12"
    >
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Doctors"
        icon="/images/book-appointment/icon-doctor-grey.png"
        :options="specialty"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Location"
        icon="/images/book-appointment/icon-location-grey.png"
        :options="location"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Hospital"
        icon="/images/book-appointment/icon-hospital-grey.png"
        :options="hospital"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Experience"
        icon="/images/book-appointment/icon-experience-grey.png"
        :options="experience"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Visit Type"
        icon="/images/book-appointment/icon-visit-grey.png"
        :options="visitType"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Insurance"
        icon="/images/book-appointment/icon-insurance-grey.png"
        :options="insurance"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Language"
        icon="/images/book-appointment/icon-lang-grey.png"
        :options="language"
      />
      <select-dropdown
        class="xl:mr-0 mr-6"
        head-text="Gender"
        icon="/images/book-appointment/icon-gender-grey.png"
        :options="gender"
      />
    </div>

    <div
      class="info-container xl:p-6 p-4 w-full flex xl:flex-row flex-col items-start mb-12"
    >
      <div class="xl:w-4/12 w-full xl:border-r border-b xl:pb-0 pb-8">
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
            :class="{ 'ap-card-active': selectedDate === day }"
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
            @click="$router.push({ path: '/book-appointment/profile' })"
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
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class DoctorsPage extends Vue {
  specialty: Array<any> = [
    "All",
    "Dentists",
    "ENT",
    "General Practice",
    "Obstetricians & Gynecologists",
    "Pedriatricians",
    "Urologist",
  ]

  location: Array<any> = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Delta",
    "Kwara",
    "Ibadan",
    "Calabar",
    "Benin",
  ]

  hospital: Array<any> = [
    "All",
    "Blue Cross Hospital",
    "Eko Hospital",
    "Evercare Hospital",
    "Lagoon Hospital",
    "Good Times",
    "Blue Foundation",
    "New Times",
  ]

  experience: Array<any> = [
    "All",
    "1-5 years",
    "6-10 years",
    "11-15 years",
    "16-20 years",
  ]

  visitType: Array<any> = [
    "All",
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ]

  insurance: Array<any> = [
    "All",
    "1-5 years",
    "6-10 years",
    "11-15 years",
    "16-20 years",
  ]

  language: Array<any> = ["All", "English", "Yoruba", "Igbo", "Hausa"]
  gender: Array<any> = ["All", "Male", "Female"]
  selectedDate: string = ""
  selectedTime: string = ""
  availableDays: Array<any> = []
  availableTime: Array<any> = []

  handleDate(val: any) {
    this.selectedDate = val
  }
  handleTime(val: any) {
    this.selectedTime = val
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
{

<style scoped>

</style>
