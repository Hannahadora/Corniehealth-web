<template>
	<div class="shadow-md -mb-5 p-3 w-full h-auto">
		<div class="w-full">
			<div
				class="h-11 w-full flex items-center border-b-2 justify-between"
				:class="{
					'rounded-t-xl': first && expand,
				}"
			>
				<div
					class="font-bold text-md text-primary mb-1"
					:class="{ 'text-primary': expand }"
				>
					{{ title }}
				</div>
				<span class="flex items-center">
					<span
						class="mr-3 cursor-pointer"
						:class="{ 'fill-current text-white': expand }"
					>
						<slot name="misc" />
					</span>
					<chevron-down-icon
						v-if="expand"
						class="cursor-pointer stroke-current"
						:class="{ 'text-danger': expand }"
						@click="expand = false"
					/>
					<chevron-right-icon
						v-else
						class="cursor-pointer stroke-current"
						:class="{ 'text-danger': expand }"
						@click="expand = true"
					/>
				</span>
			</div>
			<div v-if="expand"><slot name="default" /></div>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "nuxt-property-decorator"
import ChevronRightIcon from "@/components/icons/dialogchevronright.vue";
import ChevronDownIcon from "@/components/icons/dialogchevrondown.vue";

@Component({
  name: "Accordion",
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

  expand = false;

  @Prop({ type: Boolean, default: false })
    opened!: boolean;

  @Watch("opened")
  toggled() {
    this.expand = this.opened;
  }

  @Prop({ type: String, default: "" })
    titledescription!: string;

  mounted() {
    this.expand = this.opened;
  }
}
</script>
