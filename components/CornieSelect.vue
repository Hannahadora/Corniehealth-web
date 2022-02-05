<template>
  <div
    class="flex flex-col items-center border border-gray-300 rounded-md shadow-sm"
  >
    <div class="w-full flex flex-col items-center">
      <div class="w-full">
        <div class="flex flex-col items-center relative" :id="id">
          <div class="w-full" @click="toggle">
            <label
              v-if="label || $slots.label"
              class="flex space-x-55 justify-between w-full capitalize mb-1 text-black text-sm font-semibold"
              :for="`${id}-inputfield`"
            >
              <slot name="label" v-if="$slots.label" />
              <template v-else>
                {{ label }}
              </template>
              <div class="float-right cursor-pointer fill-current text-primary">
                <slot name="misc" />
              </div>
              <span class="text-danger ml-1" v-if="required"> * </span>
              <span class="ml-1 mb-1" v-if="$slots.labelicon">
                <slot name="labelicon" />
              </span>
            </label>
            <div>
              <div
                class="p-1 bg-white flex border-1 border-gray-300 rounded-md"
              >
                <input
                  :placeholder="placeholder"
                  disabled
                  :value="displayVal"
                  @input="$emit('input', $event.target.value)"
                  class="py-0.5 bg-transparent w-full h-full outline-none w-full text-gray-800"
                />

                <div
                  class="text-gray-300 py-1 pr-1 flex items-center border-gray-200"
                >
                  <chevron-down-icon />
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute shadow bg-white top-100 z-40 w-full lef-0 border border-gray-400 rounded max-h-select overflow-y-auto mt-2 svelte-5uyqqj"
            :class="[showDatalist ? 'block' : 'hidden']"
          >
            <div class="flex flex-col w-full p-2">
              <div
                v-for="(item, i) in items"
                :key="i"
                @click="selected(item)"
                class="cursor-pointer w-full border-gray-100 rounded-xl hover:bg-white-cotton-ball"
              >
                <div
                  class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative capitalize"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { clickOutside } from "@/plugins/utils"
import ChevronDownIcon from "./icons/chevrondownprimary.vue"

export default {
  name: "cornie-select",
  components: {
    ChevronDownIcon,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: "--Select--",
    },
    label: String,
    required: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
    labelicon: String,
  },
  mounted() {
    // clickOutside(this.id, () => {
    //   if (this.showDatalist) this.showDatalist = false
    // })
  },
  created() {
    const slug = String(Math.random())
    this.id = `click-box-${slug}`
  },
  data() {
    return {
      showDatalist: false,
      id: "",
      modelValue: "",
    }
  },
  watch: {
    modelValue() {
      this.$emit("change-select", this.modelValue)
    },
  },
  computed: {
    inputName: {
      get() {
        const id = Math.random().toString(36).substring(2, 9)
        return `select-${id}`
      },
    },
    displayVal: {
      get() {
        if (this.items.length < 1) return

        return this.modelValue
      },
    },
  },
  methods: {
    toggle() {
      if (this.readonly) return
      this.showDatalist = !this.showDatalist
    },

    selected(item) {
      this.$emit("changed", item)
      this.showDatalist = false
      this.modelValue = item
    },
  },
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
::placeholder {
  font-size: 0.8em;
  font-weight: 400;
  font-style: italic;
  color: #667499;
}
</style>
