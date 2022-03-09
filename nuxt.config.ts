import { defineNuxtConfig } from "@nuxt/bridge"

export default defineNuxtConfig({
  bridge: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "booking-site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/style.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/tooltip.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/utils.js", mode: "client" },
    { src: "~/plugins/vee-validate.js", mode: "client" },
    { src: "~/plugins/choices.js", mode: "client" },
    { src: "~/plugins/vue-awesome-swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},
  // env
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },

})
