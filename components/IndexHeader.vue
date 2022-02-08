<template>
  <div class="intro-wrapper relative">
    <div class="text-center xl:pt-24 pt-12">
      <div class="flex items-center justify-center">
        <img
          class="mr-2 lg:block hidden"
          src="/images/good health.svg"
          alt=""
        />
        <p>Connected. Patient-Centric. Supportive.</p>
      </div>
      <h1 class="my-2 c-indigo">
        Find the best doctors <br class="xl:block hidden" />
        and other healthcare providers.
      </h1>
      <p class="mb-14">
        View all practice information and ratings, no calls or messaging
        required
      </p>

      <div
        class="xl:w-full lg:w-2/3 w-full mx-auto flex xl:flex-row flex-col items-center justify-center"
      >
        <input-comp
          class="xl:mr-2 xl:mb-0 xl:w-2/5 xl:flex hidden"
          input-icon="/images/search.svg"
          placeholder="Provider name, practice name or specialty"
        />
        <input-comp
          class="w-full mb-4 xl:hidden flex"
          input-icon="/images/search.svg"
          placeholder="Name or specialty"
        />
        <input-comp
          class="xl:mr-2 mr-0 xl:mb-0 mb-4 xl:w-2/5 w-full"
          input-icon="/images/cil_location-pin.svg"
          placeholder="City name or Zip/Postal code"
        />
        <div class="xl:w-1/5 w-full">
          <c-button type="button" class="w-full" :tertiary="true">Search</c-button>
        </div>
      </div>
      <div>
        <img
          class="header-image mx-auto lg:mt-0 mt-16"
          src="/images/header-image.png"
          alt=""
        />
      </div>
    </div>

    <img
      class="absolute xl:bottom-11 bottom-2 xl:right-11 right-2 xl:w-auto w-24 xl:h-auto h-20"
      src="/images/providers/bg-img.svg"
      alt=""
    />
    <img
      class="absolute xl:right-28 right-2 xl:top-28 top-7"
      src="/images/shapes (1).svg"
      alt=""
    />
    <img
      class="absolute left-16 bottom-40"
      src="/images/providers/img.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import CButton from "./CButton.vue"
import InputComp from "./InputComp.vue"
@Component({
  components: {
    InputComp,
    CButton,
  },
})
export default class IndexHeader extends Vue {}
</script>

<style>
.intro-wrapper {
  padding: 0 210px;
}

@media screen and (max-width: 1024px) {
  .intro-wrapper {
    padding: 0 72px;
  }
}
@media screen and (max-width: 768px) {
  .intro-wrapper {
    padding: 0 50px;
  }
}
</style>
