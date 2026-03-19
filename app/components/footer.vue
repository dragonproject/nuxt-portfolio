<template>
  <footer class="bg-zinc-950 text-zinc-400 py-16 md:py-24 border-t border-zinc-900 relative overflow-hidden">
    <!-- Subtle decoration -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

    <div class="container relative z-10 flex flex-col items-center gap-12 text-center">
      <div class="space-y-4">
        <h2 class="text-3xl font-black text-white tracking-tighter">Stay Connected</h2>
        <p class="text-zinc-500 font-medium max-w-sm mx-auto">新しい技術、プロジェクト、そして日々得た学びをSNSでも発信しています。</p>
      </div>

      <div class="flex items-center gap-6">
        <a href="https://github.com" target="_blank" rel="noreferrer" class="p-4 bg-zinc-900 rounded-2xl hover:bg-brand hover:text-white transition-all hover:scale-110 shadow-xl border border-zinc-800">
          <img src="/images/github.svg" alt="github" class="w-6 h-6 invert opacity-80 group-hover:opacity-100" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" class="p-4 bg-zinc-900 rounded-2xl hover:bg-brand hover:text-white transition-all hover:scale-110 shadow-xl border border-zinc-800">
          <img src="/images/twitter.svg" alt="twitter" class="w-6 h-6 invert opacity-80 group-hover:opacity-100" />
        </a>
      </div>

      <nav class="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-black uppercase tracking-[0.2em]">
        <NuxtLink to="/blogs" class="hover:text-brand transition-colors">Blogs</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-brand transition-colors">Contact</NuxtLink>
        <NuxtLink to="/" class="hover:text-brand transition-colors">Home</NuxtLink>
      </nav>

      <div class="pt-12 border-t border-zinc-900 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-xs font-bold text-zinc-600 tracking-widest">&copy;{{ new Date().getFullYear() }} RYUTARO SEKI. ALL RIGHTS RESERVED.</p>
        <p class="text-xs font-bold text-zinc-600 tracking-widest underline decoration-brand/30 underline-offset-4">DESIGNED & BUILT BY HUMAN</p>
      </div>
    </div>
  </footer>
</template>

