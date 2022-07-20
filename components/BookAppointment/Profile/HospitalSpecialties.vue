<template>
	<div class="flex items-center justify-between flex-wrap">
		<div class="specialty-box xl:mb-0 mb-8">
			<div class="flex items-center justify-between">
				<p class="text-grey-blue">All</p>
				<img src="/images/book-appointment/icon-doctor-grey.png" alt="">
			</div>
			<p class="mt-2 font-bold">18</p>
		</div>
		<div v-for="(specialty, index) in specialties" :key="index" class="specialty-box xl:mb-0 mb-8">
			<div class="flex items-center justify-between">
				<p class="text-grey-blue">{{ specialty.name }}</p>
				<img src="/images/book-appointment/icon-doctor-grey.png" alt="">
			</div>
			<p class="mt-2 font-bold">{{ specialty.total }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class HospitalSpecialties extends Vue {
  specialties: Array<any> = []


  getSpecialties() {
    return this.specialties = [
      { name: "General Practice", total: "4" },
      { name: "OBGYN", total: "5" },
      { name: "Pediatrics", total: "6" },
      { name: "Emergency Medicine", total: "3" }
    ]
  }

  created() {
    this.getSpecialties()
  }
}
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
