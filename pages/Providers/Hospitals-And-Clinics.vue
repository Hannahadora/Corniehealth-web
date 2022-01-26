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

    <div class="c-wrapper bg-white">
      <div class="px-4 py-8 c-shadow">
        <div class="flex items-start gap-6">
          <div class="bg-cblue-100 p-6">
            <div class="flex gap-4">
              <img src="/images/dd-icons/carbon_location-company.svg" alt="" />
              <p>Multi-location/facility enabled.</p>
            </div>
            <div class="mt-6 flex gap-4">
              <img src="/images/dd-icons/carbon_document.svg" alt="" />
              <p>
                Electronic requests (referral, prescription, and diagnostic).
              </p>
            </div>
            <div class="mt-6 flex gap-4">
              <img
                src="/images/dd-icons/carbon_inventory-management.svg"
                alt=""
              />
              <p>Catalogue and inventory management.</p>
            </div>
          </div>

          <div class="bg-cblue-100 p-6">
            <div class="flex gap-4">
              <img
                src="/images/dd-icons/icon-park-outline_medical-box.svg"
                alt=""
              />
              <p>Standards-based Medical coding (SNOMED-CT, ICD-11, LOINC).</p>
            </div>
            <div class="mt-6 flex gap-4">
              <img
                src="/images/dd-icons/fluent_form-new-48-regular.svg"
                alt=""
              />
              <p>Customizable forms and questionnaires.</p>
            </div>
            <div class="mt-6 flex gap-4">
              <img src="/images/dd-icons/carbon_gui-management.svg" alt="" />
              <p>Marketing and outreach management.</p>
            </div>
          </div>

          <div class="bg-cblue-100 p-6">
            <div class="flex gap-4">
              <img src="/images/dd-icons/tabler_file-analytics.svg" alt="" />
              <p>Analytics and decision support.</p>
            </div>
          </div>
        </div>

        <div class="mt-14 mb-16 text-center">
          <h2 class="c-indigo">Get started for free.</h2>
          <h2 class="c-indigo">
            We only make money when your practice thrives.
          </h2>
          <h4 class="mt-6 opacity-70">
            You will be charged 1.5% + N100 capped at N1,000.00 per transaction.
          </h4>
        </div>
      </div>
    </div>

    <PatientExperience class="mt-9" />
    <Emr />
    <PracticeManagement />
    <BillingsAndPayment />
    <PatientPortal />
    <AnBIntelliegence />
    <DataProtection />

    <CFooter footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "~/components/CButton.vue"
import PatientPortal from "~/components/Providers/PatientPortal.vue"
import BillingsAndPayment from "~/components/Providers/BillingsAndPayment.vue"
import Emr from "~/components/Providers/Emr.vue"
import PatientExperience from "~/components/Providers/PatientExperience.vue"
import PracticeManagement from "~/components/Providers/PracticeManagement.vue"
import TopNav from "~/components/TopNav.vue"
import AnBIntelliegence from "~/components/Providers/AnBIntelliegence.vue"
import CFooter from "~/components/CFooter.vue"
import DataProtection from "~/components/Providers/DataProtection.vue"
export default Vue.extend({
  name: "Hospitals-And-Clinics",
  components: {
    TopNav,
    CButton,
    PatientExperience,
    Emr,
    PracticeManagement,
    BillingsAndPayment,
    PatientPortal,
    AnBIntelliegence,
    CFooter,
    DataProtection
  },
})
</script>

<style></style>
