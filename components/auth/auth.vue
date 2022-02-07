<template>
	<div
		class="px-10 w-full h-screen bg-primary grid grid-cols-12 overflow-y-auto overflow-x-hidden"
	>
		<div class="col-span-6 h-full relative pr-20">
			<nuxt-link to="/" class="absolute top-3 left-0 cursor-pointer z-40">
				<logo-icon />
			</nuxt-link>

			<div class="img-container h-3/4 absolute bottom-0">
				<img
					v-if="!$slots.image"
					src="@/static/images/smiling_lady.svg"
					class="w-full h-full"
				/>
				<slot name="image"></slot>
			</div>
			<div
				v-if="$slots.banner"
				class="absolute h-auto bg-primary bg-opacity-60 left-0 right-0 bottom-10 z-10 mr-10 p-3 flex flex-col justify-center items-center text-white"
			>
				<slot name="banner"></slot>
			</div>
		</div>

		<div class="col-span-6">
			<slot />
		</div>
	</div>
</template>

<script>
import LogoIcon from "../icons/logo.vue"
export default {
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
