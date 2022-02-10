<template>
	<div class="c-wrapper w-full">
		<div class="mt-16 mb-12 flex items-center">
			<NuxtLink
				to="/book-appointment/search-result/doctors"
				class="mr-6 pb-4 flex items-center"
			>
				<img
					class="mr-2 sub-titles-1"
					src="/images/book-appointment/Icon-doctor-black.png"
					alt=""
				/>
				<span class="text-grey-eth font-bold">Doctors</span>
			</NuxtLink>
			<NuxtLink
				to="/book-appointment/search-result/hospitals"
				class="mr-6 pb-4 flex items-center"
			>
				<img
					class="mr-2 sub-titles-1"
					src="/images/book-appointment/Icon-hospital-black.png"
					alt=""
				/>
				<span class="text-grey-eth font-bold">Hospital/Clinic</span>
			</NuxtLink>
 
			<NuxtLink
				to="/book-appointment/search-result/labs"
				class="mr-6 pb-4 flex items-center"
			>
				<img
					class="mr-2 sub-titles-1"
					src="/images/book-appointment/Icon-lab-black.png"
					alt=""
				/>
				<span class="text-grey-eth font-bold">Labs</span>
			</NuxtLink>
		</div>

		<NuxtChild />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
  layout: "book-appointment",
})
export default class SearchResult extends Vue {}
</script>

<style scoped>
img {
  filter: brightness(8.5);
}
a.nuxt-link-active {
  border-bottom: 3px solid #fe4d3c;
}

a.nuxt-link-active span{
  color: #14171F !important;
}

a.nuxt-link-active img{
  filter: brightness(1);
}
</style>
