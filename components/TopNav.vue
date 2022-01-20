<template>
	<div class="header">
		<div class="w-full flex items-center justify-between">
			<CornieLogo />
			<ul class="header-nav lg:flex hidden items-center gap-6 justify-between">
				<li>Appointments</li>
				<li>Pharmacy</li>
				<li>Lab tests</li>
				<li>For Patients</li>
				<li>For Providers</li>
			</ul>
			<div class="flex items-center gap-2 lg:flex hidden">
				<c-button title="Login" :primary="true" />
				<c-button title="Sign up" :secondary="true" />
			</div>
			<div class="lg:hidden block">
				<img src="/images/ci_hamburger.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "./CButton.vue"
import CornieLogo from "./CornieLogo.vue"
export default Vue.extend({
  name: "TopNav",
  components: {
    CornieLogo,
    CButton,
  },
})
</script>

<style scoped>
.header {
  padding: 18px 72px;
  box-shadow: 0px 0px 1px rgba(46, 41, 78, 0.02),
    0px 2px 4px rgba(46, 41, 78, 0.08);
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