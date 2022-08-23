<template>
	<div>
		<div class="mb-2">
			<img class="cursor-pointer" src="@/static/images/back-btn.svg" alt="" @click="$router.go(-1)" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class BackBtn extends Vue {}
</script>

<style scoped>

</style>
