<template>
  <div>
    <cornie-dialog
      v-if="showDiag"
      :firstname="form.firstName"
      @close-diag="showDiag = false"
    />
    <auth>
      <template v-slot:default>
        <div class="w-full h-full flex justify-center items-center">
          <div
            class="w-full h-auto bg-white rounded-md shadow-md p-5 overflow-hidden"
          >
            <h2 class="text-sm text-primary">Early Access Registration</h2>
            <form class="h-auto mt-10" @submit.prevent="submit">
              <div class="grid grid-cols-12 gap-3">
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
                    label="Mobile"
                    type="tel"
                    placeholder="--Enter--"
                    required
                  ></cornie-input>
                </div>
                <div class="col-span-6 mb-3">
                  <cornie-input
                    v-model="form.email"
                    label="Email Addrees"
                    placeholder="--Enter--"
                    type="email"
                    required
                  ></cornie-input>
                </div>
                <div class="col-span-12 mb-3">
                  <label class="block text-xs mb-1 font-bold"
                    >Patient Profile</label
                  >
                  <cornie-select
                    :readonly="false"
                    v-model="form.patientProfile"
                    :items="['individual', 'family', 'corporate']"
                    required
                    @changed="handleChange"
                  ></cornie-select>
                </div>
              </div>
              <div class="w-full flex items-center">
                <cornie-checkbox
                  v-model="form.agree"
                  class="mr-1"
                  @change="handleAgree"
                />
                <div class="text-sm">
                  I agree to CorieHealth's
                  <a href="#" class="text-red-400">Terms of service</a> and
                  <a href="#" class="text-red-400">Private policy</a>
                </div>
              </div>
              <div class="w-full mt-5">
                <button
                  class="rounded-md w-full text-center font-bold py-2"
                  :class="[
                    !agree || disabled
                      ? 'bg-gray-300 text-gray-400'
                      : 'bg-red-500 text-white hover:bg-red-400',
                  ]"
                >
                  Submit
                </button>
              </div>
            </form>
            <div class="my-6 w-full text-center">
              Have an account? <span class="text-red-400">Sign in</span>
            </div>
            <div class="w-full text-center">
              <a href="#">Terms of use</a> | <a href="#">Private policy</a> |
              <a href="#">Help</a> | 2021 Cornie Health Ltd.
            </div>
          </div>
        </div>
      </template>
      <template v-slot:image>
        <img src="@/static/images/healthy_family.svg" class="w-full h-full" />
      </template>
      <template v-slot:banner>
        <div class="flex justify-center items-center">
          <heart-pulse class="mr-3" />
          <div>Connectd. Patient-Centric,Supportive.</div>
        </div>
        <h2 class="text-center">
          Connected, Simple Practice Management Software.
        </h2>
      </template>
    </auth>
  </div>
</template>

<script>
import Auth from "@/components/auth/auth.vue"
import HeartPulse from "@/components/icons/heartpulse.vue"
import CornieInput from "@/components/CornieInput.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import CornieSelect from "@/components/CornieSelect.vue"

export default {
  name: "Provider",
  components: {
    Auth,
    HeartPulse,
    CornieInput,
    CornieCheckbox,
    CornieSelect,
  },
  layout: "auth",
  data: () => ({
    disabled: false,
    showDiag: false,
    url: "https://corniehealth.herokuapp.com",
    agree: false,
    form: {
      type: "Patient",
      firstName: "",
      lastName: "",
      phoneNumber: {
        dialCode: "+234",
        number: "",
      },
      email: "",
      providerProfile: "Independent physician",
      practiceName: "NA",
      patientProfile: "",
    },
  }),
  methods: {
    handleChange(val) {
      this.form.patientProfile = val
    },
    handleAgree(val) {
      this.agree = val
    },
    async submit() {
      try {
        console.log(this.form)
        this.disabled = true
        const response = await this.$axios.post(
          `${this.url}/api/v1/early-access`,
          this.form
        )

        if (response.success) {
          this.showDiag = true
          this.disabled = false
        }
      } catch (err) {
        this.disabled = false
        console.log(err.message)
      }
    },
  },
}
</script>
