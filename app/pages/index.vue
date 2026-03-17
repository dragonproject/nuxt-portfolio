<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center bg-[#E97451] selection:bg-white selection:text-[#E97451] overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-amber-300 rounded-full blur-[100px] opacity-20"></div>

      <div class="container relative z-10 py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content: Bold Typography -->
          <div class="space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.9] text-[#2D1610] tracking-tighter animate-in fade-in slide-in-from-left-8 duration-1000">
              Ideas that <br />
              <span class="text-white">stick.</span> Designs <br />
              that <span class="italic font-serif">flow.</span>
            </h1>
            <p class="text-xl md:text-2xl font-medium text-[#2D1610]/80 max-w-xl leading-snug animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
              Ryutaro Seki is a JavaScript Developer building high-performance, beautiful digital worlds from Japan.
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 justify-center lg:justify-start">
              <Button as-child size="xl" class="rounded-full px-10 py-8 text-xl font-black bg-[#2D1610] text-[#E97451] hover:bg-[#3D1E16] transition-all hover:scale-105 shadow-xl border-none">
                <NuxtLink to="/blogs">Explore Blogs</NuxtLink>
              </Button>
              <Button variant="ghost" size="xl" as-child class="rounded-full px-10 py-8 text-xl font-black text-[#2D1610] hover:bg-white/10 transition-all underline decoration-4 underline-offset-8">
                <NuxtLink to="/contact">Get in Touch</NuxtLink>
              </Button>
            </div>
          </div>

          <!-- Right Content: Floating Mockup (Linktree Style) -->
          <div class="relative order-1 lg:order-2 flex justify-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div class="w-[320px] h-[640px] bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-[#2D1610] p-6 flex flex-col items-center space-y-8 relative overflow-hidden group">
              <!-- Top bar -->
              <div class="w-16 h-1.5 bg-[#2D1610]/10 rounded-full mb-4"></div>
              
              <!-- Profile in Mockup -->
              <div class="flex flex-col items-center space-y-4">
                <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-[#E97451]/20 shadow-lg">
                  <nuxt-img src="/images/profile.jpg" alt="profile" class="w-full h-full object-cover" />
                </div>
                <div class="text-center">
                  <h3 class="text-xl font-black text-[#2D1610]">@ryutaro_seki</h3>
                  <p class="text-sm font-bold text-[#E97451]">Available for Work</p>
                </div>
              </div>

              <!-- Mock Links -->
              <div class="w-full space-y-3 pt-4">
                <div class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between group-hover:bg-[#E97451] group-hover:text-white transition-all cursor-pointer">
                  <span class="font-bold">Latest Post</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between hover:scale-105 transition-transform">
                  <span class="font-bold">Selected Works</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between hover:scale-105 transition-transform">
                  <span class="font-bold">Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>

              <!-- Background pattern inside mockup -->
              <div class="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
                <div class="absolute inset-0 bg-[radial-gradient(#E97451_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
            </div>

            <!-- Decorative floating blobs around mockup -->
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl rotate-12 -z-10 hidden sm:block"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2D1610]/10 backdrop-blur-xl rounded-full -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-16 md:py-24 space-y-24">
      <!-- Profile Section -->
      <section class="grid md:grid-cols-5 gap-12 items-center">
        <div class="md:col-span-3 space-y-8">
          <div class="space-y-3">
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-[#2D1610]">Passion for Code</h2>
            <div class="flex items-center gap-3">
              <div class="h-[2px] w-6 bg-[#E97451]"></div>
              <span class="text-sm font-bold tracking-[0.2em] text-[#E97451] uppercase">エンジニアとしての情熱</span>
            </div>
          </div>
          <p class="text-lg text-[#2D1610]/70 leading-relaxed font-medium">
            フロントエンド開発を中心に、10年以上に渡り多種多様なデジタルプロダクトの構築に携わってきました。
            単にコードを書くだけでなく、ユーザー体験（UX）を第一に考え、技術を通してビジネスの課題を解決することに価値を感じています。
            現在はモダンなJavaScriptフレームワークを活用し、高速で堅牢、かつ美しいインターフェースの実装に力を入れています。
          </p>
          <Button as-child size="xl" class="rounded-full px-8 bg-[#2D1610] text-white hover:bg-[#3D1E16]">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </Button>
        </div>
        <div class="md:col-span-2 relative group max-w-sm mx-auto w-full">
          <!-- Background decorative blur blob -->
          <div class="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -z-10 group-hover:bg-primary/30 transition-colors duration-700"></div>
          <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] -z-10 group-hover:bg-blue-500/30 transition-colors duration-700"></div>
          
          <div class="relative rounded-[2.5rem] backdrop-blur-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
            <div class="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <nuxt-img 
              src="/images/profile.jpg" 
              alt="profile" 
              format="webp" 
              class="relative rounded-[2.5rem] w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="space-y-12">
        <div class="text-center space-y-4">
          <div class="inline-block">
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-[#2D1610]">Technology Stack</h2>
            <div class="flex items-center justify-center gap-4 mt-2">
              <div class="h-[2px] w-8 bg-[#E97451]"></div>
              <span class="text-sm font-bold tracking-[0.2em] text-[#E97451] uppercase">技術スタック</span>
              <div class="h-[2px] w-8 bg-[#E97451]"></div>
            </div>
          </div>
          <p class="text-muted-foreground max-w-2xl mx-auto pt-4 leading-relaxed">10年にわたる開発経験の中で培ってきた、主要な技術スキルをご紹介します。</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="skill in skills" :key="skill.name" class="p-6 text-center hover:shadow-lg transition-shadow bg-card/50 backdrop-blur">
            <div class="flex flex-col items-center gap-4">
              <img :src="skill.icon" :alt="skill.name" class="w-12 h-12" />
              <div class="space-y-1">
                <h3 class="font-semibold">{{ skill.name }}</h3>
                <p class="text-sm text-muted-foreground">経験：{{ skill.exp }}年</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <!-- Works Section (Bento Grid) -->
      <section class="space-y-12">
        <div class="text-center space-y-4">
          <div class="inline-block">
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-[#2D1610]">Selected Works</h2>
            <div class="flex items-center justify-center gap-4 mt-2">
              <div class="h-[2px] w-8 bg-[#E97451]"></div>
              <span class="text-sm font-bold tracking-[0.2em] text-[#E97451] uppercase">制作実績</span>
              <div class="h-[2px] w-8 bg-[#E97451]"></div>
            </div>
          </div>
          <p class="text-[#2D1610]/60 max-w-2xl mx-auto pt-4 font-medium">これまでに制作した主要なプロジェクトの中から、いくつかをご紹介します。</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          <!-- Feature project (Large Bento Card) -->
          <Card class="md:col-span-3 md:row-span-2 overflow-hidden group relative border-none bg-zinc-900">
            <NuxtLink to="https://next-market-server-actions-silk.vercel.app/" target="_blank" class="block h-full">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <nuxt-img 
                src="/images/next-market.png" 
                alt="Next Market" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute bottom-0 left-0 p-8 z-20 space-y-3">
                <div class="flex gap-2">
                  <Badge variant="secondary" class="bg-white/20 backdrop-blur text-white border-none text-xs">Next.js</Badge>
                  <Badge variant="secondary" class="bg-white/20 backdrop-blur text-white border-none text-xs">Full Stack</Badge>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-white">Next Market</h3>
                <p class="text-zinc-300 max-w-lg">Server Actionsを活用した、高速でセキュアなマーケットプレイス・アプリケーション。ユーザー認証、商品出品、詳細閲覧機能を備えたモダンなプロダクトです。</p>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 1 -->
          <Card class="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between bg-card hover:border-primary/50 transition-colors">
            <NuxtLink to="/blogs" class="flex flex-col h-full justify-between">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                </div>
                <h3 class="font-bold text-xl">Blogs</h3>
                <p class="text-sm text-[#2D1610]/60">開発の裏側や、日々の技術的な学びをアウトプットしています。</p>
              </div>
              <div class="flex items-center gap-2 text-xs font-bold text-[#E97451] italic">
                View All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 2 -->
          <Card class="md:col-span-1 md:row-span-1 overflow-hidden group relative border-none bg-zinc-800">
            <NuxtLink to="https://travel-blog-eosin-chi.vercel.app/" target="_blank" class="block h-full">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <nuxt-img 
                src="/images/travel-blog.png" 
                alt="Travel Blog" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 p-4 z-20 space-y-1">
                <Badge variant="secondary" class="bg-white/20 backdrop-blur text-white border-none text-[10px] scale-90 origin-left">Next.js</Badge>
                <h3 class="font-bold text-white text-lg leading-tight">Travel Blog</h3>
              </div>
            </NuxtLink>
          </Card>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="relative overflow-hidden rounded-[3rem] bg-[#2D1610] text-[#E97451] p-12 md:p-24 text-center space-y-10 group">
        <!-- Decor -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#E97451]/10 rounded-full blur-[100px] -z-0"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#E97451]/5 rounded-full blur-[80px] -z-0"></div>

        <div class="relative z-10 space-y-6">
          <h2 class="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
            Let's build <br />
            something <span class="text-[#E97451] italic font-serif">extraordinary.</span>
          </h2>
          <div class="flex items-center justify-center gap-4">
            <div class="h-[1px] w-12 bg-[#E97451]/40"></div>
            <span class="text-sm font-bold tracking-[0.3em] uppercase opacity-80 text-white">新しいプロジェクトを始めましょう</span>
            <div class="h-[1px] w-12 bg-[#E97451]/40"></div>
          </div>
        </div>
        
        <p class="relative z-10 text-[#E97451]/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          現在、フリーランスとしてのプロジェクトや技術コンサルティングのご依頼を承っております。
          あなたのビジョンを形にするお手伝いをさせてください。
        </p>
        <div class="relative z-10 pt-4">
          <Button variant="outline" size="xl" as-child class="rounded-full px-12 py-8 text-xl font-black border-2 border-[#E97451] text-[#E97451] hover:bg-[#E97451] hover:text-[#2D1610] transition-all hover:scale-105 bg-transparent">
            <NuxtLink to="/contact">話をしてみる</NuxtLink>
          </Button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Badge } from '@/components/ui/badge'

const skills = [
  { name: 'JavaScript', exp: 10, icon: '/images/javascript.svg' },
  { name: 'Next.js', exp: 6, icon: '/images/nextjs.svg' },
  { name: 'React', exp: 4, icon: '/images/react.svg' },
  { name: 'Vue', exp: 4, icon: '/images/vue.svg' },
  { name: 'Nuxt', exp: 3, icon: '/images/nuxt.svg' },
]

useHead({
  title: "Ryutaro Seki | Official Portfolio",
  meta: [{ name: "description", content: "Ryutaro Sekiのポートフォリオサイトです。JavaScript開発のエキスパート。" }],
});
</script>
