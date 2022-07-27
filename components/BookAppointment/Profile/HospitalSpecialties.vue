<template>
  <div class="flex items-start">
    <div class="w-1/5 border-r border-dashed">
      <p class="font-bold pl-2 border-l-4 border-red-500">Family Medicine</p>

      <div
        v-for="(specialty, index) in hospital.specialties"
        :key="index"
        class="xl:mt-6"
      >
        <p class="">{{ specialty.name }}</p>
      </div>
    </div>

    <div class="ml-8 w-full">
      <ul class="flex items-center border-b">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'active-tab': activeTab === tab }"
          class="pb-2 px-4 text-grey-blue cursor-pointer"
          @click="handleActiveTab(tab)"
        >
          {{ tab }}
        </li>
      </ul>

      <div v-if="activeTab === 'Doctors'">
        <list-of-doctors />
      </div>
      <div v-if="activeTab === 'Services'">
        <list-of-services />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import ListOfDoctors from "./ListOfDoctors.vue"
import ListOfServices from "./ListOfServices.vue"
@Component({
  components: { ListOfDoctors, ListOfServices },
})
export default class HospitalSpecialties extends Vue {
  specialties: Array<any> = []
  activeTab: string = "Doctors"
  tabs: Array<any> = ["Doctors", "Services"]

  @Prop({ type: Object })
  hospital!: any

  getSpecialties() {
    return (this.specialties = [
      { name: "General Practice", total: "4" },
      { name: "OBGYN", total: "5" },
      { name: "Pediatrics", total: "6" },
      { name: "Emergency Medicine", total: "3" },
      { name: "Emergency Medicine", total: "3" },
      { name: "Emergency Medicine", total: "3" },
      { name: "Emergency Medicine", total: "3" },
    ])
  }

  handleActiveTab(tab: any) {
    this.activeTab = tab
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
.active-tab {
  border-bottom: 4px solid #fe4d3c;
  font-weight: 600;
  color: #14171f;
}
</style>
