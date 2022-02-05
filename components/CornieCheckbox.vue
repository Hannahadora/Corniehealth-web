<template>
  <div class="flex items-center my-2">
    <input
      class="rounded-lg border-2 border-gray-400 p-2 w-5 h-5 focus:outline-none cursor-pointer"
      v-bind="$attrs"
      v-model="checked"
      :required="required"
      @change="$emit('change', $event.target.checked)"
      type="checkbox"
    />
    <span class="ml-2 text-sm">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "cornie-checkbox",
  inheritAttrs: false,
  props: {
    name: String,
    label: String,
    required: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    checked: false,
  }),
  computed: {
    inputName: {
      get() {
        const id = Math.random().toString(36).substring(2, 9)
        return this.name || `input-${id}`
      },
    },
  },
}
</script>

<style scoped>
input[type="checkbox"]:after {
  border: 1px solid #c4bdbd !important;
}
input[type="checkbox"]:checked:after {
  background-color: #ff0000 !important;
}
</style>
