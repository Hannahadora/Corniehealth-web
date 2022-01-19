<template>
	<div>
		<button
			class="py-10"
			:class="{ 'primary-btn': primary, 'secondary-btn': secondary, 'tertiary-btn': tertiary, 'small-btn': small }"
		>
			{{ title }}
		</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "CButton",
  props: {
    title: {
      type: String,
      default: "",
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.btn {
  border-radius: 4px;
  line-height: 24px;
  font-size: 16px;
  font-weight: bold;
}
.primary-btn {
  background: #fff;
  padding: 10px 54px;
  border: 1px solid #080056;
}

.secondary-btn {
  background: #fe4d3c;
  padding: 10px 45px;
  color: #fff;
}

.tertiary-btn {
  background: #080056;
  color: #fff;
  padding: 16px 70px;
}

.small-btn {
  padding: 13px 23px !important;
  width: 196px !important;
}
</style>