<template>
	<span class="flex items-start flex-col">
		<label class="font-bold block text-xs mb-1"> {{ label }}</label>
		<input
			:modelValue="modelValue"
			:type="type"
			:placeholder="placeholder"
			:required="required"
			class="w-full border border-gray-300 p-2 rounded-md focus:outline-none text-sm shadow-sm"
			@input="$emit('input', $event.target.value)"
		/>
	</span>
</template>
<script>
export default {
  name: "CornieInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
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