<template>
	<div>
		<nuxt-child></nuxt-child>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: { },
  layout: "appointment"
})
export default class PatientPage extends Vue {}
</script>

<style>

</style>