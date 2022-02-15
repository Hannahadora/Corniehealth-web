<template>
  <div class="xl:pt-20 pt-14">
    <div class="bg-cblue-100 xl:px-32 py-16 h-52 text-center relative">
      <h1 class="c-indigo mb-2">Patient Portal</h1>
      <p class="flex items-center justify-center">
        <img class="mr-2" src="/images/nav/home.svg" alt="" />
        <span class="mr-2">Home /</span>
        <img class="mr-2" src="/images/nav/about.svg" alt="" />
        <span class="text-razzmataz-pry">Patient Portal</span>
      </p>
    </div>

    <div class="py-14 bg-white">
      <div
        class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
      >
        <div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Instant access to your patients</h2>
          <p>
            Connect with patients securely through the CornieCare App and
            encourage active patient engagement: online appointments booking,
            self-enrollment, self-check-ins, remote consultations, questionnaire
            responses, patient-initiated tests, refill requests, ratings, and
            more.
          </p>
        </div>
        <div class="xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 46.png" alt="" />
        </div>
      </div>
    </div>

    <div class="py-14 bg-cblue-100">
      <div
        class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
      >
        <div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 35.png" alt="" />
        </div>
        <div class="xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Paperless patient self-enrollment.</h2>
          <p>
            Enable your patients to fill out enrollments forms, questionnaires,
            and medical history forms well ahead of their visit, from anywhere.
          </p>
        </div>
      </div>
    </div>

    <div class="py-14 bg-white">
      <div
        class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
      >
        <div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Online appointment booking</h2>
          <p>
            Empower your patients to request appointments online based on your
            practice’s availability and reduce manual tasks, no-shows, and
            overlapping schedules.
          </p>
        </div>
        <div class="xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 47.png" alt="" />
        </div>
      </div>
    </div>

    <div class="py-14 bg-cblue-100">
      <div
        class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
      >
        <div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 48.png" alt="" />
        </div>
        <div class="xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Personal health records (PHR).</h2>
          <p>
            Access to clear, concise, and comprehensive patient health
            documentation, easy-to-use and understand.
          </p>
        </div>
      </div>
    </div>

    <div class="py-14 bg-white">
      <div
        class="c-wrapper flex xl:flex-row flex-col items-center justify-between"
      >
        <div class="xl:mr-14 xl:mb-0 mb-14 xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Fast, contactless payment collection.</h2>
          <p>
            Collect payments faster by enabling online collection from anywhere,
            safely.
          </p>
        </div>
        <div class="xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 44.png" alt="" />
        </div>
      </div>
    </div>

    <div class="py-14 bg-cblue-100">
      <div
        class="c-wrapper flex xl:flex-row flex-col flex-col-reverse items-center justify-between"
      >
        <div class="xl:mr-14 xl:mt-0 mt-14 xl:w-2/5 w-full">
          <img src="/images/patient-portal/image 49.png" alt="" />
        </div>
        <div class="xl:w-3/5 w-full">
          <h2 class="c-indigo mb-8">Goodbye, paper!</h2>
          <p>
            Use less paper and save the earth. Engage patients and collect
            feedback electronically.
          </p>
        </div>
      </div>
    </div>

    <ProductsFooter2 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ProductsFooter2 from "../../../components/Providers/ProductsFooter2.vue"
@Component({
  components: { ProductsFooter2 },
})
export default class PatientPortal extends Vue {}
</script>
