<template>
  <div>
    <div class="bg-lighter-blue px-4 py-6 mt-16">
      <h4 class="c-indigo mb-6">Send your message to this pharmacy</h4>
      <div>
        <p class="c-indigo">To:</p>
        <div>New Haven</div>
      </div>

      <div class="mt-6 flex flex-col">
        <label class="mb-6" for="message">Message</label>
        <textarea
          id="message"
          class="px-4 py-6 bg-white c-border rounded"
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter your inquiry details such as product name, form, quantity,container, etc."
        ></textarea>
      </div>
      <span class="mt-2 text-grey-blue"
        >Your message must be between 20-1000 characters</span
      >

      <div>
        <p class="c-indigo my-6">Quantity</p>

        <div>
          <cornie-checkbox
            label="Recommend matching pharmacy if this pharmacy doesn’t contact me on message center within 24 hours."
          />
        </div>

        <div class="flex items-center justify-end mt-6">
          <button
            type="button"
            class="text-base font-bold bg-razzmataz-pry rounded-lg text-white px-20 py-3 flex items-center justify-center"
            @click="$router.push('/signin')"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CornieCheckbox from "../CornieCheckbox.vue"
export default {
  name: "PharmacyMessage",
  components: { CornieCheckbox },
}
</script>

<style></style>
