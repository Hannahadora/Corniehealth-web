<template>
  <div
    class="w-screen h-screen bg-white bg-opacity-40 absolute left-0 z-30 flex items-center justify-center"
  >
    <div class="h-auto w-2/5 bg-white rounded-md shadow-md p-4">
      <h3 class="text-xl text-primary">Registration Successful</h3>
      <div class="mb-5">
        <p class="my-8">Hello {{ firstname }}</p>
        <p class="mb-8">
          Thank you for registering with us; we will keep you updated with our
          developments.
        </p>
        <p class="mb-8">A dependable healthcare now available to you.</p>
        <p>The customer success team.</p>
        <p><span class="font-bold">Support:</span> service@corniehealth.com</p>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          class="w-auto rounded-md bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-10"
          @click="$emit('close-diag')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstname: {
      type: String,
      default: "",
    },
  },
}
</script>
