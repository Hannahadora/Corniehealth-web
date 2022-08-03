<template>
	<div
		class="header bg-white w-full fixed top-0"
		:class="{ 'z-0': modalIsOpen, 'z-998': !modalIsOpen }"
	>
		<div class="w-full flex items-center justify-between">
			<CornieLogo />
			<ul class="header-nav xl:flex hidden items-center justify-between">
				<li class="mr-6">
					<NuxtLink class="pb-2" to="/appointments">Appointments</NuxtLink>
				</li>
				<li class="mr-6">
					<NuxtLink to="/pharmacy" class="pb-2">Pharmacy</NuxtLink>
				</li>
				<li class="mr-6 tooltip">
					<span class="tooltiptext">Coming soon</span>
					<span class="pb-2">Lab tests</span>
				</li>
				<li
					id="padwn"
					v-click-outside="closePatientDropdown"
					class="relative mr-6"
				>
					<span class="flex items-center">
						<span
							:class="{ 'nuxt-link-active': patientDropdown === true }"
							class="tooltip"
						>
							For Patients
							<span class="tooltiptext">Coming soon</span>
						</span>
						<img
							class="ml-2 cursor-pointer"
							src="/images/bx_bx-chevron-down.svg"
							alt=""
							@click="patientDropdown = !patientDropdown"
						/>
					</span>
					<patients-dropdown
						v-if="patientDropdown"
						class="absolute top-16"
						@closeSelf="patientDropdown = false"
					/>
				</li>
				<li id="prdwn" v-click-outside="closeProviderDropdown" class="relative">
					<span class="mr-6 flex items-center">
						<NuxtLink
							to="/providers/main"
							:class="{ 'nuxt-link-active': providerDropdown === true }"
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
			<div class="items-center xl:flex hidden">
				<!-- <c-button type="button" class="mr-2" :primary="true" @click="goToLogin">
          Sign in
        </c-button> -->
				<c-button v-if="!user" type="button" :secondary="true" @click="goToSignup">
					Sign up for free
				</c-button>
				<div v-else>
					{{ user.id }}
				</div>
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

<script>
import Vue from "vue"
import vClickOutside from "v-click-outside"
// import CButton from "./CButton.vue"
import { mapGetters } from "vuex"
import CornieLogo from "./CornieLogo.vue"
import MobileNav from "./MobileNav.vue"
import PatientsDropdown from "./PatientsDropdown.vue"
import ProvidersDropdown from "./ProvidersDropdown.vue"

export default Vue.extend({
  name: "TopNav",
  components: {
    CornieLogo,

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

  computed: {
    ...mapGetters({
      modalIsOpen: ["misc/modalState"],
	  user: ["patient/getUser"]
    }),
  },

  // get modalIsOpen() {
  // 	return this.$store.getters['misc/modalState']
  // },

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

    // goToLogin() {
    //   //   this.$router.push("/signin");
    //   location.href =
    //     "http://corniehealth-frontend.s3-website.eu-west-2.amazonaws.com/signin"
    // },

    goToSignup() {
      this.$router.push("/signup")
    },
  },
})
</script>

<style scoped>
.header {
  padding: 18px 72px;
  box-shadow: 0px 0px 1px rgba(46, 41, 78, 0.02),
    0px 2px 4px rgba(46, 41, 78, 0.08);
  /* z-index: 99; */
}

a.nuxt-link-active {
  border-bottom: 3px solid #fe4d3c;
}

.active-dropdown {
  border-bottom: 3px solid #fe4d3c;
}

.menu-icon {
  z-index: 999999999;
}

.tooltip {
  cursor: pointer !important;
}

.tooltiptext {
  background: #fe4d3c !important;
  color: #fff !important;
}

.z-998 {
  z-index: 998;
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
