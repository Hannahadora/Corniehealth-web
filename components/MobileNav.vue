<template>
	<div class="mobile-nav bg-white w-full p-4 shadow rounded">
		<CornieLogo class="mb-12" />
		<ul class="header-nav flex flex-col items-start justify-between">
			<li class="mb-6" @click="$emit('closeMenu')">
				<NuxtLink class="pb-2" to="/Appointments">Appointments</NuxtLink>
			</li>
			<li class="mb-6" @click="$emit('closeMenu')">
				<NuxtLink class="pb-2" to="/Pharmacy">Pharmacy</NuxtLink>
			</li>
			<li class="mb-6" @click="$emit('closeMenu')">
				<NuxtLink class="pb-2" to="/LabTest">Lab tests</NuxtLink>
			</li>
			<div class="xl:relative mb-6">
				<p
					:class="{ 'active-dropdown': patientDropdown === true }"
					class="pb-2 flex items-center xl:justify-start justify-between cursor-pointer"
					@click="patientDropdown = !patientDropdown"
				>
					<span>For Patients</span
					><img class="xl:ml-2" src="/images/bx_bx-chevron-down.svg" alt="" />
				</p>
				<patients-dropdown
					v-if="patientDropdown"
					class="xl:absolute xl:top-16"
					@closeSelf="$emit('closeMenu')"
				/>
			</div>
			<div class="xl:relative mb-6">
				<p
					:class="{ 'active-dropdown': providerDropdown === true }"
					class="pb-2 flex items-center gap-2 cursor-pointer"
					@click="providerDropdown = !providerDropdown"
				>
					For Providers<img src="/images/bx_bx-chevron-down.svg" alt="" />
				</p>
				<providers-dropdown
					v-if="providerDropdown"
					class="xl:absolute xl:top-16 xl:right-0"
					@closeSelf="$emit('closeMenu')"
				/>
			</div>
		</ul>
		<div class="flex flex-col items-center justify-center gap-4 xl:mt-0 mt-24">
			<c-button
				type="button"
				class="xl:mr-4 mb-4"
				:primary="true"
				@click="goToLogin"
			>
				Sign in
			</c-button>
			<c-button type="button" :secondary="true" @click="goToSignup">
				Sign up for free
			</c-button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
// import CButton from "./CButton.vue"
import CornieLogo from "./CornieLogo.vue"
import PatientsDropdown from "./PatientsDropdown.vue"
import ProvidersDropdown from "./ProvidersDropdown.vue"
// import vClickOutside from "v-click-outside"

export default Vue.extend({
  name: "MobileNav",
  components: {
    CornieLogo,
    PatientsDropdown,
    ProvidersDropdown,
  },

  data() {
    return {
      providerDropdown: false,
      patientDropdown: false,
    }
  },

  methods: {
    goToLogin() {
      this.$router.push("/signin"); 
    },

    goToSignup() {
      this.$router.push("/signup"); 
    },
  },
})
</script>

<style scoped>
.mobile-nav {
  z-index: 999;
  height: 100vh;
  overflow-y: scroll;
}
</style>
