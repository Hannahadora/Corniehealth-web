<template>
  <div class="c-wrapper bg-white">
    <div class="mb-9 flex items-center justify-between py-24">
    <div class="w-1/2">
      <img src="/images/providers/Device-Macbook pro.svg" alt="" />
    </div>
    <div class="w-1/2">
      <div class="flex items-center gap-2 mb-4">
        <img class="lg:block hidden" src="/images/good health.svg" alt="" />
        <p>Stay proactive and delight your patients.</p>
      </div>
      <h2 class="c-indigo mb-8">Stay proactive and delight your patients.</h2>
      <p class="mb-8">
        Leverage our experience dashboard to manage and track patients along
        their care journeys. View visit timelines to identify and unblock
        delays, drive operational efficiency, provide timely care, and deliver a
        superior patient experience.
      </p>

      <div class="flex items-center gap-4 mb-4">
        <img src="/images/checkmark.svg" alt="" />
        <p>Scheduling & online appointment booking.</p>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <img src="/images/checkmark.svg" alt="" />
        <p>Visit check-ins and check-outs.</p>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <img src="/images/checkmark.svg" alt="" />
        <p>
          Electronic request management (Referral, medication & diagnostics).
        </p>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <img src="/images/checkmark.svg" alt="" />
        <p>Better patient engagement.</p>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <img src="/images/checkmark.svg" alt="" />
        <p>Streamlined payment collections.</p>
      </div>
      <div class="mt-8">
        <c-button title="Discover More" secondary small />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CButton from '../CButton.vue'
export default Vue.extend({
  components: { CButton },
    name: 'PatientExperience'
})
</script>
