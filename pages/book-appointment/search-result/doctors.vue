<template>
	<div>
		<div class="flex items-center mb-12">
			<cornie-select />
		</div>

		<div class="info-container p-6 w-full flex items-start mb-12">
			<div class="w-4/12 border-r">
				<div class="flex items-center">
					<img class="mr-4" src="/images/book-appointment/Avatar.png" alt="" />
					<div class="">
						<h3 class="mr-4">Dr. Sarah Smith | F</h3>
						<img src="/images/book-appointment/ratings.png" alt="" />
					</div>
				</div>

				<div class="mt-8 xl:grid block grid-cols-1 gap-x-8 gap-y-8">
					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (2).png"
							alt=""
						/>
						<div>
							<p class="mr-2">Dentist</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/science_black_24dp 1.png"
							alt=""
						/>
						<div>
							<p class="mr-2">Mk Labs</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (6).png"
							alt=""
						/>
						<div>
							<p class="mr-2">234 Admiralty Way Lekki, Lagos</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (4).png"
							alt=""
						/>
						<div>
							<p class="mr-2">+234 813 563 8883</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon (1).png"
							alt=""
						/>
						<div>
							<p class="mr-2">20 Years</p>
						</div>
					</div>

					<div class="flex items-start">
						<img class="mr-2" src="/images/book-appointment/icon.png" alt="" />
						<div>
							<p class="mr-2">Consultation Fee starts from ₦ 20,000</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-lang.png"
							alt=""
						/>
						<div>
							<p class="mr-2">English | Yoruba</p>
						</div>
					</div>
				</div>
			</div>

			<div class="w-8/12 pl-6">
				<div class="flex items-center justify-between">
					<span class="sub-titles-1 text-razzmataz-pry"
					>Doctor’s Availability</span
					>
				</div>

				<div class="flex items-center justify-end">
					<c-button
						type="button"
						class="mr-2"
						:primary="true"
						small
						@click="$router.push({path: '/book-appointment/profile'})"
					>
						View profile
					</c-button>
					<c-button
						type="button"
						:secondary="true"
						small
						@click="$router.push({path: '/book-appointment/book-doctor'})"
					>
						Book Appointment
					</c-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CornieSelect from "~/components/CornieSelect.vue"
@Component({
  components: { CornieSelect },
})
export default class DoctorsPage extends Vue {

}
</script>
