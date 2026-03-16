<template>
  <div class="min-h-screen pt-24 pb-16">
    <article v-if="data" class="container max-w-4xl space-y-12">
      <!-- Back Link -->
      <NuxtLink to="/blogs" class="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
        ブログ一覧に戻る
      </NuxtLink>

      <!-- Article Header -->
      <header class="space-y-8">
        <div class="space-y-4">
          <div v-if="data?.date" class="flex items-center gap-4 text-sm text-zinc-500">
            <time :datetime="data.date" class="px-3 py-1 bg-zinc-100 rounded-full font-medium italic">{{ data.date }}</time>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            {{ data?.title }}
          </h1>
        </div>
        
        <div class="relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl">
          <nuxt-img 
            v-if="data?.image"
            :src="data.image" 
            :alt="data.title" 
            format="webp" 
            class="object-cover w-full h-full brightness-90 saturate-[0.8]" 
          />
        </div>
      </header>

      <!-- Content -->
      <div class="prose prose-zinc dark:prose-invert max-w-none 
        prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
        prose-p:text-lg prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400
        prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-zinc-50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
      ">
        <ContentRenderer :value="data" />
      </div>

      <!-- Footer / Navigation -->
      <footer class="pt-12 border-t border-zinc-100">
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </footer>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blogs').path(route.path).first()
);

const { data: surround } = await useAsyncData(`blog-surround-${route.path}`, () =>
  queryCollectionItemSurroundings('blogs', route.path).order('date', 'ASC')
);

const prev = surround.value?.[0];
const next = surround.value?.[1];
  
useHead({
  title: data.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: data.value?.excerpt || 'Read this interesting blog post.' }
  ]
})
</script>
