<template>
	<div>
		<div class="flex items-center justify-between p-3">
			<p class="text-sm font-semibold">{{ title }}</p>
			<div v-if="!type2">
				<div v-if="showAccordionContent" class="flex">
					<p v-if="showText" class="mr-3 text-xs text-danger">See Less</p>
					<chevrondown-red
						class="cursor-pointer"
						@click="showAccordionContent = false"
					/>
				</div>
				<div v-else class="flex">
					<p v-if="showText" class="mr-3 text-xs text-danger">See More</p>
					<chevronright-red
						class="cursor-pointer"
						@click="showAccordionContent = true"
					/>
				</div>
			</div>
			<div v-else>
				<plus
					v-if="!showAccordionContent"
					class="cursor-pointer"
					@click="showAccordionContent = true"
				/>
				<minus
					v-else
					class="cursor-pointer"
					@click="showAccordionContent = false"
				/>
			</div>
		</div>
		<slot v-if="showAccordionContent"></slot>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { Prop } from "vue-property-decorator"
import ChevronRightIcon from "@/components/icons/chevronrightorange.vue";
import ChevronLeftIcon from "@/components/icons/chevronleftorange.vue";
// import { cornieClient } from "@/plugins/http";
import CornieBtn from "@/components/CButton.vue";
import Search from "@/components/icons/search.vue";
import ChevrondownRed from "@/components/icons/chevrondown-red.vue";
import ChevronrightRed from "@/components/icons/chevronright-red.vue";
import Plus from "@/components/icons/plus-icon-red.vue";
import Minus from "@/components/icons/minus-black.vue";

@Component({
  name: "ShoppingSideBar",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    CornieBtn,
    Search,
    ChevrondownRed,
    ChevronrightRed,
    Plus,
    Minus,
  },
})
export default class ShoppingSideBar extends Vue {
  @Prop({ type: String, default: "" })
    title!: string;

  @Prop({ type: Boolean, default: false })
    type2!: boolean;

  @Prop({ type: Boolean, default: false })
    showText!: boolean;

  loading: Boolean = true;
  showAccordionContent: Boolean = true;
}
</script>

<style scoped>
.sample-img {
  height: 110px;
  width: 200px;
}
</style>
