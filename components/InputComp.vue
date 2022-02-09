<template>
	<div class="input-wrapper flex items-center p-4">
		<img class="xl:mr-6 mr-4" :src="inputIcon" alt="">
		<input v-model="content" class="c-input w-10/12" type="text" :placeholder="placeholder" />
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
  },
  data() {
    return {
      content: ""
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

  @media screen and (max-width: 1024px) {
    .c-input {
      font-size: 14px !important;
    }
  }
</style>