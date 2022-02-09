<template>
	<div>
		<div class="select-wrapper relative" @click="openOption = !openOption">
			<div>
				<img :src="icon" alt="" />
				<span class="selected mr-7 cursor-pointer">
					{{ headText }}
				</span>
			</div>
			<img src="/images/arrow-down-white.png" alt="" />
		</div>

		<div v-if="openOption" class="options-card absolute top-14">
			<div v-for="(option, index) in options" :key="index">
				<input type="checkbox" :v-model="option" />
				<label class="mb-4 cursor-pointer" for="" @click="selectOption(option)">
					{{ option }}
				</label>
			</div>
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
    headText: {
      type: String,
      default: "",
    },
    icon: {
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

<style scoped>
.options-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(46, 41, 78, 0.02),
    0px 8px 12px rgba(46, 41, 78, 0.08);
  border-radius: 4px;
}

.select-wrapper {
  border: 1px solid #080056;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
}
</style>
