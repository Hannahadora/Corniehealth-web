<template>
  <div class="bg-cblue-100 c-wrapper">
    <div class="mb-9 flex items-center justify-between py-24">
      <div class="w-1/2">
        <div class="flex items-center gap-2 mb-4">
          <img class="lg:block hidden" src="/images/good health.svg" alt="" />
          <p>See what works.</p>
        </div>
        <h2 class="c-indigo mb-8">Analytics & Business Intelligence</h2>
        <p class="mb-8">
          Get detailed performance reports to understand what works and what
          doesn’t. Filter operational data by practice, location, specialty,
          period, and account to get specific performance data.
        </p>

        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Demographics.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Registrations and visits.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Conditions/diseases.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Electronic requests.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Billing and account receivables etc.</p>
        </div>
        <div class="mt-8">
          <c-button title="Discover More" secondary small />
        </div>
      </div>

      <div class="w-1/2">
        <img src="/images/providers/Group 11650.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  components: { CButton },
  name: "AnBIntelliegence",
})
</script>
