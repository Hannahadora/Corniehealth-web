<template>
  <c-dropdown>
    <div class="p-8 flex items-center justify-between">
      <span class="mb-7 flex items-center gap-2"
        ><img src="/images/patient-private.svg" alt="" />Private</span
      >
      <span class="flex items-center gap-2"
        ><img src="/images/clarity_employee-line.svg" alt="" />Employer</span
      >
    </div></c-dropdown
  >
</template>

<script lang="ts">
import Vue from "vue"
import CDropdown from "./CDropdown.vue"
export default Vue.extend({
  components: { CDropdown },
  name: "ProvidersDropdown",
})
</script>

<style scoped></style>