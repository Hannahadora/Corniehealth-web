<template>
  <div>
    <TopNav />
    <Nuxt />
    <products-footer-2 />
    <CFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CFooter from "../components/CFooter.vue"
import ProductsFooter2 from "../components/Providers/ProductsFooter2.vue"
import TopNav from "../components/TopNav.vue"

import { namespace } from "vuex-class"
const user = namespace("user")

@Component({
  components: { TopNav, CFooter, ProductsFooter2 },
})
export default class ProductLayout extends Vue {
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
