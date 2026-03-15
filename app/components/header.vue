<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-20 items-center justify-between">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/images/logo.svg" alt="logo" class="h-16 w-auto object-contain" />
        </NuxtLink>
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NuxtLink to="/blog" class="transition-colors hover:text-foreground/80 text-foreground/60">Blog</NuxtLink>
          <NuxtLink to="/contact" class="transition-colors hover:text-foreground/80 text-foreground/60">Contact</NuxtLink>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <Button variant="ghost" size="icon" class="md:hidden">
          <span class="sr-only">Toggle Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </Button>
      </div>
    </div>
  </header>
</template>

