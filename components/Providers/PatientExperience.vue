<template>
  <div class="c-wrapper bg-white relative">
    <div
      class="mb-9 flex xl:flex-row flex-col items-center justify-between gap-9 py-24"
    >
      <div class="xl:w-1/2 w-full flex items-center justify-center">
        <img src="/images/providers/Device-Macbook pro.svg" alt="" />
      </div>
      <div class="xl:w-1/2 w-full">
        <div
          class="flex items-center xl:justify-start justify-center gap-2 mb-4"
        >
          <img class="xl:block hidden" src="/images/good health.svg" alt="" />
          <p>Stay proactive and delight your patients.</p>
        </div>
        <h2 class="c-indigo mb-8 xl:text-left text-center">
          Patient Experience
        </h2>
        <p class="mb-8 xl:text-left text-center">
          Leverage our experience dashboard to manage and track patients along
          their care journeys. View visit timelines to identify and unblock
          delays, drive operational efficiency, provide timely care, and deliver
          a superior patient experience.
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
  name: "PatientExperience",
  components: { CButton },
})
</script>
