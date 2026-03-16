<template>
  <header class="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
    <div class="mx-auto flex justify-center pointer-events-auto">
      <div class="flex h-20 w-full max-w-7xl items-center justify-between px-8 bg-white/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-full text-[#2D1610]">
        <NuxtLink to="/" class="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
          <img src="/images/logo.svg" alt="logo" class="h-10 w-auto object-contain" />
        </NuxtLink>

        <div class="flex items-center gap-10">
          <nav class="hidden md:flex items-center space-x-10">
            <NuxtLink to="/" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-[#E97451]">Home</span>
              <span class="text-[10px] font-bold tracking-widest text-[#2D1610]/40 transition-colors group-hover:text-[#E97451]/60">（ホーム）</span>
            </NuxtLink>
            <NuxtLink to="/blogs" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-[#E97451]">Blogs</span>
              <span class="text-[10px] font-bold tracking-widest text-[#2D1610]/40 transition-colors group-hover:text-[#E97451]/60">（ブログ）</span>
            </NuxtLink>
            <NuxtLink to="/contact" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-[#E97451]">Contact</span>
              <span class="text-[10px] font-bold tracking-widest text-[#2D1610]/40 transition-colors group-hover:text-[#E97451]/60">（お問い合わせ）</span>
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-4">
            <Button variant="ghost" size="icon" class="md:hidden rounded-full hover:bg-[#E97451]/10">
              <span class="sr-only">Toggle Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

