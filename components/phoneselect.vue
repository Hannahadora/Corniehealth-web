<template>
  <div class="flex flex-col w-11/12">
    <div class="w-full flex flex-col items-center">
      <div class="w-full">
        <div :id="id" class="flex flex-col items-center relative">
          <div class="w-full" @click="showDatalist = !showDatalist">
            <label
              v-if="label"
              class="block uppercase mb-1 text-xs font-bold"
              :for="`${id}-inputfield`"
            >
              {{ label }}
            </label>
            <div
              v-bind="$attrs"
              class="p-1 bg-white flex border border-gray-200 rounded-lg"
            >
              <span v-if="Boolean($slots.selected)">
                <slot name="selected" :item="selectedItem" />
              </span>
              <input
                v-else
                placeholder=""
                disabled
                :value="displayVal"
                class="bg-transparent p-1 pl-2 appearance-none outline-none w-full text-gray-800"
              />

              <div
                class="text-gray-300 py-1 pr-1 flex items-center border-gray-200"
              >
                <chevron-down-icon />
              </div>
            </div>
          </div>
          <div
            :class="{ hidden: !showDatalist }"
            class="absolute shadow bg-white top-100 z-40 left-0 rounded w-custom max-h-select overflow-y-auto mt-2 svelte-5uyqqj"
          >
            <div class="flex flex-col w-full p-2">
              <span class="mb-2 rounded-full">
                <icon-input
                  v-model="displayVal"
                  autocomplete="off"
                  class="border border-gray-600 rounded-full focus:outline-none"
                  type="search"
                  placeholder="Search"
                  v-bind="$attrs"
                >
                  <template #prepend>
                    <search-icon />
                  </template>
                </icon-input>
              </span>
              <div
                v-for="(item, i) in items"
                :key="i"
                class="cursor-pointer w-auto border-gray-100 rounded-xl hover:bg-white-cotton-ball"
                @click="selected(item)"
              >
                <template v-if="Boolean($slots.item)">
                  <slot name="item" :item="item" />
                </template>
                <div
                  v-else
                  class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative"
                >
                  {{ item.display || item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from "nuxt-property-decorator"
import ChevronDownIcon from "./icons/chevrondownprimary.vue"
import SearchIcon from "./icons/search.vue"
import IconInput from "@/components/IconInput.vue"

@Component({
  components: {
    ChevronDownIcon,
    IconInput,
    SearchIcon,
  },
})
export default class CornieSelect extends Vue {
  @Prop({ type: Array, default: [] })
  items!: any[]

  @Prop({ type: String, default: "" })
  modelValue!: string

  @PropSync("modelValue")
  modelValueSync!: string

  @Prop({ type: String })
  label!: string

  showDatalist = false
  id = ""

  get displayVal() {
    // if (!this.modelValue || this.items.length < 1) return

    // const selected = this.selectedItem
    // const toReturn = selected?.display || selected || ""

    return ""
  }

  get selectedItem() {
    const selected = this.items.find(
      (item) => item.code === this.modelValue || item === this.modelValue
    )
    return selected
  }

  selected(item: any) {
    this.$nextTick(() => {
      this.showDatalist = false
      this.modelValueSync = item.code || item
    })
  }

  created() {
    const slug = String(Math.random())
    this.id = `click-box-${slug}`
  }
}
</script>
<style scoped>
.top-100 {
  top: 100%;
}
.bottom-100 {
  bottom: 100%;
}
.max-h-select {
  max-height: 300px;
}
.w-custom {
  width: max-content;
}
</style>
