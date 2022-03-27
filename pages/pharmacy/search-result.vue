<template>
  <div>
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
    <nuxt-child></nuxt-child>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
@Component({
  components: {},
})
export default class searchResult extends Vue {}
</script>

<style></style>
