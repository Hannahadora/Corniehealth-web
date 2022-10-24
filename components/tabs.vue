<template>
  <div>
    <div class="md:flex w-full font-semibold py-2 mx-auto mt-4">
      <template v-for="(tab, index) in items">
        <a
          :key="`tab-${index}`"
          :href="`#${iddata}`"
          class="block md:flex px-3 py-2 border-b-4 text-sm cursor-pointer hover:bg-gray-300 hover:bg-opacity-20"
          :class="
            syncedValue == index
              ? ['border-danger text-black font-semibold']
              : ['text-gray-400']
          "
          @click="syncedValue = index"
        >
          {{ tab }}
        </a>
      </template>
      <span class="block md:flex px-3 pb-2 md:border-b-4 flex-grow"></span>
    </div>
    <tab :vnode="component" :id="iddata" />
  </div>
</template>

<script lang="ts">
import { VNode } from "@vue/runtime-core"
import { Component, Vue, Prop, Watch, PropSync } from "nuxt-property-decorator"

@Component({
  name: "tab",
})
class Tab extends Vue {
  @Prop()
  vnode!: VNode

  render() {
    return this.vnode
  }
}

@Component({
  name: "tabs",
  components: {
    Tab,
  },
})
export default class Tabs extends Vue {
  @Prop()
  items!: string[]

  @Prop({ type: String, default: "" })
  iddata!: string

  @PropSync("modelValue", { type: Number, default: 0 })
  syncedValue!: number

  isActive(index: number): boolean {
    return index == this.syncedValue
  }

  get component() {
    //@ts-ignore
    return this.$slots?.default[this.syncedValue] || ""
  }
  mounted() {
    console.log("slots", this.$slots)
  }
}
</script>
