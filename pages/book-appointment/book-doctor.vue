<template>
	<div class="c-wrapper">
		<div class="mx-auto w-3/5 my-16">
			<div class="flex flex-col items-center justify-center text-center">
				<img
					src="/images/book-appointment/unsplash_gkZ-k3xf25w (1).png"
					alt=""
				/>
			</div>

			<div class="block text-center my-4">
				<h3 class="mt-4 c-indigo">Dr. Mike Obi | M</h3>

				<span class="text-grey-blue mt-2">Mikeobi@reddington.com</span><br />

				<div class="mt-4 flex items-center justify-center">
					<img
						class="mr-2"
						src="/images/book-appointment/appointment-select.png"
						alt=""
					/>
					24, November 2021 | 14:00
				</div>
			</div>

			<Question1 v-if="initial" @continue="continueToInsurance"/>

			<InsuranceQuestion v-if="insuranceQuestion" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import Question1 from "../book-appointment/component/Question1.vue"
import InsuranceQuestion from "../book-appointment/component/InsuranceQuestion.vue"
import CButton from "~/components/CButton.vue"
@Component({
  components: { CButton, Question1, InsuranceQuestion },
  layout: "book-appointment",
})
export default class BookDoctorPage extends Vue {
  initial: Boolean = true
  insuranceQuestion: Boolean = false

  continueToInsurance() {
    this.initial = false
    this.insuranceQuestion = true
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
