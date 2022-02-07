<template>
	<div class="input-wrapper flex items-center p-4">
		<img class="mr-7" :src="inputIcon" alt="">
		<input class="c-input" type="text" :placeholder="placeholder">
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "InputComp",
  props: {
    inputIcon: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
})
</script>

<style scoped>
  .input-wrapper {
    border: 1px solid #000;
    border-radius: 4px;
  }

  .c-input {
    border: none;
  }

  .c-input:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    .c-input {
      width: inherit;
      font-size: 14px !important;
    }
  }
</style>