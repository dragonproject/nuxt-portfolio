// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules:[
    "@nuxt/content",
    "@nuxt/image"
  ],
  css:[
    "~/assets/styles/common.css",
    "~/assets/styles/layout.css",
    "~/assets/styles/index.css",
    "~/assets/styles/blog.css",
    "~/assets/styles/contact.css",
    "~/assets/styles/singleBlog.css",
  ]
})