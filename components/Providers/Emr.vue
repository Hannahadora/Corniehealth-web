<template>
  <div class="bg-cblue-100 c-wrapper">
    <div class="mb-9 flex items-center justify-between py-24">
      <div class="w-1/2">
        <div class="flex items-center gap-2 mb-4">
          <img class="lg:block hidden" src="/images/good health.svg" alt="" />
          <p>Chart your way to better care delivery.</p>
        </div>
        <h2 class="c-indigo mb-8">
          Integrated Electronic Medical/Health Records (EMR/EHR)
        </h2>
        <p class="mb-8">
          Create clear, concise, and comprehensive patient documentation,
          easy-to-use and fast, with inbuilt SNOMED-CT, ICD-11, and LOINC codes
          to standardize your documentation.
        </p>

        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>EMR/EHR mode support.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Cloud-based and mobile enabled.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Authenticated access control.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Medication catalogue, powered by EMDEX API.</p>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <img src="/images/checkmark.svg" alt="" />
          <p>Electronic request management.</p>
        </div>
        <div class="mt-8">
          <c-button title="Discover More" secondary small />
        </div>
      </div>

      <div class="w-1/2">
        <img src="/images/providers/Device-Macbook pro (1).svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  components: { CButton },
  name: "Emr",
})
</script>
