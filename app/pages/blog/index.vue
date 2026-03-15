<template>
  <div class="py-16 md:py-24">
    <div class="container space-y-12">
      <div class="space-y-4">
        <h1 class="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
        <p class="text-xl text-muted-foreground">エンジニアの日常生活をお届けします</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card v-for="singleData in data" :key="singleData.id" class="overflow-hidden flex flex-col hover:shadow-xl transition-shadow group">
          <div class="aspect-video relative overflow-hidden">
            <nuxt-img 
              :src="singleData.image" 
              alt="blog-image" 
              format="webp" 
              class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <CardHeader class="flex-1">
            <div class="text-sm text-muted-foreground mb-2">{{ singleData.date }}</div>
            <CardTitle class="line-clamp-2 group-hover:text-primary transition-colors">
              <NuxtLink :to="singleData._path">{{ singleData.title }}</NuxtLink>
            </CardTitle>
            <CardDescription class="line-clamp-3 mt-4">
              {{ singleData.excerpt }}
            </CardDescription>
          </CardHeader>
          <CardFooter class="pt-0">
            <Button variant="outline" as-child class="w-full">
              <NuxtLink :to="singleData._path">Read More</NuxtLink>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div class="flex justify-center pt-8">
        <Pagination :numberPages="numberPages" />
      </div>
    </div>
  </div>
</template>


<script setup>
const blogsPerPage = 5;

const { data } = await useAsyncData("blogQuery", () =>
  queryContent("/blog").sort({ id: -1 }).limit(blogsPerPage).find()
);

const allBlogs = await queryContent("/blog").find();

const numberPages = Math.ceil(allBlogs.length / blogsPerPage);

useHead({
  title: "ブログ",
  meta: [{ name: "description", content: "ブログページです" }],
});
</script>
