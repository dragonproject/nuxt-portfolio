<template>
  <footer class="border-t py-12 md:py-16 bg-muted/30">
    <div class="container flex flex-col items-center gap-6">
      <div class="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noreferrer" class="p-2 border rounded-full hover:bg-muted transition-colors">
          <img src="/images/github.svg" alt="github" class="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="p-2 border rounded-full hover:bg-muted transition-colors">
          <img src="/images/linkedin.svg" alt="linkedin" class="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" class="p-2 border rounded-full hover:bg-muted transition-colors">
          <img src="/images/twitter.svg" alt="twitter" class="w-5 h-5" />
        </a>
      </div>
      <nav class="flex gap-6 text-sm font-medium">
        <NuxtLink to="/blogs" class="hover:underline underline-offset-4">Blogs</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline underline-offset-4">Contact</NuxtLink>
      </nav>
      <Separator class="max-w-[200px]" />
      <p class="text-sm text-muted-foreground">&copy;{{ new Date().getFullYear() }} Abe Hiroki. Built with Nuxt 4 & Shadcn.</p>
    </div>
  </footer>
</template>

