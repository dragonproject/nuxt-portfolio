<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <nuxt-img 
        src="/images/index-hero.jpg" 
        alt="hero" 
        format="webp" 
        class="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div class="container relative z-10 text-center text-white space-y-4">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight">Ryutaro Seki</h1>
        <p class="text-xl md:text-2xl font-light text-zinc-300">JavaScript Developer & Tech Enthusiast</p>
      </div>
    </section>

    <div class="container py-16 md:py-24 space-y-24">
      <!-- Profile Section -->
      <section class="grid md:grid-cols-5 gap-12 items-center">
        <div class="md:col-span-3 space-y-6">
          <h2 class="text-3xl font-bold border-l-4 border-primary pl-4">エンジニアとしての情熱</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            フロントエンド開発を中心に、10年以上に渡り多種多様なデジタルプロダクトの構築に携わってきました。
            単にコードを書くだけでなく、ユーザー体験（UX）を第一に考え、技術を通してビジネスの課題を解決することに価値を感じています。
            現在はモダンなJavaScriptフレームワークを活用し、高速で堅牢、かつ美しいインターフェースの実装に力を入れています。
          </p>
          <Button as-child size="lg">
            <NuxtLink to="/contact">お問い合わせ</NuxtLink>
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
          <h2 class="text-3xl font-bold">技術スタック</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">10年にわたる開発経験の中で培ってきた、主要な技術スキルをご紹介します。</p>
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
          <h2 class="text-3xl font-bold">制作実績</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">これまでに制作した主要なプロジェクトをご紹介します。</p>
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
                <h3 class="font-bold text-xl">Technical Blog</h3>
                <p class="text-sm text-muted-foreground">開発の裏側や、日々の技術的な学びをアウトプットしています。</p>
              </div>
              <div class="flex items-center gap-2 text-xs font-bold text-primary italic">
                一覧を見る <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 2 -->
          <Card class="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between bg-zinc-100 dark:bg-zinc-800 border-none">
             <div class="space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 class="font-bold text-xl">Future Project</h3>
              <p class="text-sm text-muted-foreground">現在、AIを活用した新しいプロジェクトを進行中です。</p>
            </div>
            <p class="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Coming Soon</p>
          </Card>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 text-center space-y-8">
        <h2 class="text-3xl md:text-5xl font-bold">新しいプロジェクトを始めましょう</h2>
        <p class="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          現在、フリーランスとしてのプロジェクトや技術コンサルティングのご依頼を承っております。
          あなたのビジョンを形にするお手伝いをさせてください。
        </p>
        <Button variant="secondary" size="xl" as-child class="rounded-full px-8 py-6 text-lg font-bold">
          <NuxtLink to="/contact">話をしてみる</NuxtLink>
        </Button>
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
