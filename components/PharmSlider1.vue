<template>
	<div class="">
		<div
			class="xl:grid hidden text-white bg-razzmataz-pry py-2"
			style="grid-template-columns: 4% 23% 23% 23% 23% 4%"
		>
			<div class="px-6 py-2">
				<img src="/images/nav/icon(10).png" alt="" />
			</div>
			<div
				class="px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
			>
				<img class="mb-4" src="/images/book-appointment.svg" alt="" />
				<span class="sub-titles-1">Malaria</span>

				<p class="text-base mt-4">Coartem + 2 more.</p>
			</div>
			<div
				class="px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
			>
				<img
					class="mb-4"
					src="/images/appointments/healthicons_doctor-male-outline.png"
					alt=""
				/>
				<span class="sub-titles-1">Cold & Cough</span>

				<p class="text-base mt-4">Actifed + 3 more</p>
			</div>
			<div
				class="px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
			>
				<img class="mb-4" src="/images/carbon_medication.svg" alt="" />
				<span class="sub-titles-1">Erectile Medication</span>

				<p class="text-base mt-4">Viagra + 1 more</p>
			</div>
			<div
				class="px-6 py-2 border-white xl:block flex flex-col items-center justify-center"
			>
				<img class="mb-4" src="/images/carbon_result.svg" alt="" />
				<span class="sub-titles-1">Blood Pressure</span>

				<p class="text-base mt-4">Norvasc + 2 more</p>
			</div>
			<div class="px-6 py-2">
				<img src="/images/nav/icon(11).png" alt="" />
			</div>
		</div>

		<div class="mt-20 xl:hidden block">
			<hooper :settings="hooperSettings">
				<slide
				><div
					class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
				>
					<img class="mb-4" src="/images/book-appointment.svg" alt="" />
					<span class="sub-titles-1">Malaria</span>

					<p class="text-base mt-4">Coartem + 2 more.</p>
				</div>
				</slide>
				<slide
				><div
					class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
				>
					<img
						class="mb-4"
						src="/images/appointments/healthicons_doctor-male-outline.png"
						alt=""
					/>
					<span class="sub-titles-1">Cold & Cough</span>

					<p class="text-base mt-4">Actifed + 3 more</p>
				</div>
				</slide>
				<slide>
					<div
						class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
					>
						<img class="mb-4" src="/images/carbon_medication.svg" alt="" />
						<span class="sub-titles-1">Erectile Medication</span>

						<p class="text-base mt-4">Viagra + 1 more</p>
					</div>
				</slide>
				<slide
				><div
					class="h-28 text-white bg-razzmataz-pry px-6 py-2 border-r border-white xl:block flex flex-col items-center justify-center"
				>
					<img class="mb-4" src="/images/carbon_result.svg" alt="" />
					<span class="sub-titles-1">Blood Pressure</span>

					<p class="text-base mt-4">Norvasc + 2 more</p>
				</div>
				</slide>

				<hooper-pagination slot="hooper-addons"></hooper-pagination>
			</hooper>
		</div>
	</div>
</template>

<script>
// import CSwiper from "./CSwiper.vue"

import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "PharmSlider1",
  components: {
    // CSwiper,
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          1280: {
            itemsToShow: 3,
          },

          1024: {
            itemsToShow: 2,
          },

          768: {
            itemsToShow: 1,
          },
        },
      },
    }
  },
}
</script>
