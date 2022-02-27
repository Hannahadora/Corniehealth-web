<template>
  <div>
    <!-- <div
      class="grid items-center xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gridcols-1 gap-6"
    >
      <NuxtLink to="/providers/products/patient-experience">
        <div class="mb-6 img-rack">
          <img src="/images/providers/Nasal spray-rafiki 1.png" alt="" />
        </div>
        <span class="sub-titles-2 c-indigo">Patient Experience</span>
      </NuxtLink>
      <NuxtLink to="/providers/products/emr-emh">
        <div class="mb-6 img-rack">
          <img
            src="/images/providers/Breast cancer research-rafiki 1.png"
            alt=""
          />
        </div>
        <span class="sub-titles-2 c-indigo">EMR/EHR</span>
      </NuxtLink>
      <NuxtLink to="/providers/products/patient-experience">
        <div class="mb-6 img-rack">
          <img src="/images/providers/Medicine-pana 1.png" alt="" />
        </div>
        <span class="sub-titles-2 c-indigo">Practice Workflows</span>
      </NuxtLink>
      <NuxtLink to="/providers/products/billing-and-payment">
        <div class="mb-6 img-rack">
          <img
            src="/images/providers/Credit Card Payment-rafiki 1.png"
            alt=""
          />
        </div>
        <span class="sub-titles-2 c-indigo">Billing & Payment</span>
      </NuxtLink>
      <NuxtLink to="/providers/products/patient-portal">
        <div class="mb-6 img-rack">
          <img src="/images/providers/Ophthalmologist-rafiki 1.png" alt="" />
        </div>
        <span class="sub-titles-2 c-indigo">Patient Portal</span>
      </NuxtLink>
      <NuxtLink to="/providers/products/analytics">
        <div class="mb-6 img-rack">
          <img src="/images/providers/Business analytics-rafiki 1.png" alt="" />
        </div>
        <span class="sub-titles-2 c-indigo">Analytics</span>
      </NuxtLink>
    </div> -->

    <div class="">
      <hooper :settings="hooperSettings">
        <slide>
          <NuxtLink to="/providers/products/patient-experience">
            <div class="mb-6 img-rack">
              <img src="/images/providers/Nasal spray-rafiki 1.png" alt="" />
            </div>
            <span class="sub-titles-2 c-indigo">Patient Experience</span>
          </NuxtLink>
        </slide>
        <slide>
          <NuxtLink to="/providers/products/emr-emh">
            <div class="mb-6 img-rack">
              <img
                src="/images/providers/Breast cancer research-rafiki 1.png"
                alt=""
              />
            </div>
            <span class="sub-titles-2 c-indigo">EMR/EHR</span>
          </NuxtLink>
        </slide>
        <slide>
          <NuxtLink to="/providers/products/patient-experience">
            <div class="mb-6 img-rack">
              <img src="/images/providers/Medicine-pana 1.png" alt="" />
            </div>
            <span class="sub-titles-2 c-indigo">Practice Workflows</span>
          </NuxtLink>
        </slide>
        <slide>
          <NuxtLink to="/providers/products/billing-and-payment">
            <div class="mb-6 img-rack">
              <img
                src="/images/providers/Credit Card Payment-rafiki 1.png"
                alt=""
              />
            </div>
            <span class="sub-titles-2 c-indigo">Billing & Payment</span>
          </NuxtLink>
        </slide>
        <slide>
          <NuxtLink to="/providers/products/patient-portal">
            <div class="mb-6 img-rack">
              <img
                src="/images/providers/Ophthalmologist-rafiki 1.png"
                alt=""
              />
            </div>
            <span class="sub-titles-2 c-indigo">Patient Portal</span>
          </NuxtLink>
        </slide>
        <slide>
          <NuxtLink to="/providers/products/analytics">
            <div class="mb-6 img-rack">
              <img
                src="/images/providers/Business analytics-rafiki 1.png"
                alt=""
              />
            </div>
            <span class="sub-titles-2 c-indigo">Analytics</span>
          </NuxtLink>
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
  name: "ProviderImageGrid",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },

  data() {
    return {
      hooperSettings: {
        itemsToShow: 6,
        centerMode: false,
        breakpoints: {
          1440: {
            itemsToShow: 0,
          },
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
.img-rack {
  width: 189.83px;
  height: 104px;
  background: #ffffff;
  border: 0.4px solid #667499;
  box-shadow: 4px 4px 100px 10px rgba(46, 41, 78, 0.04),
    0px 8px 20px rgba(46, 41, 78, 0.06);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  max-height: 350px;
  margin: auto;
}

.hooper-slide {
    width: auto !important;
    padding: 48px 10px;
}
</style>
