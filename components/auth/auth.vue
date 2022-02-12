<template>
  <div
    class="px-5 w-full h-screen bg-primary lg:grid grid-cols-12 overflow-y-auto overflow-x-hidden py-5 md:py-0"
  >
    <div class="lg:col-span-6 lg:h-full lg:relative lg:pr-20">
      <nuxt-link to="/" class="lg:absolute top-3 left-0 cursor-pointer z-40">
        <logo-icon />
      </nuxt-link>

      <div
        class="relative bottom-0 overflow-hidden mx-auto w-full h-full md:w-3/4"
      >
        <img
          v-if="!$slots.image"
          src="@/static/images/smiling_lady.png"
          class="w-full h-full"
        />
        <slot name="image"></slot>
        <div
          v-if="$slots.banner"
          class="absolute h-auto w-full bg-primary left-0 right-0 bottom-0 z-10 mr-10 p-3 flex flex-col justify-center items-center text-white"
        >
          <slot name="banner"></slot>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6">
      <slot />
    </div>
  </div>
</template>

<script>
import LogoIcon from "../icons/logo.vue"
export default {
  name: "AuthContainer",
  components: {
    LogoIcon,
  },
}
</script>

<style scoped>
::-webkit-scrollbar-thumb {
  background-color: #080056;
  height: 0.5rem;
  display: none;
  outline: 1px solid slategrey;
}
::-webkit-scrollbar-track {
  box-shadow: none;
  width: 0.75rem;
}

.img-container {
  height: 600px;
  width: 601px;
}
</style>
