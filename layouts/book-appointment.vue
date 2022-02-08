<template>
  <div>
    <TopNav />
    <Nuxt class="absolute top-24" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CFooter from "../components/CFooter.vue"
import TopNav from "../components/TopNav.vue"
export default Vue.extend({
  name: "BookingAppointmentLayout",
  components: { TopNav, CFooter }
})
</script>

<style></style>
