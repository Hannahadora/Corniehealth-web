<template>
	<div class="footer-wrapper">
		<div class="mb-24 flex lg:flex-row flex-wrap flex-col items-start gap-8">
			<ul class="footer-list lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">CornieHealth</li>
				<li class="mb-4"><NuxtLink to="/about">About Us</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Who We Serve</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Why CornieHealth</NuxtLink></li>
				<li class=""><NuxtLink to="/">Contact</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">Menu Links</li>
				<li class="mb-4"><NuxtLink to="/">Appointments</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Pharmacy</NuxtLink></li>
				<li class=""><NuxtLink to="/">Lab Tests</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">Resources</li>
				<li class="mb-4"><NuxtLink to="/">FAQ</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Terms of use</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Privacy policy</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">HIPAA</NuxtLink></li>
				<li class=""><NuxtLink to="/">Compliance</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">For Providers</li>
				<li class="mb-4"><NuxtLink to="/providers/hospitals-and-clinics">Hospitals and Clinics</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/providers/solo-practice">Solo Practice</NuxtLink></li>
				<li class="mb-4"><NuxtLink to="/">Community Pharmacies</NuxtLink></li>
				<li class=""><NuxtLink to="/">Diagnostics Centers</NuxtLink></li>
			</ul>
			<ul class="footer-list lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">For Patients</li>
				<li class="mb-4"><NuxtLink to="/">Private</NuxtLink></li>
				<li class=""><NuxtLink to="/">Employer</NuxtLink></li>
			</ul>
			<ul class="">
				<li class="lg:mb-8 mb-6 sub-titles-1">Social Share</li>
				<li class="mb-4 footer-icons">
					<img src="/images/twitter-icon.svg" alt="" /><span>Twitter</span>
				</li>
				<li class="mb-4 footer-icons">
					<img src="/images/instagram-icon.svg" alt="" /><span>Instagram</span>
				</li>
				<li class="mb-4 footer-icons">
					<img src="/images/linkedin-icon.svg" alt="" /><span>LinkedIn</span>
				</li>
				<li class="mb-4 footer-icons">
					<img src="/images/facebook-icon.svg" alt="" /><span>Facebook</span>
				</li>
			</ul>
		</div>

		<div class="text-center footer-cw border-opacity-20">
			<p>
				Cornie Health-affiliated practices are independently owned and operated
				by licensed practitioners who provide services utilizing the Cornie
				Health platform.
			</p>
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
  gap: 11px;
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
