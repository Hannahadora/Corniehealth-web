<template>
  <div class="c-wrapper">
    <div class="mx-auto w-full">
      <div class="flex flex-col items-center justify-center text-center">
        <img
          src="/images/book-appointment/unsplash_gkZ-k3xf25w (1).png"
          alt=""
        />
      </div>

      <div class="block text-center my-4">
        <h3 class="mt-4 c-indigo">Dr. Mike Obi | M</h3>

        <span class="text-grey-blue mt-2">Mikeobi@reddington.com</span><br />

        <div class="mt-4">24, November 2021 | 14:00</div>

        <h4 class="mt-12">
          Have you booked with this practitioner in the past?
        </h4>
      </div>

      <div class="flex items-center justify-between mt-8">
        <div class="text-center ap-card px-12 py-2">
          <span class="sub-titles-2">Wed, 24 Nov</span><br />
          <span class="text-grey-blue mt-2">6 slots available</span>
        </div>
        <div class="text-center px-12 py-2">
          <span class="sub-titles-2">Thurs, 24 Nov</span><br />
          <span class="text-grey-blue mt-2">13 slots available</span>
        </div>
        <div class="text-center px-12 py-2">
          <span class="sub-titles-2">Fri, 24 Nov</span><br />
          <span class="text-grey-blue mt-2">3 slots available</span>
        </div>
      </div>

      <div class="flex items-center justify-between mt-6">
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">09:00</span>
        </div>
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">10:00</span>
        </div>
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">14:00</span>
        </div>
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">21:00</span>
        </div>
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">22:00</span>
        </div>
        <div class="time-card mr-6 px-8 py-2">
          <span class="text-grey-blue">24:00</span>
        </div>
      </div>

      <div class="mt-12">
        <c-button
          class="w-full"
          type="button"
          :secondary="true"
          small
          @click="$router.push({ path: '/book-appointment/' })"
        >
          Continue
        </c-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton },
  layout: "book-appointment",
})
export default class BookDoctorPage extends Vue {}
</script>

<style scoped>
.ap-card {
  background: #f0f4fe;
  border: 0.5px solid #c2c7d6;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.time-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
