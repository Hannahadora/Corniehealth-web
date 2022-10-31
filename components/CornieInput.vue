<template>
	<div>
		<div v-bind="$attrs" class="w-full">
			<label
				class="flex capitalize items-center mb-1 text-black text-sm font-semibold"
			>
				<slot name="label">
					{{ label }}
				</slot>
				<span v-if="$slots.labelicon" class="ml-1 mb-1">
					<slot name="labelicon" />
				</span>
				<span v-if="required" class="text-danger ml-1"> * </span>
			</label>
			<div class="flex rounded-md border-1">
				<div
					v-if="$slots.prepend"
					class="border-r-2 rounded-lg p-2 bg-white flex items-center justify-center"
					style="border-top-right-radius: 0; border-bottom-right-radius: 0"
				>
					<slot name="prepend" />
				</div>
				<div
					v-if="$slots['prepend-inner']"
					class="rounded-lg pl-2 bg-white flex items-center justify-center"
					style="border-top-right-radius: 0; border-bottom-right-radius: 0"
				>
					<slot name="prepend-inner" />
				</div>
				<input
					v-model="valueSync"
					class="p-2 rounded-lg focus:outline-none w-full"
					:style="{
						'border-top-left-radius: 0; border-bottom-left-radius: 0':
							$slots.prepend,

						'border-top-right-radius: 0; border-bottom-right-radius: 0':
							$slots.append,
					}"
					:placeholder="$attrs.placeholder || '--Enter--'"
					:name="inputName"
					:readonly="readonly || disabled"
					:class="{ 'bg-gray-100 border-gray-100': disabled }"
					@keyup.enter="$emit('keyenter')"
					@update:modelValue="handleChange"
				/>
				<div
					v-if="$slots['append-inner']"
					class="rounded-lg pr-2 bg-white flex items-center justify-center"
					style="border-top-left-radius: 0; border-bottom-left-radius: 0"
				>
					<slot name="append-inner" />
				</div>
				<div
					v-if="$slots.append"
					class="border-l-2 rounded-lg pr-2 bg-white flex items-center justify-center"
					style="border-top-left-radius: 0; border-bottom-left-radius: 0"
				>
					<slot name="append" />
				</div>
			</div>
			<span v-if="errorMessage" class="text-xs text-red-500 block">
				{{ errorMessage }}
			</span>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from "nuxt-property-decorator"

@Component({
  inheritAttrs: false,
  name: "CornieInput",
})
export default class CornieInput extends Vue {
  @Prop({ type: String, default: "" })
    modelValue!: string

  @PropSync("modelValue")
    valueSync!: string

  @Prop({ type: String, default: "" })
    label!: string

  @Prop({ type: String, default: "" })
    labelicon!: string

  @Prop({ type: String })
    name!: string

  @Prop({ type: Boolean, default: false })
    required!: boolean

  @Prop({ type: Boolean, default: false })
    readonly!: boolean

  @Prop({ type: Boolean, default: false })
    disabled!: boolean

  @Prop({ type: Object, default: {} })
    errorClasses!: Object

  get inputName() {
    const id = Math.random().toString(36).substring(2, 9)
    return this.name || `input-${id}`
  }

  @Prop({ type: Object })
    rules!: any
}
</script>
<style scoped>
::placeholder {
  font-size: 0.8em;
  font-weight: 400;
  color: #667499;
}
</style>
