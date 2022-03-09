<template>
  <div>
    <cornie-dialog
      v-if="showDiag"
      :firstname="form.firstName"
      @close-diag="showDiag = false"
    />
    <auth>
      <template #default>
        <div class="w-full h-full flex justify-center items-center">
          <div
            class="w-full h-auto bg-white rounded-md shadow-md px-9 py-12 overflow-hidden"
          >
            <h2 class="text-primary">Sign In Protection</h2>

            <div class="mb-12 mt-4 p-4 bg-cblue-100">
              <span>
                Your admin has setup a mandatory use of 2FA for account Sign In.
                Enter the 6 digits code sent to your account email to continue.
              </span>
            </div>

            <span class="sub-titles-2 bold c-indigo">Enter your 2FA Verification Code</span>

        
            <div class="w-1/2 mx-auto mt-12">
              <button
                type="submit"
                class="rounded-md w-full text-center py-2 bg-red-500 text-white hover:bg-red-400 mb-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </template>
      <template #image>
        <img src="@/static/images/smiling lady 1.svg" class="w-full h-full" />
      </template>
      <template #banner>
        <div class="flex justify-center items-center">
          <!-- <heart-pulse class="mr-3" /> -->
          <h2 class="font-bold">You’ve successfully created an account</h2>
        </div>
        <span class="text-center mt-4">
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
