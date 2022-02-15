<template>
  <div class="w-full xl:mt-16 mt-14">
    <div class="c-wrapper xl:mt-40 mt-16">
      <div class="info-container px-6 pt-6 pb-7">
        <div class="flex items-center">
          <img
            class="mr-4"
            src="/images/book-appointment/unsplash_gkZ-k3xf25w.png"
            alt=""
          />
          <div class="xl:flex block items-center">
            <h3 class="mr-4">Reddington Hospital</h3>
          </div>
        </div>

        <div class="mt-8 xl:grid block grid-cols-4 gap-x-8 gap-y-8">
          <div class="flex items-start xl:mb-0 mb-6">
            <img
              class="mr-2"
              src="/images/book-appointment/icon-sethos-white.png"
              alt=""
            />
            <div>
              <span class="sub-titles-2 text-black-xiketic mb-2">Doctors</span>
              <p class="text-grey-blue mr-2">18</p>
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
                >Patients Seen</span
              >
              <p class="text-grey-blue mr-2">24</p>
            </div>
          </div>

          <div class="flex items-start xl:mb-0 mb-6">
            <img
              class="mr-2"
              src="/images/book-appointment/Icon-date-white.png"
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
              src="/images/book-appointment/icon-star-white.png"
              alt=""
            />
            <div>
              <span class="sub-titles-2 text-black-xiketic mb-2"
                >Hospital Rating</span
              >
              <p class="text-grey-blue mr-2">
                <img
                  class="mr-2"
                  src="/images/book-appointment/ratings.png"
                  alt=""
                />
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
              <p class="text-grey-blue">+234 813 563 8883</p>
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
              src="/images/book-appointment/icon-lang-white.png"
              alt=""
            />
            <div>
              <span class="sub-titles-2 text-black-xiketic mb-2">Website</span>
              <p class="text-grey-blue mr-2">www.reddington.com.ng</p>
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

        <div v-if="activeTab === 'Specialties'">
          <hospital-specialties />
        </div>
        <div v-if="activeTab === 'Doctors'">
          <doctor-info />
        </div>
        <div v-if="activeTab === 'Insurance'"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import DoctorInfo from "../../components/BookAppointment/Profile/DoctorInfo.vue"
import HospitalSpecialties from "../../components/BookAppointment/Profile/HospitalSpecialties.vue"
@Component({
  components: { DoctorInfo, HospitalSpecialties },
  layout: "book-appointment",
})
export default class ProfileDetails extends Vue {
  activeTab: string = "Specialties"
  tabs: Array<any> = ["Specialties", "Doctors", "Insurance"]

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
