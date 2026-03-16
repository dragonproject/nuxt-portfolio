<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-32 items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="/images/logo.svg" alt="logo" class="h-24 w-auto object-contain" />
      </NuxtLink>

      <div class="flex items-center gap-12">
        <nav class="hidden md:flex items-center space-x-12">
          <NuxtLink to="/" class="group flex items-baseline gap-2">
            <span class="text-2xl font-bold tracking-tight text-foreground/90 transition-colors group-hover:text-primary">Home</span>
            <span class="text-xs font-medium tracking-wider text-muted-foreground/60 transition-colors group-hover:text-primary/70">（ホーム）</span>
          </NuxtLink>
          <NuxtLink to="/blogs" class="group flex items-baseline gap-2">
            <span class="text-2xl font-bold tracking-tight text-foreground/90 transition-colors group-hover:text-primary">Blogs</span>
            <span class="text-xs font-medium tracking-wider text-muted-foreground/60 transition-colors group-hover:text-primary/70">（ブログ）</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="group flex items-baseline gap-2">
            <span class="text-2xl font-bold tracking-tight text-foreground/90 transition-colors group-hover:text-primary">Contact</span>
            <span class="text-xs font-medium tracking-wider text-muted-foreground/60 transition-colors group-hover:text-primary/70">（お問い合わせ）</span>
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <Button variant="ghost" size="icon" class="md:hidden">
            <span class="sr-only">Toggle Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

