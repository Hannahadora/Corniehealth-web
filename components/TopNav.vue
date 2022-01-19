<template>
	<div class="header">
		<div class="w-full flex items-center justify-between">
			<CornieLogo />
			<ul class="header-nav">
				<li>Appointments</li>
				<li>Pharmacy</li>
				<li>Lab tests</li>
				<li>For Patients</li>
				<li>For Providers</li>
			</ul>
			<div class="flex items-center gap-2">
				<c-button title="Login" :primary="true" />
				<c-button title="Sign up" :secondary="true" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import CButton from "./CButton.vue"
import CornieLogo from "./CornieLogo.vue"
export default Vue.extend ({
  name: "TopNav",
  components: {
    CornieLogo,
    CButton
  }
})
</script>

<style scoped>
.header {
  padding: 18px 72px;
  box-shadow: 0px 0px 1px rgba(46, 41, 78, 0.02), 0px 2px 4px rgba(46, 41, 78, 0.08);
}

.header-nav {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
}
</style>