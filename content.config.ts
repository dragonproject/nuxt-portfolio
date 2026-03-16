import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      source: 'blogs/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        image: z.string(),
        excerpt: z.string()
      })
    })
  }
})
