<template>
	<div>
		<img :src="footer ? '/images/FooterLogo.svg' : '/images/HeaderLogo.svg'" alt="logo" >
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "CornieLogo",
  props: {
	  footer: {
		  type: Boolean,
		  default: false
	  }
  }
})
</script>
