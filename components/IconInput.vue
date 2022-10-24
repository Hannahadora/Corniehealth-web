<template>
	<div
		:class="[width]"
		class="relative text-gray-600 py-2 focus-within:text-gray-400"
	>
		<span
			v-if="prepend"
			class="absolute inset-y-0 left-0 flex items-center pl-2"
		>
			<div class="p-1 focus:outline-none focus:shadow-outline">
				<slot name="prepend" />
			</div>
		</span>
		{{ valueSync }}
		<ValidationProvider
			v-slot="{ errorMessage, valid, field }"
			v-model="valueSync"
			:name="inputName"
			:rules="rules"
		>
			<input
				v-model="valueSync"
				v-bind="{ ...$attrs, ...field }"
				:type="$attrs.type || 'search'"
				:autocomplete="$attrs.autocomplete || 'off'"
				class="py-1 text-sm text-black rounded-md w-full focus:outline-none"
				:class="{
					'pl-10': prepend,
					'pr-10': append,
					'pl-2': !prepend,
					'pr-2': !append,
					'border-red-500': Boolean(errorMessage),
					'border-green-400': valid,
				}"
				@blur="$emit('blur')"
			/>
		</ValidationProvider>

		<span
			v-if="append"
			class="absolute inset-y-0 right-0 flex items-center pr-2"
		>
			<div class="p-1 focus:outline-none focus:shadow-outline">
				<slot name="append" />
			</div>
		</span>
	</div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from "nuxt-property-decorator"
import { ValidationObserver, ValidationProvider } from "vee-validate"

@Component({
  inheritAttrs: false,
  name: "IconInput",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class IconInput extends Vue {
  @Prop({ type: String })
    modelValue!: string

  @PropSync("modelValue")
    valueSync!: string

  @Prop({ required: false, default: "" })
    width!: string

  @Prop({ type: Object })
    rules!: any

  get inputName() {
    const id = Math.random().toString(36).substring(2, 9)
    return `input-${id}`
  }

  get prepend() {
    return Boolean(this.$slots.prepend)
  }

  get append() {
    return Boolean(this.$slots.append)
  }
}
</script>
<style scoped>
.rounded-r-none {
  border-radius: 9999px;
}
</style>
