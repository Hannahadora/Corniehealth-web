<template>
	<div>
		<img
			class="lg:h-auto h-7 cursor-pointer"
			:src="footer ? '/images/FooterLogo.svg' : '/images/Logo.png'"
			alt="logo"
			@click="$router.push({path: '/'})"
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
