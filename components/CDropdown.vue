<template>
  <div class="dropdown-wrapper shadow">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "CDropdown",
})
</script>

<style scoped>
.dropdown-wrapper {
  background: #fff;
  max-width: 563px;
}
</style>
