<template>
	<div class>
		<TopNav />
		<Header class="mt-24" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
// import { Component } from "vue-property-decorator";
import TopNav  from "~/components/TopNav.vue";
import Header from "~/components/Header.vue";
export default Vue.extend({
  name: "IndexPage",
  components: {
    TopNav,
    Header
  }
})
</script>
