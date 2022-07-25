<template>
	<div>
		<div class="info-container p-6 mb-12">
			<div class="flex items-start mb-8">
				<img
					class="mr-4 hospital-icon"
					src="/images/book-appointment/unsplash_gkZ-k3xf25w.png"
					alt=""
				/>
				<div class="w-3/5">
					<div class="mb-2 flex items-center">
						<span class="sub-titles-1 mr-2">Reddington Hospital</span>
						<img src="/images/book-appointment/ratings.png" alt="" />
					</div>
					<div class="mb-2">www.reddington.com.ng | +234 802 000 0000</div>
					<div class="">234 Admiralty Way Lekki, Lagos, Nigeria | +2</div>
				</div>
				<div class="w-1/5">
					<div class="lg:mb-2 mb-4 flex items-start">
						<img
							class="mr-3"
							src="/images/book-appointment/icon-date-white.png"
							alt=""
						/>
						<span class="">Active since 1st May 2021</span>
					</div>
					<div class="lg:mb-2 mb-4 flex items-start">
						<img
							class="mr-3"
							src="/images/book-appointment/icon-sethos-grey.png"
							alt=""
						/>
						<span class="">23 Doctors</span>
					</div>
					<div class="lg:mb-2 mb-4 flex items-start">
						<img
							class="mr-3"
							src="/images/book-appointment/icon-patients-grey.png"
							alt=""
						/>
						<span class="">1034 Patients seen</span>
					</div>
				</div>
			</div>

			<div class="mb-8 flex items-start col-span-2">
				<img
					class="mr-3"
					src="/images/book-appointment/icon-doctor-grey.png"
					alt=""
				/>
				<div class="">
					Specialties (10): General Practice <b>(4)</b> | OBGTN <b>(4)</b> |
					Pediatrics <b>(7)</b> | Emergency Medicine <b>(3)</b> | Pathologist
					<b>(5)</b> +6
				</div>
			</div>

			<div v-if="!$route.params.id" class="mt-10">
				<c-button
					type="button"
					secondary
					small
					@click="
						$router.push({
							path: `/patients/book-appointment/hospital/${hospitalId}/info`,
						})
					"
				>View Profile</c-button
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CButton from "~/components/CButton.vue"
import SelectGroup from "~/components/SelectGroup.vue"
@Component({
  components: { CButton, SelectGroup },
})
export default class HospitalsPage extends Vue {
  search: string = "";
  hospitalId: string = "hjkjhjk89hdj09"
}
</script>

<style scoped>
.hospital-icon {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
</style>
