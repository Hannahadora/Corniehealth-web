<template>
  <div>
    <cornie-dialog
      v-if="showDiag"
      :firstname="form.firstName"
      @close-diag="hideDialog"
    />
    <auth>
      <template #default>
        <div class="w-full h-full flex justify-center items-center">
          <div
            class="w-full h-auto bg-white rounded-md shadow-md p-5 overflow-x-hidden overflow-y-auto"
          >
            <h2 class="text-sm text-primary">Early Access Registration</h2>
            <ValidationObserver v-slot="{}">
              <form class="h-auto mt-10" @submit.prevent="submit">
                <div class="md:grid grid-cols-12 gap-3">
                  <div class="col-span-6 mb-3">
                    <cornie-input
                      v-model="form.firstName"
                      label="First Name"
                      placeholder="--Enter--"
                      required
                    ></cornie-input>
                  </div>
                  <div class="col-span-6 mb-3">
                    <cornie-input
                      v-model="form.lastName"
                      label="Last Name"
                      placeholder="--Enter--"
                      required
                    ></cornie-input>
                  </div>
                  <div class="col-span-6 mb-3">
                    <cornie-input
                      v-model="form.phoneNumber.number"
                      label="Phone Number"
                      placeholder="--Enter--"
                      required
                    ></cornie-input>
                  </div>
                  <div class="col-span-6 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="email"
                      rules="email"
                    >
                      <cornie-input
                        v-model="form.email"
                        label="Email Addrees"
                        placeholder="--Enter--"
                        type="email"
                        required
                      ></cornie-input>
                      <span class="text-xs text-red-500">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="col-span-6 mb-3">
                    <label class="block text-xs mb-1 font-bold"
                      >Provider Profile</label
                    >
                    <cornie-select
                      v-model="form.providerProfile"
                      :items="[
                        'Independent physician',
                        'Hospital',
                        'Laboratory Center',
                        'Community Pharmacy',
                        'Opticians',
                        'Dentals',
                        'ENTs',
                        'HMO',
                        'Organisation',
                        'NA',
                      ]"
                      required
                      @changed="handleChange"
                    ></cornie-select>
                  </div>
                  <div class="col-span-6 mb-3">
                    <cornie-input
                      v-model="form.practiceName"
                      label="Practice Name"
                      placeholder="--Enter--"
                      required
                    ></cornie-input>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <cornie-checkbox
                    v-model="agree"
                    class="mr-1"
                    @change="handleAgree"
                  />
                  <div class="text-sm">
                    I agree to CorieHealth's
                    <a href="#" class="text-red-400">Terms of service</a> and
                    <a href="#" class="text-red-400">Privacy policy</a>
                  </div>
                </div>
                <div class="w-full mt-5">
                  <button
                    class="rounded-md w-full text-center font-bold py-2"
                    :class="[
                      !formCompleted
                        ? 'bg-gray-300 text-gray-400'
                        : 'bg-red-500 text-white hover:bg-red-400',
                    ]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </ValidationObserver>
            <div class="my-6 w-full text-center">
              Have an account?
              <span
                class="text-red-400 hover:text-red-300 cursor-pointer"
                @click="handleSignin"
                >Sign in</span
              >
            </div>
            <div class="w-full text-center">
              <a href="#">Terms of use</a> | <a href="#">Privacy policy</a> |
              <a href="#">Help</a> | 2021 Cornie Health Ltd.
            </div>
          </div>
        </div>
      </template>
      <template #image>
        <img src="@/static/images/smiling_lady2.svg" class="w-full h-full" />
      </template>
      <template #banner>
        <div class="flex justify-center items-center">
          <heart-pulse class="mr-3" />
          <div class="text-xs">Connectd. Patient-Centric,Supportive.</div>
        </div>
        <div class="text-center text-2xl font-bold">
          Connected, Simple Practice Management Software.
        </div>
      </template>
    </auth>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { ValidationObserver, ValidationProvider } from "vee-validate"
import Auth from "@/components/auth/auth.vue"
import HeartPulse from "@/components/icons/heartpulse.vue"
import CornieInput from "@/components/CornieInput.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import CornieSelect from "@/components/CornieSelect.vue"
import CornieDialog from "@/components/CornieDialog.vue"
import PhoneInput from "~/components/CorniePhoneInput.vue"

@Component({
  components: {
    Auth,
    HeartPulse,
    CornieInput,
    CornieCheckbox,
    CornieSelect,
    CornieDialog,
    PhoneInput,
    ValidationProvider,
    ValidationObserver,
  },
  layout: "auth",
})
export default class Provider extends Vue {
  disabled = false
  showDiag = false
  url = "https://corniehealth.herokuapp.com"
  agree = false
  form = {
    type: "Provider",
    firstName: "",
    lastName: "",
    phoneNumber: {
      dialCode: "+234",
      number: "",
    },
    email: "",
    providerProfile: "",
    practiceName: "",
  }

  get formCompleted() {
    if (
      this.form.firstName !== "" &&
      this.form.lastName !== "" &&
      this.form.phoneNumber.number !== "" &&
      this.form.email !== "" &&
      this.form.providerProfile !== "" &&
      this.form.practiceName !== "" &&
      this.agree
    )
      return true

    return false
  }

  reset() {
    this.form.firstName = ""
    this.form.lastName = ""
    this.form.phoneNumber.dialCode = "+234"
    this.form.phoneNumber.number = ""
    this.form.email = ""
    this.form.providerProfile = ""
    this.form.practiceName = ""
  }

  async handleSignin() {
    location.href =
      "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/login"
  }

  handleChange(val: any) {
    this.form.providerProfile = val
  }

  hideDialog() {
    this.showDiag = false
    this.reset()
  }

  handleAgree(val: any) {
    this.agree = val
  }

  async getProvider() {
    try {
      await this.$axios.get(
        `${this.url}/api/v1/organization/getProviderProfile`
      )

      this.showDiag = true
    } catch (err) {}
  }

  created() {
    this.getProvider()
  }

  async submit() {
    try {
      this.disabled = true
      const response = await this.$axios.post(
        `${this.url}/api/v1/early-access`,
        this.form
      )

      if (response.data) {
        this.showDiag = true
        this.disabled = false
      }
    } catch (err) {
      this.disabled = false
    }
  }
}
</script>
