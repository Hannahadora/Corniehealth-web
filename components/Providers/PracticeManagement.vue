<template>
  <div class="c-wrapper bg-white">
    <div class="mb-9 flex items-center justify-between py-24">
      <div class="w-1/2">
        <img src="/images/providers/Group 11648.svg" alt="" />
      </div>
      <div class="w-1/2">
        <div class="flex items-center gap-2 mb-4">
          <img class="lg:block hidden" src="/images/good health.svg" alt="" />
          <p>Full-circle practice management.</p>
        </div>
        <h2 class="c-indigo mb-8">Practice Management</h2>
        <p class="mb-8">
          Scheduling, online appointment booking, e-requests, self-enrollment,
          forms, questionnaires, refill management, patient-initiated testing,
          and a HIPAA-compliant patient portal for ongoing engagement.
        </p>

        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Increase online visibility and reach.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Online booking from your websites or from Cornie health.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Engage, gain, and retain patients</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Healthcare information exchange</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Create and manage loyalty groups and promotions.</p>
        </div>
        <div class="mt-8">
          <c-button title="Discover More" secondary small />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  components: { CButton },
  name: "PracticeManagement",
})
</script>
