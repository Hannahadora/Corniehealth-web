<template>
  <div class="c-wrapper bg-white">
    <div class="mb-9 flex items-center justify-between py-24">
      <div class="w-1/2">
        <img src="/images/providers/Group 11651.svg" alt="" />
      </div>
      <div class="w-1/2">
        <h2 class="c-indigo mb-8">Data Protection and Security</h2>
        <p class="mb-8">
          We are HIPAA and NDPR compliant and offer network traffic encryption
          to properly secure patients’ data.
        </p>

        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>2-factor authentication enabled.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Permission-based access.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Access controlled health records.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Audits logs.</p>
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
  name: "DataProtection",
})
</script>
