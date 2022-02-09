<template>
  <div>
    <div class="select-wrapper relative" @click="openOption = !openOption">
      <div>
        <img :src="icon" alt="" />
        <span class="selected mr-7 cursor-pointer">
          {{ selected }}
        </span>
      </div>
      <img src="/images/arrow-down-white.png" alt="" />
    </div>

    <div v-if="openOption" class="options-card absolute top-14">
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          class="mb-4 cursor-pointer"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    initialValue: {
      type: String,
      default: "",
    },
  },
})
export default class SelectDropdown extends Vue {
  openOption: Boolean = false
  selected: String = ""

  selectOption(option: any) {
    this.selected = option
    this.openOption = false
  }

  // created() {
  //     this.selected = this.initialValue
  // }
}
</script>

<style scoped></style>
