<template>
	<div>
		<img
			class="lg:block hidden"
			:src="footer ? '/images/FooterLogo.svg' : '/images/HeaderLogo.svg'"
			alt="logo" />
		<img
			class="lg:hidden block"
			:src="footer ? '/images/FooterLogo.svg' : '/images/Mobile-Logo.svg'"
			alt="logo"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CornieLogo",
  props: {
    footer: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.c-logo {
  width: auto;
}

@media screen and (max-width: 1024px) {
  .c-logo {
    width: 178px;
    height: 24px;
  }
}
</style>
