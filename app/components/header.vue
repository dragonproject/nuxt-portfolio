<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
    <div class="mx-auto flex flex-col items-center pointer-events-auto">
      <div class="flex h-20 w-full max-w-7xl items-center justify-between px-8 bg-white/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-full text-brand-dark">
        <NuxtLink to="/" class="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95" @click="closeMenu">
          <img src="/images/logo.svg" alt="logo" class="h-10 w-auto object-contain" />
          <span class="text-lg font-black tracking-tight transition-colors group-hover:text-brand">Ryutaro's Portfolio</span>
        </NuxtLink>

        <div class="flex items-center gap-10">
          <nav class="hidden md:flex items-center space-x-10">
            <NuxtLink to="/" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-brand">Home</span>
              <span class="text-[10px] font-bold tracking-widest text-brand-dark/40 transition-colors group-hover:text-brand/60">（ホーム）</span>
            </NuxtLink>
            <NuxtLink to="/blogs" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-brand">Blogs</span>
              <span class="text-[10px] font-bold tracking-widest text-brand-dark/40 transition-colors group-hover:text-brand/60">（ブログ）</span>
            </NuxtLink>
            <NuxtLink to="/contact" class="group flex items-baseline gap-1.5 overflow-hidden">
              <span class="text-lg font-black tracking-tight transition-colors group-hover:text-brand">Contact</span>
              <span class="text-[10px] font-bold tracking-widest text-brand-dark/40 transition-colors group-hover:text-brand/60">（お問い合わせ）</span>
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              class="md:hidden rounded-full hover:bg-brand/10"
              @click="toggleMenu"
            >
              <span class="sr-only">Toggle Menu</span>
              <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
            </Button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMenuOpen" class="w-full mt-4 flex justify-center md:hidden">
          <nav class="w-full max-w-sm bg-white/95 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl p-6 flex flex-col space-y-2">
            <NuxtLink 
              to="/" 
              class="group flex items-center justify-between p-4 rounded-2xl transition-colors hover:bg-brand/10"
              @click="closeMenu"
            >
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-black tracking-tight text-brand-dark group-hover:text-brand">Home</span>
                <span class="text-xs font-bold tracking-widest text-brand-dark/40 group-hover:text-brand/60">（ホーム）</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-dark/20 group-hover:text-brand/40"><path d="m9 18 6-6-6-6"/></svg>
            </NuxtLink>
            <NuxtLink 
              to="/blogs" 
              class="group flex items-center justify-between p-4 rounded-2xl transition-colors hover:bg-brand/10"
              @click="closeMenu"
            >
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-black tracking-tight text-brand-dark group-hover:text-brand">Blogs</span>
                <span class="text-xs font-bold tracking-widest text-brand-dark/40 group-hover:text-brand/60">（ブログ）</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-dark/20 group-hover:text-brand/40"><path d="m9 18 6-6-6-6"/></svg>
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="group flex items-center justify-between p-4 rounded-2xl transition-colors hover:bg-brand/10"
              @click="closeMenu"
            >
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-black tracking-tight text-brand-dark group-hover:text-brand">Contact</span>
                <span class="text-xs font-bold tracking-widest text-brand-dark/40 group-hover:text-brand/60">（お問い合わせ）</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-dark/20 group-hover:text-brand/40"><path d="m9 18 6-6-6-6"/></svg>
            </NuxtLink>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>


