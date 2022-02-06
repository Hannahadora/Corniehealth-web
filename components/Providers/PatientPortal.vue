<template>
  <div class="c-wrapper bg-white relative">
    <div
      class="mb-9 flex xl:flex-row flex-col items-center justify-between py-24"
    >
      <div class="xl:mr-9 xl:mb-0 mb-9 xl:w-1/2 w-full flex items-center justify-center">
        <img src="/images/providers/Group 11649.svg" alt="" />
      </div>
      <div class="xl:w-1/2 w-full">
        <div class="flex items-center xl:justify-start justify-center mb-4">
          <img
            class="xl:block hidden mr-2"
            src="/images/good health.svg"
            alt=""
          />
          <p>Instant access to your patients.</p>
        </div>
        <h2 class="c-indigo mb-8 xl:text-left text-center">Patient Portal</h2>
        <p class="mb-8 xl:text-left text-center">
          Connect with patients securely through the CornieCare App and
          encourage active patient engagement: online appointments booking,
          self-enrollment, self-check-ins, remote consultations, questionnaire
          responses, patient-initiated tests, refill requests, ratings, and
          more.
        </p>

        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Paperless patient self-enrollment.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Online appointment booking.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Fast, contactless payment processing.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Instant engagement, from anywhere.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Refill requests.</p>
        </div>
        <div class="mt-8">
          <c-button type="button" title="Discover More" secondary small />
        </div>
      </div>
    </div>

    <img
      class="xl:block hidden absolute bottom-24 left-6"
      src="/images/providers/img.svg"
      alt=""
    />
    <img
      class="xl:hidden block absolute bottom-24 left-2"
      src="/images/providers/img (1).svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "PatientPortal",
  components: { CButton },
})
</script>
