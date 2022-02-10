<template>
  <div>
    <div class="text-center">
      <h4 class="mt-12">Have you booked with this practitioner in the past?</h4>
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
        @click="$emit('continue')"
      >
        Continue
      </c-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton },
  layout: "Question1",
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
