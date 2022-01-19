<template>
	<div class="footer-wrapper">
		<div class="mb-24 flex items-start">
			<div class="mr-20 w-1/4">
				<cornie-logo :footer="true" class="mb-5" />
				<span class=""
				>Cornie Health-affiliated practices are independently owned and
					operated by licensed practitioners who provide services utilizing the
					Cornie Health platform.
				</span>
			</div>
			<ul class="footer-list mr-8">
				<li class="mb-8 sub-titles-1">Company Overview</li>
				<li class="mb-4">Who we serve</li>
				<li class="mb-4">Why CornieHealth</li>
				<li class="mb-4">Contact</li>
			</ul>
			<ul class="footer-list mr-8">
				<li class="mb-8 sub-titles-1">Resources</li>
				<li class="mb-4">FAQ</li>
				<li class="mb-4">Terms of use</li>
				<li class="mb-4">Privacy policy</li>
				<li class="mb-4">HIPAA</li>
				<li class="mb-4">Compliance</li>
			</ul>
			<ul class="">
				<li class="mb-8 sub-titles-1">Social Share</li>
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
  gap: 8px;
}

.footer-cw {
    border-top: 1px solid #E5E5E5;
    padding-top: 30px;
}
</style>