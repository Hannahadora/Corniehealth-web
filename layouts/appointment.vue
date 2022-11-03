<template>
	<div>
		<TopNav />
		<Nuxt class="xl:mt-32 mt-28" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import TopNav from "../components/TopNav.vue"
import { namespace } from "vuex-class"
const user = namespace("user")
@Component({
	components: { TopNav },
})
export default class AppointmnetLayout extends Vue {


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
