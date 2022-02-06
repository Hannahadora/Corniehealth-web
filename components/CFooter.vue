<template>
	<div class="footer-wrapper">
		<div
			class="mb-24 grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 items-start xl:justify-center justify-between"
		>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">
					<NuxtLink to="/">CornieHealth</NuxtLink>
				</li>
				<li class="mb-4"><NuxtLink to="/about">About Us</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Who We Serve</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Why CornieHealth</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Contact</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">Menu Links</li>
				<li class="mb-4">
					<NuxtLink to="/appointments">Appointments</NuxtLink>
				</li>
				<li class="mb-4"><NuxtLink to="/">Pharmacy</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Lab Tests</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">Resources</li>
				<li class="mb-4"><NuxtLink to="/">FAQ</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Terms of use</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Privacy policy</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">HIPAA</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Compliance</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">For Providers</li>
				<li class="mb-4">
					<NuxtLink to="/providers/types/hospitals-and-clinics"
					>Hospitals and Clinics</NuxtLink
					>
				</li>
				<li class="mb-4">
					<NuxtLink to="/providers/types/solo-practice">Solo Practice</NuxtLink>
				</li>
				<li class="mb-4"><NuxtLink to="/">Community Pharmacies</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Diagnostics Centers</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">For Patients</li>
				<li class="mb-4"><NuxtLink to="/">Private</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Employer</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12 lg:mr-8 mr-0">
				<li class="lg:mb-8 mb-6 sub-titles-1">Social Share</li>
				<li class="mb-4">Twitter</li>
				<li class="mb-4">Instagram</li>
				<li class="mb-4">LinkedIn</li>
				<li class="mb-4">Facebook</li>
			</ul>
		</div>

		<div class="text-center footer-cw border-opacity-20">
			<p class="mb-4">
				Cornie Health-affiliated practices are independently owned and operated
				by licensed practitioners who provide services utilizing the Cornie
				Health platform.
			</p>
			<div class="flex items-center justify-center">
				<img class="mr-4" src="/images/twitter-icon.svg" alt="" />
				<img class="mr-3" src="/images/instagram-icon.svg" alt="" />
				<img class="mr-3" src="/images/linkedin-icon.svg" alt="" />
				<img class="mr-3" src="/images/facebook-icon.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "CFooter",
})
</script>

<style>
.footer-wrapper {
  background: #080056;
  padding: 72px;
  color: #fff;
}

.footer-list {
  width: 191px;
}

.footer-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer-cw {
  border-top: 1px solid #e5e5e5;
  --tw-border-opacity: 0.2;
  padding-top: 30px;
}

@media screen and (max-width: 1024px) {
  .footer-wrapper {
    padding: 40px;
  }
  .footer-list {
    width: auto;
    padding: 0px 15px;
  }
}

@media screen and (max-width: 768) {
  .footer-wrapper {
    padding: 40px;
  }
  .footer-list {
    width: 100%;
    padding: 0px 15px;
  }
  .footer-cw {
    padding-top: 36px;
  }
}
</style>
