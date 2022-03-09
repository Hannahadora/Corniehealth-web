<template>
  <div>
    <cornie-dialog
      v-if="showDiag"
      :firstname="form.firstName"
      @close-diag="showDiag = false"
    />
    <auth>
      <template #default>
        <div class="w-full h-full flex justify-center items-center xl:mt-0 mt-14">
          <div
            class="w-full h-auto bg-white rounded-md shadow-md lg:px-9 px-4 py-12 overflow-hidden"
          >
            <h2 class="text-center text-primary">Welcome Back!</h2>

            <h4 class="text-center mt-12 mb-6 text-razzmataz-pry">
              2FA Required
            </h4>

            <div class="mb-12 text-center lg:w-10/12 w-full mx-auto">
              <span>
                Admin has setup a mandatory use of 2FA for user sign in. Kindly
                go to your security settings to setup your 2FA.
              </span>
            </div>

            <div class="w-1/2 mx-auto mt-12">
              <button
                type="submit"
                class="rounded-md w-full text-center py-2 bg-red-500 text-white hover:bg-red-400 mb-6"
              >
                Set Up
              </button>
              <button
                type="submit"
                class="rounded-md w-full text-center py-2 border border-indigo-900 c-indigo hover:bg-red-400"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </template>
      <template #image class="">
        <img src="@/static/images/smiling lady 1.svg" class="w-full h-full lg:block hidden" />
      </template>
      <template #banner class="">
        <div class="flex justify-center items-center lg:block hidden">
          <!-- <heart-pulse class="mr-3" /> -->
          <h2 class="text-center font-bold">You’ve successfully created an account</h2>
        </div>
        <span class="text-center mt-4 lg:block hidden">
          Sign In to your account to get started
        </span>
      </template>
    </auth>
  </div>
</template>

<script>
import Auth from "@/components/auth/auth.vue"
import HeartPulse from "@/components/icons/heartpulse.vue"
import CornieInput from "@/components/CornieInput.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
import CornieDialog from "@/components/CornieDialog.vue"

export default {
  name: "PatientScreen",
  components: {
    Auth,
    HeartPulse,
    CornieInput,
    CornieCheckbox,
    CornieDialog,
  },
  layout: "auth",
  data: () => ({}),
  methods: {},
}
</script>

<style scoped>
.login-input-wrapper {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}

.login-input {
  background: transparent;
  border: none;
}
</style>
