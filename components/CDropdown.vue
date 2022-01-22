<template>
  <div class="dropdown-wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'CDropdown'
})
</script>

<style scoped>
    .dropdown-wrapper {
        background: red;
        padding: 32px;
    }
</style>