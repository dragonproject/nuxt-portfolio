<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container space-y-20">
      <!-- Header -->
      <div class="max-w-3xl space-y-6">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter">Blog</h1>
        <p class="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          技術、創造性、そして日々の開発の中から得た気づきを発信しています。（ページ {{ currentPage }}）
        </p>
      </div>

      <!-- Main Content -->
      <div v-if="data" class="space-y-24">
        <!-- Post Grid -->
        <div class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="singleData in data" :key="singleData.path" 
            class="group space-y-6"
          >
            <NuxtLink :to="singleData.path" class="block space-y-6">
              <div class="aspect-video relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <nuxt-img 
                  :src="singleData.image" 
                  :alt="singleData.title" 
                  format="webp" 
                  class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div class="space-y-3">
                <time class="text-sm font-medium text-muted-foreground italic">{{ singleData.date }}</time>
                <h3 class="text-2xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {{ singleData.title }}
                </h3>
                <p class="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {{ singleData.excerpt }}
                </p>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center pt-8 border-t border-zinc-100">
          <Pagination :numberPages="numberPages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogsPerPage = 5;
const currentPage = useRoute().params.pagination;

const { data } = await useAsyncData(`blogQuery-${currentPage}`, () =>
  queryCollection("blogs")
    .order("date", "DESC")
    .limit(blogsPerPage)
    .skip(blogsPerPage * (currentPage - 1))
    .all()
);

const allBlogs = await queryCollection("blogs").all();
const numberPages = Math.ceil(allBlogs.length / blogsPerPage);

useHead({
  title: `Blog | Page ${currentPage}`,
  meta: [{ name: "description", content: `エンジニアブログ - ページ ${currentPage}` }],
});
</script>
