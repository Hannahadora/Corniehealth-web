<template>
	<div class="c-wrapper">
		<back-btn class="mt-28" />
		<div class="mx-auto xl:w-3/5 w-full my-12">
			<div class="flex flex-col items-center justify-center text-center">
				<img
					class="w-40 h-40 rounded-full border"
					:src="practitioner.photo"
					alt=""
				/>
			</div>

			<div class="block text-center my-4">
				<h3 class="mt-4 c-indigo">{{ practitioner && practitioner.designation }}. {{ practitioner && practitioner.name }} | </h3>

				<span class="text-grey-blue mt-2">{{ practitioner && practitioner.email }}</span><br />

				<div class="mt-4 flex items-center justify-center">
					<img
						class="mr-2"
						src="/images/book-appointment/appointment-select.png"
						alt=""
					/>
					{{ activeDate }} | {{ activeTime }}
				</div>
			</div>

			<nuxt-child></nuxt-child>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import CButton from "~/components/CButton.vue"
import BackBtn from "~/components/BackBtn.vue"
const practitioners = namespace("practitioners")
@Component({
  components: { CButton, BackBtn },
  layout: "book-appointment",
})
export default class BookDoctorPage extends Vue {
  practitioner = <any>{}
  @practitioners.Getter
    selectedPractitioner!: {}

  async created() {
    await this.$store.dispatch(
      "practitioners/getAPractitionerProfile",
      this.$route.params.id
    )
    this.practitioner = {
      ...this.selectedPractitioner,
    }
  }

  get activeDate() {
    return this.practitioner && new Date(this.practitioner?.activeSince).toLocaleDateString()
  }

  get activeTime() {
    return this.practitioner && new Date(this.practitioner?.activeSince).toLocaleTimeString()
  }


}
</script>

<style scoped>
.ap-card {
  background: #f0f4fe;
  border: 0.5px solid #c2c7d6;
  box-shadow: 0px 15px 40px rgba(20, 31, 21, 0.04);
  border-radius: 8px;
}

.time-card {
  background: #ffffff;
  border: 1px solid #c2c7d6;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
