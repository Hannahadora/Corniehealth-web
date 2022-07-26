<template>
	<div>
		<div class="xl:grid hidden grid-cols-5 gap-6">
			<img class="w-full" src="/images/about/image 62.svg" alt="" />
			<img class="w-full" src="/images/about/image 61.svg" alt="" />
			<img class="w-full" src="/images/about/img (2).svg" alt="" />
			<img class="w-full" src="/images/about/image 60.svg" alt="" />
			<img class="w-full" src="/images/about/image 60.svg" alt="" />
		</div>

		<div class="xl:hidden block">
			<hooper :settings="hooperSettings">
				<slide>
					<img src="/images/about/image 62.svg" alt="" />
				</slide>
				<slide>
					<img src="/images/about/image 61.svg" alt="" />
				</slide>
				<slide>
					<img src="/images/about/img (2).svg" alt="" />
				</slide>
				<slide>
					<img src="/images/about/image 60.svg" alt="" />
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
