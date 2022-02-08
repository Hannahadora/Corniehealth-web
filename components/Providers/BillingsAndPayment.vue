<template>
  <div class="bg-cblue-100 c-wrapper">
    <div
      class="mb-9 flex xl:flex-row flex-col-reverse items-center justify-between py-24"
    >
      <div class="xl:w-1/2 w-full xl:mr-9 xl:mt-0 mt-9">
        <div class="flex items-center xl:justify-start justify-center mb-4">
          <img
            class="xl:block hidden mr-2"
            src="/images/good health.svg"
            alt=""
          />
          <p class="text-left text-center">
            Simplify collections with online payment processing.
          </p>
        </div>
        <h2 class="c-indigo mb-8 xl:text-left text-center">
          Billing and Payment
        </h2>
        <p class="mb-8 xl:text-left text-center">
          Empower your team to maximize collection with easy-to-read and
          transparent paperless billing and get paid faster.
        </p>

        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Online, paperless billing and payment.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Consolidated patient balance statement.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Real-time claims adjudication enabled.</p>
        </div>
        <div class="flex items-start mb-4">
          <img class="mr-4" src="/images/checkmark.svg" alt="" />
          <p>Account based billing audit.</p>
        </div>
        <div class="mt-8">
          <c-button type="button" secondary small>Discover More</c-button>
        </div>
      </div>

      <div class="xl:w-1/2 w-full flex items-center justify-center">
        <img src="/images/providers/billing-and-payment.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "../CButton.vue"
export default Vue.extend({
  name: "BillingsAndPayment",
  components: { CButton },
})
</script>
