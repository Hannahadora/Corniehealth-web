<template>
	<div class="c-wrapper w-full">
		<div class="mt-16 mb-12 flex items-center">
			<NuxtLink
				to="/book-appointment/search-result/doctors"
				class="mr-6 pb-4 flex items-center"
			>
				<img
					class="mr-2 sub-titles-1"
					src="/images/book-appointment/Icon-doctor.png"
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
					src="/images/book-appointment/Icon-doctor.png"
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
					src="/images/book-appointment/Icon-doctor.png"
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
  filter: grayscale(0%);
}
a.nuxt-link-active {
  border-bottom: 3px solid #fe4d3c;
  color: #14171F !important;
}

a.nuxt-link-active img{
  filter: grayscale(100%);
}
</style>
