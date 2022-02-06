<template>
	<div class="header bg-white w-full fixed top-0">
		<div class="w-full flex items-center justify-between">
			<CornieLogo />
			<ul class="header-nav xl:flex hidden items-center justify-between">
				<li>
					<NuxtLink class="mr-6 pb-2" to="/Appointments">Appointments</NuxtLink>
				</li>
				<li><NuxtLink class="mr-6 pb-2" to="/Pharmacy">Pharmacy</NuxtLink></li>
				<li><NuxtLink class="mr-6 pb-2" to="/LabTest">Lab tests</NuxtLink></li>
				<li id="padwn" v-click-outside="closePatientDropdown" class="relative">
					<span class="mr-6 flex items-center">
						<NuxtLink
							to="/patients"
							:class="{ 'nuxt-link-exact-active': patientDropdown === true }"
							class=""
						>
							For Patients
						</NuxtLink>
						<img
							class="ml-2 cursor-pointer"
							src="/images/bx_bx-chevron-down.svg"
							alt=""
							@click="patientDropdown = !patientDropdown"
						/>
					</span>
					<patients-dropdown v-if="patientDropdown" class="absolute top-16"  @closeSelf="patientDropdown = false" />
				</li>
				<li id="prdwn" v-click-outside="closeProviderDropdown" class="relative">
					<span class="mr-6 flex items-center">
						<NuxtLink
							to="/providers"
							:class="{ 'nuxt-link-exact-active': providerDropdown === true }"
							class=""
						>
							For Providers
						</NuxtLink>
						<img
							class="ml-2 cursor-pointer"
							src="/images/bx_bx-chevron-down.svg"
							alt=""
							@click="providerDropdown = !providerDropdown"
						/>
					</span>
					<providers-dropdown
						v-if="providerDropdown"
						class="absolute top-16 right-0"
						@closeSelf="providerDropdown = false"
					/>
				</li>
			</ul>
			<div class="flex items-center xl:flex hidden">
				<c-button class="mr-2" title="Login" :primary="true" @click="moveToLogin" />
				<c-button title="Sign up for free" :secondary="true" @click="moveToSignup" />
			</div>
			<div class="xl:hidden block menu-icon">
				<img
					v-if="!sideMenu"
					src="/images/ci_hamburger.svg"
					alt=""
					@click="openSideMenu"
				/>
				<img
					v-else
					src="/images/iconoir_cancel.svg"
					alt=""
					@click="openSideMenu"
				/>
			</div>
		</div>
		<mobile-nav
			v-if="sideMenu"
			class="xl:hidden block absolute top-0 right-0"
			@closeMenu="sideMenu = false"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import vClickOutside from "v-click-outside"
import CButton from "./CButton.vue"
import CornieLogo from "./CornieLogo.vue"
import MobileNav from "./MobileNav.vue"
import PatientsDropdown from "./PatientsDropdown.vue"
import ProvidersDropdown from "./ProvidersDropdown.vue"

export default Vue.extend({
  name: "TopNav",
  components: {
    CornieLogo,
    CButton,
    PatientsDropdown,
    ProvidersDropdown,
    MobileNav,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      padwn: "",
      prdwn: "",
      providerDropdown: false,
      patientDropdown: false,
      sideMenu: false,
    }
  },

  methods: {
    openSideMenu() {
      this.sideMenu = !this.sideMenu
    },
    closePatientDropdown() {
      this.patientDropdown = false
    },
    closeProviderDropdown() {
      this.providerDropdown = false
    },

    moveToLogin() {
      location.href = "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/login"
    },

    moveToSignup() {
      location.href = "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/signup"
    }
  },
})
</script>

<style scoped>
.header {
  padding: 18px 72px;
  box-shadow: 0px 0px 1px rgba(46, 41, 78, 0.02),
    0px 2px 4px rgba(46, 41, 78, 0.08);
  z-index: 998;
}

a.nuxt-link-exact-active {
  border-bottom: 3px solid #fe4d3c;
}

.active-dropdown {
  border-bottom: 3px solid #fe4d3c;
}

.menu-icon {
  z-index: 999999999;
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
