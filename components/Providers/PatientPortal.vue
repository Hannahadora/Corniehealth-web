<template>
  <div class="c-wrapper bg-white">
    <div class="mb-9 flex items-center justify-between py-24">
      <div class="w-1/2">
        <img src="/images/providers/Group 11649.svg" alt="" />
      </div>
      <div class="w-1/2">
        <div class="flex items-center gap-2 mb-4">
          <img class="lg:block hidden" src="/images/good health.svg" alt="" />
          <p>Instant access to your patients.</p>
        </div>
        <h2 class="c-indigo mb-8">Patient Portal</h2>
        <p class="mb-8">
          Connect with patients securely through the CornieCare App and
          encourage active patient engagement: online appointments booking,
          self-enrollment, self-check-ins, remote consultations, questionnaire
          responses, patient-initiated tests, refill requests, ratings, and
          more.
        </p>

        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Paperless patient self-enrollment.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Online appointment booking.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Fast, contactless payment processing.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Instant engagement, from anywhere.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Refill requests.</p>
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
  name: "PatientPortal",
})
</script>
