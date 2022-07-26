<template>
	<div>
		<div
			v-for="(doctor, index) in doctorsList"
			:key="index"
			class="flex items-center justify-between mt-6"
		>
			<div class="flex items-center">
				<img class="mr-4 w-14 h-14 rounded-full" :src="doctor.photo" alt="" />
				<div class="">
					<div class="mb-2 sub-titles-1">
						{{ doctor && doctor.name }}
					</div>
					<img :src="`/images/ratings/${doctor.rating}star.svg`" alt="" />
				</div>
			</div>
			<div>
				<c-button
					type="button"
					class="xl:mr-2 xl:mb-0 mb-6 xl:w-auto w-full"
					:primary="true"
					small
					@click="
						$router.push({
							path: `/patients/book-appointment/doctor/${doctor.id}/profile`,
						})
					"
				>
					View Availablity
				</c-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class ListOfDoctors extends Vue {
  doctorsList: Array<any> = []

  getDoctorsList() {
    return (this.doctorsList = [
      {
        id: "ereagetg",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Mike Obi",
        rating: "4",
      },
      {
        id: "wrgratrat",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Mike Obi",
        rating: "5",
      },
      {
        id: "gtetee5rw",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Mike Obi",
        rating: "6",
      },
      {
        id: "wwregyrewerq",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Sarah Smith",
        rating: "3",
      },
      {
        id: "wrtyrewer",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Sarah Smith",
        rating: "3",
      },
      {
        id: "ergtyrjterwe",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Sarah Smith",
        rating: "3",
      },
      {
        id: "rui894rngkaogij",
        photo: "/images/book-appointment/Avatar.png",
        name: "Dr Sarah Smith",
        rating: "3",
      },
    ])
  }

  created() {
    this.getDoctorsList()
  }
}
</script>

<style></style>
