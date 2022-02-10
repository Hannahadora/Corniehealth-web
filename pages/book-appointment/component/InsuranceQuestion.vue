<template>
  <div class="">
    <div>
      <h4 class="mt-12 text-center">
        Have Insurance?
      </h4>
    </div>
    <div class="mt-12">
      <c-button
        class="w-full"
        type="button"
        :secondary="true"
        small
        @click="$router.push({ path: '/book-appointment/' })"
      >
        Continue
      </c-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton },
  layout: "InsuranceQuestion",
})
export default class BookDoctorPage extends Vue {}
</script>

<style scoped>
.ap-card {
  background: #f0f4fe;
  border: 0.5px solid #c2c7d6;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.time-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
