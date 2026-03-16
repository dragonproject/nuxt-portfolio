<template>
  <div class="flex flex-col sm:flex-row justify-between items-center gap-8 py-8 border-t border-zinc-100">
    <div class="w-full sm:w-1/2">
      <NuxtLink v-if="prev" :to="prev.path" class="group flex items-center gap-4 p-4 rounded-2xl transition-all hover:bg-zinc-50 border border-transparent hover:border-zinc-200">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </div>
        <div class="flex flex-col">
          <span class="text-xs text-muted-foreground font-medium uppercase tracking-wider">Previous</span>
          <h3 class="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{{ prev.title }}</h3>
        </div>
      </NuxtLink>
    </div>

    <div class="w-full sm:w-1/2 flex justify-end">
      <NuxtLink v-if="next" :to="next.path" class="group flex items-center text-right gap-4 p-4 rounded-2xl transition-all hover:bg-zinc-50 border border-transparent hover:border-zinc-200">
        <div class="flex flex-col">
          <span class="text-xs text-muted-foreground font-medium uppercase tracking-wider">Next</span>
          <h3 class="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{{ next.title }}</h3>
        </div>
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  prev: Object,
  next: Object,
});
</script>
