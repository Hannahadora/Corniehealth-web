<template>
	<div>
		<div class="info-container xl:p-6 p-4 xl:mb-0 mb-8">
			<div class="w-full xl:pb-0 pb-8">
				<div class="flex items-center">
					<img
						class="mr-4 w-16 h-16 rounded-full"
						:src="practitioner.photo"
						alt=""
					/>
					<div class="">
						<div class="mr-4 sub-titles-1">
							{{ practitioner.name }}
						</div>
						<div class="mt-1 text-base">
							{{ practitioner.designation }}
						</div>
						<img
							:src="`/images/ratings/${practitioner.rating}star.svg`"
							alt=""
						/>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-1 gap-4">
					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-doctor-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">{{ practitioner.specialty }}</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-doctor-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">Visit Type - {{ practitioner.visitType }}</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/icon-lang-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">{{ practitioner.language }}</p>
						</div>
					</div>

					<div class="flex items-start">
						<img
							class="mr-2"
							src="/images/book-appointment/Icon-fee-white.png"
							alt=""
						/>
						<div>
							<p class="mr-2">
								Consultation Fee - {{ practitioner.consultationRate }}
							</p>
						</div>
					</div>
				</div>

				<div
					class="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-6 mt-8"
				>
					<c-button
						type="button"
						class="xl:mr-6 xl:mb-0 mb-6 xl:w-1/2 w-full"
						:primary="true"
						small
						@click="$emit('viewProfile')"
					>
						View profile
					</c-button>
					<c-button
						class="xl:w-1/2 w-full"
						type="button"
						:secondary="true"
						small
						@click="$emit('openAppointmentModal')"
					>
						Book Appointment
					</c-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "ReviewsInfo",
  props: {
    practitioner: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style></style>
