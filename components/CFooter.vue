<template>
	<div class="footer-wrapper">
		<div class="mb-24 flex lg:flex-row flex-col items-start lg:justify-between">
			<div class="xl:mr-20 mr-0 lg:mb-0 mb-12 lg:w-1/4 w-full">
				<cornie-logo :footer="true" class="lg:mb-5 mb-6" />
				<span class="lg:block hidden"
				>Cornie Health-affiliated practices are independently owned and
					operated by licensed practitioners who provide services utilizing the
					Cornie Health platform.
				</span>
			</div>
			<ul class="footer-list xl:mr-8 mr-0 lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">Company Overview</li>
				<li class="mb-4">Who we serve</li>
				<li class="mb-4">Why CornieHealth</li>
				<li class="mb-4">Contact</li>
			</ul>
			<ul class="footer-list xl:mr-8 mr-0 lg:mb-0 mb-12">
				<li class="lg:mb-8 mb-6 sub-titles-1">Resources</li>
				<li class="mb-4">FAQ</li>
				<li class="mb-4">Terms of use</li>
				<li class="mb-4">Privacy policy</li>
				<li class="mb-4">HIPAA</li>
				<li class="mb-4">Compliance</li>
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

		<div class="text-center footer-cw">
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
  name: "CFooter"
})
</script>

<style>
.footer-wrapper {
  background: #080056;
  padding: 72px;
  color: #fff;
}

.footer-list {
  width: 260px;
}

.footer-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
}

.footer-cw {
    border-top: 1px solid #E5E5E5;
    padding-top: 30px;
}

@media screen and (max-width: 1024px) {
  .footer-list {
    width: auto;
    padding: 0px 15px ;
  }

}

@media screen and (max-width: 768) {
  .footer-wrapper {
  padding: 30px;
}
  .footer-list {
    width: 100%;
    padding: 0px 15px ;
  }
  .footer-cw {
    padding-top: 36px;
}

}
</style>