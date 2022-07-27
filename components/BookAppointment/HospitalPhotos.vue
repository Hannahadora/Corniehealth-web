<template>
  <div>
    <div class="xl:grid hidden grid-cols-5 gap-6">
      <div v-for="(photo, idx) in hospital.photos" :key="idx">
        <img class="w-full" :src="photo" alt="" />
      </div>
    </div>

    <div class="xl:hidden block">
      <hooper
        :settings="hooperSettings"
        v-for="(photo, idx) in hospital.photos"
        :key="idx"
      >
        <slide>
          <img class="w-full" :src="photo" alt="" />
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "Hospitalphoto",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },

  props: {
    hospital: {
      type: Object,
      default: () => {},
    },
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

<style scoped>
.hooper-list {
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  max-height: 350px;
  margin: auto;
}
</style>
