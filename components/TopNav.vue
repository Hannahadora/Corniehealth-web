<template>
  <div class="header">
    <div class="w-full flex items-center justify-between">
      <CornieLogo />
      <ul class="header-nav lg:flex hidden items-center gap-6 justify-between">
        <NuxtLink to="/Appointment">Appointments</NuxtLink>
        <NuxtLink to="/Pharmacy">Pharmacy</NuxtLink>
        <NuxtLink to="/LabTest">Lab tests</NuxtLink>
        <div class="relative">
          <p  @click="patientDropdown = !patientDropdown"
            :class="{ 'active-dropdown': patientDropdown === true }"
            class="flex items-center gap-2 cursor-pointer" c>
            For Patients<img src="/images/bx_bx-chevron-down.svg" alt="" />
          </p>
		  <c-dropdown
            class="absolute top-16"
            v-if="patientDropdown"
          ></c-dropdown>
        </div>
        <div class="relative">
          <p
            @click="providerDropdown = !providerDropdown"
            :class="{ 'active-dropdown': providerDropdown === true }"
            class="flex items-center gap-2 cursor-pointer"
          >
            For Providers<img src="/images/bx_bx-chevron-down.svg" alt="" />
          </p>
          <c-dropdown
            class="absolute top-16"
            v-if="providerDropdown"
          ></c-dropdown>
        </div>
      </ul>
      <div class="flex items-center gap-2 lg:flex hidden">
        <c-button title="Login" :primary="true" />
        <c-button title="Sign up" :secondary="true" />
      </div>
      <div class="lg:hidden block">
        <img src="/images/ci_hamburger.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "./CButton.vue"
import CDropdown from "./CDropdown.vue"
import CornieLogo from "./CornieLogo.vue"
export default Vue.extend({
  name: "TopNav",
  components: {
    CornieLogo,
    CButton,
    CDropdown,
  },
  data() {
    return {
      providerDropdown: false,
      patientDropdown: false,
    }
  },
})
</script>

<style scoped>
.header {
  padding: 18px 72px;
  box-shadow: 0px 0px 1px rgba(46, 41, 78, 0.02),
    0px 2px 4px rgba(46, 41, 78, 0.08);
}

.active-dropdown {
  padding-bottom: 8px;
  border-bottom: 2px solid #fe4d3c;
}

@media screen and (max-width: 1024px) {
  .header {
    padding: 18px 50px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 18px 36px;
  }
}
</style>
