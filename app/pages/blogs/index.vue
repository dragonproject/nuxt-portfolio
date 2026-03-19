<template>
  <div class="min-h-screen">
    <!-- Vivid Header Section -->
    <section class="bg-[#D1E922] pt-32 pb-24 md:pt-48 md:pb-36 relative overflow-hidden transition-all duration-700">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-dark opacity-5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

      <div class="container relative z-10">
        <div class="max-w-4xl space-y-10">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <span class="px-5 py-2 rounded-full bg-brand-dark text-[#D1E922] text-xs font-black tracking-[0.3em] uppercase shadow-2xl shadow-brand-dark/20">
                Journal
              </span>
              <div class="h-[2px] w-16 bg-brand-dark/10"></div>
            </div>
            <h1 class="text-6xl md:text-9xl font-black tracking-tighter text-brand-dark leading-[0.8] drop-shadow-sm">
              Thought <br />
              <span class="text-black/30 italic font-serif">in Motion.</span>
            </h1>
          </div>

          <div class="space-y-8">
            <h2 class="text-2xl md:text-4xl font-black text-brand-dark/90 max-w-2xl leading-tight">
              技術、創造性、そして日々の開発の中から得た気づきを発信しています。
            </h2>
            <div class="flex items-start gap-6 pt-4">
              <div class="w-1.5 h-24 bg-brand-dark/10 rounded-full hidden md:block"></div>
              <p class="text-lg md:text-2xl text-brand-dark/70 font-bold leading-relaxed max-w-3xl">
                フロントエンド開発の最前線から、クリエイティブな実験、
                そしてプロフェッショナルとしての学びをシェア。
                あなたの「創る力」を加速させるための航海日誌です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-24 space-y-24">

      <!-- Main Content -->
      <div v-if="data" class="space-y-24">
        <!-- Empty State -->
        <div v-if="data.length === 0" class="text-center py-20 space-y-6 bg-zinc-50 rounded-[2.5rem]">
          <div class="text-6xl font-black text-zinc-300">Empty</div>
          <p class="text-zinc-500 italic">Blogs not found... 記事がまだ投稿されていないか、読み込み中です。</p>
          <Button as-child variant="outline" class="rounded-full px-8 border-[#2D1610] text-[#2D1610]">
            <NuxtLink to="/">Back to Home</NuxtLink>
          </Button>
        </div>

        <!-- Featured Post (Latest) -->
        <section v-else-if="data.length > 0" class="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl transition-all duration-700 hover:shadow-primary/20">
          <NuxtLink :to="data[0].path" class="grid md:grid-cols-2 items-center">
            <div class="aspect-[4/3] md:aspect-auto h-full overflow-hidden">
              <nuxt-img 
                :src="data[0].image" 
                :alt="data[0].title" 
                format="webp" 
                class="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-80"
              />
            </div>
            <div class="p-8 md:p-16 space-y-6">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full">New Post</span>
                <time class="text-zinc-500 text-sm italic">{{ data[0].date }}</time>
              </div>
              <h2 class="text-3xl md:text-5xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {{ data[0].title }}
              </h2>
              <p class="text-zinc-400 text-lg line-clamp-3">
                {{ data[0].excerpt }}
              </p>
              <div class="pt-4 inline-flex items-center gap-2 text-[#E97451] font-black group-hover:translate-x-2 transition-transform">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </NuxtLink>
        </section>

        <!-- Post Grid -->
        <div v-if="data.length > 1" class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="(singleData, index) in data.slice(1)" :key="singleData.path" 
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
        <div v-if="numberPages > 1" class="flex justify-center pt-8 border-t border-zinc-100">
          <Pagination :numberPages="numberPages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogsPerPage = 9;

const { data } = await useAsyncData("blogQuery", () =>
  queryCollection("blogs").order("date", "DESC").limit(blogsPerPage).all()
);

const allBlogs = await queryCollection("blogs").all();
const numberPages = Math.ceil(allBlogs.length / blogsPerPage);

useHead({
  title: "Blogs | Insights and Stories",
  meta: [{ name: "description", content: "エンジニアリング、テック、クリエイティビティに関するブログ記事一覧。" }],
});
</script>
