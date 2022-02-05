<template>
  <span class="flex items-left flex-col">
    <label class="font-bold block text-xs mb-1"> {{ label }}</label>
    <input
      :modelValue="modelValue"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="border border-gray-300 p-2 rounded-md focus:outline-none text-sm shadow-sm"
    />
  </span>
</template>
<script>
export default {
  name: "cornie-input",
  inheritAttrs: false,
  props: {
    label: String,
    modelValue: String,
    placeholder: String,
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    text: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit("update:modelValue", val)
      },
    },
  },
}
</script>
