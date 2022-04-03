<template>
	<div class="w-full">
		<div
			class="cursor-pointer h-11 w-full flex items-center justify-between px-3 border-2"
			:class="{
				'border-0  text-base text-jet_black font-bold': expanded,
				'rounded-t-xl': first && expanded,
			}"
			@click="handle"
		>
			<div class="font-semibold" :class="{ 'text-jet_black': expanded }">
				{{ title }}
			</div>
			<span class="flex items-center">
				<span
					class="mr-3 cursor-pointer"
					:class="{ 'fill-current text-white': expanded }"
				>
					<slot name="misc" :expanded="expanded" />
				</span>
				<chevron-down-icon
					v-if="expanded"
					class="cursor-pointer stroke-current"
					:class="{ 'text-jet_black': expanded }"
					@click="hide"
				/>
				<chevron-right-icon
					v-else
					class="cursor-pointer stroke-current"
					:class="{ 'text-jet_black': expanded }"
					@click="expand"
				/>
			</span>
		</div>
		<div v-if="expanded"><slot name="default" /></div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator"
import ChevronDownIcon from "./icons/chevrondown.vue";
import ChevronRightIcon from "@/components/icons/chevronright.vue";

@Component({
  // name: "AccordionItem",
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
  },
})

export default class AccordionComponent extends Vue {
  @Prop({ type: String, default: "" })
    title!: string;

  @Prop({ type: Boolean, default: false })
    first!: boolean;

  @Prop({ type: Boolean, default: false })
    modelValue!: boolean;

  expanded = false;

  expand() {
    this.expanded = true;
    this.$emit("update:modelValue", true);
  }

  hide() {
    this.expanded = false;
    this.$emit("update:modelValue", false);
  }

  @Prop({ type: String, default: "" })
    titledescription!: string;

  @Watch("modelValue")
  updateVisibility() {
    this.expanded = this.modelValue;
  }

  handle() {
    if (this.expanded) this.hide();
    else this.expand();
  }

  created() {
    this.expanded = Boolean(this.modelValue);
  }
}
</script>
