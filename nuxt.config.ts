// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ["@nuxtjs/style-resources"],
  css: ["~/assets/style/main.scss"],
  modules: ["@pinia/nuxt", "vue3-carousel-nuxt"],
});
