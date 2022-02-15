<template>
  <div class="flex items-center flex-wrap">
    <div class="specialty-box mr-8">
        <div class="flex items-center justify-between">
            <p class="text-grey-blue">All</p>
            <img src="/images/book-appointment/icon-doctor-grey" alt="">
        </div>
        <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class HospitalSpecialties extends Vue {}
</script>

<style scoped>
.specialty-box {
  width: 224px;
  height: 88px;
  background: #f0f4fe;
  border-radius: 8px;
  padding: 16px;
}
</style>
