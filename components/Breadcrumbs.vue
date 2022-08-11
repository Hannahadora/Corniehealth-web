<template>
	<div>
		<div class="bg-cblue-100 xl:px-32 py-16 h-52 text-center relative">
			<h1 class="c-indigo mb-2 capitalize">{{ routeName }}</h1>
			<p class="flex items-center justify-center">
				<img class="mr-2" src="/images/nav/home.svg" alt="" />
				<nuxt-link to="/" class="mr-2">Home /</nuxt-link>
				<img class="mr-2" src="/images/nav/about.svg" alt="" />
				<span class="text-razzmataz-pry capitalize">{{ routeName }}</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class Breadcrumbs extends Vue {
  get routeName() {
    if (this.$route.path?.includes("/")) {
      const path: any = this.$route.path?.split("/")
      const name = path[path.length - 1]
      const rName = name.includes("-") ? name.split("-").join(" ") : name
      return rName
    } else return this.$route.name
  }
}
</script>

<style></style>
