<template>
  <div class="w-full xl:pb-0 pb-8">
    <div class="flex items-center">
      <div class="mr-4 w-16 h-16 bg-gray-100 rounded-full"></div>
      <div class="">
        <h3 class="mr-4 h-5 w-80 bg-gray-100 rounded"></h3>
        <div class="w-12 h-3 bg-gray-100 rounded mt-2"></div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-4">
      <div class="flex items-start">
        <img
          class="mr-2"
          src="/images/book-appointment/icon-doctor-white.png"
          alt=""
        />
        <div>
          <p class="mr-2 h-3 w-40 bg-gray-100 rounded"></p>
        </div>
      </div>

      <div class="flex items-start">
        <img
          class="mr-2"
          src="/images/book-appointment/icon-doctor-white.png"
          alt=""
        />
        <div>
          <p class="mr-2 h-3 w-40 bg-gray-100 rounded"></p>
        </div>
      </div>

      <div class="flex items-start">
        <img
          class="mr-2"
          src="/images/book-appointment/icon-lang-white.png"
          alt=""
        />
        <div>
          <p class="mr-2 h-3 w-40 bg-gray-100 rounded"></p>
        </div>
      </div>

      <div class="flex items-start">
        <img
          class="mr-2"
          src="/images/book-appointment/Icon-fee-white.png"
          alt=""
        />
        <div>
          <p class="mr-2 h-3 w-40 bg-gray-100 rounded"></p>
        </div>
      </div>
    </div>

    <div
      class="flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:mt-6 mt-8"
    >
      <c-button
        type="button"
        class="xl:mr-6 xl:mb-0 mb-6 xl:w-1/2 w-full h-10 bg-opacity-20"
        :primary="true"
        small
      >
      </c-button>
      <c-button
        class="xl:w-1/2 w-full h-10 bg-opacity-20"
        type="button"
        :secondary="true"
        small
      >
      </c-button>
    </div>
  </div>
</template>
