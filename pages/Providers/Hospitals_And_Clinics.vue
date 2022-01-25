<template>
  <div>
    <top-nav />
    <div class="c-wrapper mt-28 mb-20 flex items-center gap-14">
      <div class="w-1/2">
        <div class="flex items-center gap-2">
          <img class="lg:block hidden" src="/images/good health.svg" alt="" />
          <p>Your connected Healthcare Practice Management System.</p>
        </div>
        <h1 class="c-indigo mt-3">Hospitals and Clinics</h1>
        <p class="mt-4">
          We empower your team with tools and resources to efficiently run your
          healthcare operation, deliver superior patient experience, connect
          with third-party providers, and patients for better care coordination.
        </p>
        <div class="mt-12 flex items-center gap-6">
          <c-button title="Get started for free" secondary small />
          <c-button title="View Demo" primary small />
        </div>
      </div>
      <div class="w-1/2">
        <img src="/images/providers/image 22.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "~/components/CButton.vue"
import TopNav from "~/components/TopNav.vue"
export default Vue.extend({
  components: { TopNav, CButton },
  name: "Hospitals_and_Clinics",
})
</script>

<style></style>
