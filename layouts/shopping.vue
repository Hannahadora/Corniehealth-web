<template>
	<div>
		<TopNav />
		<div
			class="bg-center bg-cover bg-no-repeat mb-16"
			style="background: url('/images/about/img 6.png'); height: 450px"
		>
			<div class="xl:px-32 xl:pt-48 pt-24 pb-64 text-center">
				<h1 class="c-indigo mb-2">Pharmacy</h1>
				<p class="flex items-center justify-center">
					<img class="mr-2" src="/images/nav/home.svg" alt="" />
					<span class="mr-2">Home /</span>
					<img class="mr-2" src="/images/nav/about.svg" alt="" />
					<span class="mr-2 text-razzmataz-pry">Pharmacy</span>
				</p>
			</div>
		</div>
		<Nuxt />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { namespace } from "vuex-class"
import TopNav from "../components/TopNav.vue"
const user = namespace("user")
@Component({
  components: { TopNav },
})
export default class ShoppingLayout extends Vue {


  @user.Action
    findUser!: () => void

  @user.Mutation
    SET_TOKEN!: (token: any) => void


  async created() {
    if (this.$route.query.token) {
      await this.SET_TOKEN(this.$route.query.token)
      await this.findUser()
    }
    if (this.$route.query.practitioner) {
      await this.$store.dispatch(
        "practitioners/getAPractitionerProfile",
        this.$route.params.id
      )
    }
  }
}
</script>

<style></style>
