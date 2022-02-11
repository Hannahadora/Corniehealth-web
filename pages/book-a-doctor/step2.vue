<template>
  <div class="">
    <div>
      <h4 class="mt-12 text-center">Have Insurance?</h4>

      <form action="" class="flex items-center justify-center mt-4">
        <div class="mr-9">
          <input
            name="insurance"
            type="radio"
            value="yes"
            v-model="haveInsurance"
          />
          <label for="">Yes</label>
        </div>
        <div>
          <input
            name="insurance"
            type="radio"
            value="no"
            v-model="haveInsurance"
          />
          <label for="">No</label>
        </div>
      </form>
    </div>

    <div class="mt-8" v-if="haveInsurance === 'yes'">
      <h4 class="mt-12 text-center">
        Is your insurance provided by an employer or private?
      </h4>

      <form action="" class="flex items-center justify-center mt-4">
        <div class="mr-9">
          <input
            type="radio"
            name="insuranceprovider"
            value="employer"
            v-model="insuranceprovider"
          />
          <label for="">Employer</label>
        </div>
        <div>
          <input
            name="insuranceprovider"
            type="radio"
            value="private"
            v-model="insuranceprovider"
          />
          <label for="">Private</label>
        </div>
      </form>
    </div>

    <div v-if="insuranceprovider === 'employer'" class="w-1/2 mx-auto my-8">
      <cornie-input placeholder="Enter employer's name" class="" />
      <span class="mt-1 text-grey-blue small text-sm italic"
        >Enter the primary beneficiary’s employer if you are a covered
        dependent</span
      >
    </div>

    <div v-if="insuranceprovider === 'private'" class="text-center">
      <h4 class="mt-12 text-center">Select your insurance plan</h4>
      <span class="mt-2 text-grey-blue small-text"
        >This will help us connect you to a provider that accepts your
        plan</span
      >

      <form action="" class="w-1/2 mx-auto mt-8">
        <cornie-select label="Insurance Carrier"> </cornie-select>
      </form>
    </div>

    <div class="w-2/3 mx-auto mt-12 flex items-cente justify-center">
      <c-button
        class="w-1/2 mr-6"
        type="button"
        :primary="true"
        small
        @click="$router.push({ path: '/book-appointment/' })"
      >
        skip
      </c-button>
      <c-button
        class="w-1/2"
        type="button"
        small
        disabled
        @click="$router.push({ path: '/book-appointment/' })"
      >
        Continue
      </c-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import CornieInput from "~/components/CornieInput.vue"
import CornieSelect from "~/components/CornieSelect.vue"
@Component({
  components: { CButton, CornieInput, CornieSelect },
  layout: "InsuranceQuestion",
})
export default class BookDoctorPage extends Vue {
  haveInsurance: string = ""
  insuranceprovider: string = ""

  change(event: any) {
    console.log(event)
  }
}
</script>

<style scoped>
.ap-card {
  background: #f0f4fe;
  border: 0.5px solid #c2c7d6;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.time-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
