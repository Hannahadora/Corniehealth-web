<template>
	<div class="relative">
		<div
			class="select-wrapper"
			:class="{ active: active }"
			@click="openOption = !openOption"
		>
			<div class="flex items-center">
				<img class="" :src="icon" alt="" />
				<span
					class="selected cursor-pointer mx-2 text-grey-blue"
					:class="{ 'text-white': active }"
				>
					{{ selected ? selected : headText }}
				</span>
				<img
					class="cursor-pointer"
					src="/images/book-appointment/arrow-down-grey.png"
					alt=""
				/>
			</div>
		</div>

		<div
			v-if="openOption"
			class="options-card absolute top-16 w-80 max-h-72 overflow-y-scroll"
		>
			<div v-for="(option, index) in options" :key="index" class="px-4 py-3">
				<cornie-checkbox
					:id="option"
					:v-model="optionIds[option]"
					:name="option"
					:label="option"
					@change="selectOption(option)"
				/>
				<!-- <input
          :id="option"
          type="checkbox"
          :name="options"
          class="w-6 h-6"
          :v-model="optionIds[option]"
        /> -->
				<!-- <label
          class="mb-4 cursor-pointer"
          :for="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </label> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CornieCheckbox from "./CornieCheckbox.vue"

// import { vClickOutside } from "v-click-outside"
@Component({
  components: { CornieCheckbox },
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
  active: Boolean = false
  selected: String = ""
  optionIds: Array<any> = []

  // clickOutside: vClickOutside.directive

  selectOption(option: any) {
    // this.option = true
    this.selected = option
    this.openOption = false
    this.active = true
  }

  closeOption() {
    this.openOption = false
  }

  created() {
    //  if(this.selected) {
    //     this.headText = this.selected
    //  }
  }
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

.active {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  background: #080056;
  border: 1px solid #080056;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
