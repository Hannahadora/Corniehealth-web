<template>
	<div>
		<select-group :search="search" />
		<hospital-profile />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import SelectGroup from "~/components/SelectGroup.vue"
@Component({
  components: { CButton, SelectGroup },
})
export default class HospitalsPage extends Vue {
  search: string = ""
}
</script>

<style scoped>
.hospital-icon {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>
