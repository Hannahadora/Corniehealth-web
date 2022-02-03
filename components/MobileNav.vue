<template>
	<div class="mobile-nav bg-white w-full p-4 shadow rounded">
		<NuxtLink to="/"><CornieLogo class="mb-12" /></NuxtLink>
		<ul class="header-nav flex flex-col items-start gap-6 justify-between">
			<NuxtLink class="pb-2" to="/Appointment">Appointments</NuxtLink>
			<NuxtLink class="pb-2" to="/Pharmacy">Pharmacy</NuxtLink>
			<NuxtLink class="pb-2" to="/LabTest">Lab tests</NuxtLink>
			<div class="xl:relative">
				<p
					:class="{ 'active-dropdown': patientDropdown === true }"
					class="pb-2 flex items-center xl:justify-start justify-between cursor-pointer xl:mb-0 mb-4"
					@click="patientDropdown = !patientDropdown"
				>
					<span>For Patients</span><img class="xl:ml-2" src="/images/bx_bx-chevron-down.svg" alt="" />
				</p>
				<patients-dropdown v-if="patientDropdown" class="xl:absolute xl:top-16" />
			</div>
			<div class="xl:relative">
				<p
					:class="{ 'active-dropdown': providerDropdown === true }"
					class="pb-2 flex items-center gap-2 cursor-pointer xl:mb-0 mb-4"
					@click="providerDropdown = !providerDropdown"
				>
					For Providers<img src="/images/bx_bx-chevron-down.svg" alt="" />
				</p>
				<providers-dropdown
					v-if="providerDropdown"
					class="xl:absolute xl:top-16 xl:right-0"
				/>
			</div>
		</ul>
		<div class="flex flex-col items-center justify-center gap-4 xl:mt-0 mt-24">
			<c-button class="rounded-xl" title="Login" :primary="true" />
			<c-button title="Sign up for free" :secondary="true" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "./CButton.vue"
import CornieLogo from "./CornieLogo.vue"
import PatientsDropdown from "./PatientsDropdown.vue"
import ProvidersDropdown from "./ProvidersDropdown.vue"
// import vClickOutside from "v-click-outside"

export default Vue.extend({
  name: "MobileNav",
  components: {
    CornieLogo,
    CButton,
    PatientsDropdown,
    ProvidersDropdown,
  },

  data() {
    return {
      providerDropdown: false,
      patientDropdown: false,
    }
  }

})
</script>

<style scoped>
.mobile-nav {
  z-index: 999;
  height: 100vh;
  overflow-y: scroll;
}
</style>
