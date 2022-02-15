<template>
  <div class="input-wrapper flex items-center py-4 px-5">
    <img class="xl:mr-6 mr-4" :src="inputIcon" alt="" />
    <input
      :modelValue="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="w-10/12 focus:outline-none  text-sm"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComp",
  inheritAttrs: false,
  props: {
    inputIcon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
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

<style scoped>
.input-wrapper {
  border: 1px solid #c5c4d4;
  box-sizing: border-box;
  border-radius: 4px;
}

.c-input {
  border: red;
}

@media screen and (max-width: 1024px) {
  .c-input {
    font-size: 14px !important;
  }
}
</style>
