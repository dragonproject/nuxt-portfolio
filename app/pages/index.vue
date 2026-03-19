<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center bg-brand selection:bg-white selection:text-brand overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-amber-300 rounded-full blur-[100px] opacity-20"></div>

      <div class="container relative z-10 py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content: Bold Typography -->
          <div class="space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.9] text-brand-dark tracking-tighter animate-in fade-in slide-in-from-left-8 duration-1000">
              Ideas that <br />
              <span class="text-white">stick.</span> Designs <br />
              that <span class="italic font-serif">flow.</span>
            </h1>
            <p class="text-xl md:text-2xl font-black text-brand-dark/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
              妥協のないパフォーマンスと美しさが共存するデジタル体験を。
              JavaScriptデベロッパーとして、洗練されたコードであなたのビジョンを具現化します。
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 justify-center lg:justify-start">
              <Button as-child size="xl" class="rounded-full px-12 py-8 text-xl font-black bg-brand-dark text-brand hover:bg-[#3D1E16] transition-all hover:scale-110 shadow-2xl border-none">
                <NuxtLink to="/blogs">ブログを読む</NuxtLink>
              </Button>
              <Button variant="ghost" size="xl" as-child class="rounded-full px-12 py-8 text-xl font-black text-brand-dark hover:bg-white/10 transition-all underline decoration-4 underline-offset-8">
                <NuxtLink to="/contact">お問い合わせ</NuxtLink>
              </Button>
            </div>
          </div>

          <!-- Right Content: Floating Mockup (Linktree Style) -->
          <div class="relative order-1 lg:order-2 flex justify-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div class="w-[320px] h-[640px] bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-brand-dark p-6 flex flex-col items-center space-y-8 relative overflow-hidden group">
              <!-- Top bar -->
              <div class="w-16 h-1.5 bg-brand-dark/10 rounded-full mb-4"></div>
              
              <!-- Profile in Mockup -->
              <div class="flex flex-col items-center space-y-4">
                <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-brand/20 shadow-lg">
                  <nuxt-img src="/images/profile.jpg" alt="profile" class="w-full h-full object-cover" />
                </div>
                <div class="text-center">
                  <h3 class="text-xl font-black text-brand-dark">@ryutaro_seki</h3>
                  <p class="text-sm font-bold text-brand">Available for Work</p>
                </div>
              </div>

              <!-- Mock Links -->
              <div class="w-full space-y-3 pt-4">
                <NuxtLink 
                  to="/blogs" 
                  class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between hover:bg-brand hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer text-brand-dark group/item shadow-sm hover:shadow-lg hover:ring-1 hover:ring-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[600ms] fill-mode-both"
                >
                  <span class="font-bold text-sm">Latest Post</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="opacity-40 group-hover/item:opacity-100 transition-all group-hover/item:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
                <NuxtLink 
                  to="#works" 
                  class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between hover:bg-brand hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer text-brand-dark group/item shadow-sm hover:shadow-lg hover:ring-1 hover:ring-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[700ms] fill-mode-both"
                >
                  <span class="font-bold text-sm">Selected Works</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="opacity-40 group-hover/item:opacity-100 transition-all group-hover/item:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
                <NuxtLink 
                  to="/contact" 
                  class="w-full p-4 bg-zinc-100 rounded-xl flex items-center justify-between hover:bg-brand hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer text-brand-dark group/item shadow-sm hover:shadow-lg hover:ring-1 hover:ring-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[800ms] fill-mode-both"
                >
                  <span class="font-bold text-sm">Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="opacity-40 group-hover/item:opacity-100 transition-all group-hover/item:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>

              <!-- Background pattern inside mockup -->
              <div class="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
                <div class="absolute inset-0 bg-[radial-gradient(theme(colors.brand.DEFAULT)_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
            </div>

            <!-- Decorative floating blobs around mockup -->
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-white/20 backdrop-blur-xl rounded-2xl rotate-12 -z-10 hidden sm:block"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-dark/10 backdrop-blur-xl rounded-full -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="flex flex-col">
      <!-- Profile Section -->
      <section class="bg-blue-600 text-white py-24 md:py-32 relative overflow-hidden">
        <!-- Abstract Decoration -->
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div class="container relative z-10 grid md:grid-cols-5 gap-16 items-center">
          <div class="md:col-span-3 space-y-10">
            <div class="space-y-4">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter">Passion <br/>for Code</h2>
              <div class="flex items-center gap-4">
                <div class="h-[3px] w-12 bg-white"></div>
                <span class="text-sm font-bold tracking-[0.3em] uppercase opacity-80">エンジニアとしての情熱</span>
              </div>
            </div>
            <p class="text-xl md:text-2xl font-medium leading-relaxed opacity-90 max-w-2xl">
              フロントエンド開発を中心に、10年以上に渡り多種多様なデジタルプロダクトの構築に携わってきました。
              単にコードを書くだけでなく、ユーザー体験（UX）を第一に考え、技術を通してビジネスの課題を解決することに価値を感じています。
            </p>
            <Button as-child size="xl" class="rounded-full px-10 bg-white text-blue-600 hover:bg-zinc-100 hover:scale-105 transition-all text-lg font-black shadow-xl">
              <NuxtLink to="/contact">Let's Connect</NuxtLink>
            </Button>
          </div>
          <div class="md:col-span-2 relative group max-w-sm mx-auto w-full">
            <div class="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.03]">
              <nuxt-img 
                src="/images/profile.jpg" 
                alt="profile" 
                format="webp" 
                class="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="bg-zinc-950 py-24 md:py-32 relative overflow-hidden">
        <div class="container relative z-10 space-y-20">
          <div class="text-center space-y-4">
            <div class="inline-block relative">
              <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-white">Technology Stack</h2>
              <div class="flex items-center justify-center mt-6">
                <span class="px-6 py-2 rounded-full bg-brand text-white text-sm font-bold tracking-[0.25em] uppercase shadow-lg shadow-brand/20">
                  技術スタック
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              v-for="skill in skills" 
              :key="skill.name" 
              class="group relative p-8 border-none bg-zinc-900 text-white shadow-2xl hover:shadow-brand/10 transition-all duration-500 rounded-[2.5rem] overflow-hidden"
            >
              <div class="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[4rem]"></div>
              
              <div class="flex flex-col h-full space-y-6 relative z-10">
                <div class="flex items-start justify-between">
                  <div class="w-16 h-16 rounded-2xl bg-zinc-800 p-3 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
                  </div>
                  <div class="text-right">
                    <div class="text-2xl font-black text-white">{{ skill.name }}</div>
                    <div class="text-xs font-bold text-brand uppercase tracking-widest mt-1 italic">Exp: {{ skill.exp }}+ Years</div>
                  </div>
                </div>

                <div class="space-y-4 flex-grow">
                  <p class="text-zinc-400 text-sm leading-relaxed font-medium">
                    {{ skill.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span 
                      v-for="tag in skill.tags" 
                      :key="tag" 
                      class="text-[10px] font-bold px-3 py-1 bg-zinc-800 rounded-full text-zinc-500 group-hover:bg-brand group-hover:text-white transition-colors"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
                <div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-brand rounded-full transition-all duration-1000 origin-left scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <!-- Works Section -->
      <section id="works" class="bg-white py-24 md:py-32 scroll-mt-0">
        <div class="container space-y-20">
          <div class="text-center space-y-4">
            <div class="inline-block">
              <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">Selected Works</h2>
              <div class="flex items-center justify-center mt-6">
                <span class="px-6 py-2 rounded-full bg-brand text-white text-sm font-bold tracking-[0.25em] uppercase shadow-lg shadow-brand/20">
                  制作実績
                </span>
              </div>
            </div>
            <p class="text-brand-dark/60 max-w-2xl mx-auto pt-4 font-medium">これまでに制作した主要なプロジェクトの中から、いくつかをご紹介します。</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[300px]">
            <!-- Feature project (Large Bento Card) -->
            <Card class="md:col-span-2 md:row-span-2 overflow-hidden group relative border-none bg-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700 py-0 gap-0 rounded-[3rem]">
              <NuxtLink to="https://next-market-server-actions-silk.vercel.app/" target="_blank" class="block h-full relative">
                <nuxt-img 
                  src="/images/next-market.png" 
                  alt="Next Market" 
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div class="absolute inset-x-0 bottom-0 p-10 z-20 bg-gradient-to-t from-white via-white/95 to-transparent pt-24">
                  <div class="flex gap-2 mb-4">
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-xs font-bold px-4 py-1">Next.js</Badge>
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-xs font-bold px-4 py-1">Full Stack</Badge>
                  </div>
                  <h3 class="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">Next Market</h3>
                  <p class="text-brand-dark/70 max-w-lg mt-4 text-sm md:text-base leading-relaxed font-medium">Server Actionsを活用した、高速でセキュアなマーケットプレイス。モダンなWeb体験の追求。</p>
                </div>
              </NuxtLink>
            </Card>

            <!-- Small Bento Card 1: Blogs -->
            <Card class="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-between bg-zinc-950 text-white hover:bg-zinc-900 transition-all shadow-xl rounded-[2.5rem] border-none group/blog">
              <NuxtLink to="/blogs" class="flex flex-col h-full justify-between">
                <div class="space-y-6">
                  <div class="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center text-white rotate-3 group-hover/blog:rotate-12 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                  </div>
                  <h3 class="font-black text-2xl tracking-tight">Blogs</h3>
                  <p class="text-sm text-zinc-400 leading-relaxed font-medium">開発の裏側や、日々の学びをアウトプット。</p>
                </div>
                <div class="flex items-center gap-2 text-xs font-bold text-brand italic">
                  Explore Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </NuxtLink>
            </Card>

            <!-- Small Bento Card 2: Travel Blog -->
            <Card class="md:col-span-1 md:row-span-1 overflow-hidden group relative border-none bg-zinc-100 shadow-sm hover:shadow-xl transition-all rounded-[2.5rem]">
              <NuxtLink to="https://travel-blog-eosin-chi.vercel.app/" target="_blank" class="block h-full relative">
                <nuxt-img src="/images/travel-blog.png" alt="Travel Blog" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-5 z-20 bg-white/95 backdrop-blur-sm">
                  <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] font-bold mb-1">Next.js</Badge>
                  <h3 class="font-bold text-brand-dark text-base">Travel Blog</h3>
                </div>
              </NuxtLink>
            </Card>

            <Card v-for="(work, index) in [
              { title: 'English School', img: '/images/english-school.png', url: 'https://english-school-app.vercel.app/', tech: 'Next.js' },
              { title: 'Smart Bookshelf', img: '/images/smart-bookshelf.png', url: 'https://bookshelf-q9y2.vercel.app/', tech: 'React' },
              { title: 'La Buca Cafe', img: '/images/la-buca.png', url: 'https://la-buca-italian-cafe-pearl.vercel.app/', tech: 'Next.js' },
              { title: 'PON DESIGN', img: '/images/pon-design.png', url: 'https://pon-design.vercel.app/', tech: 'Next.js' }
            ]" :key="index" class="md:col-span-1 md:row-span-1 overflow-hidden group relative border-none bg-zinc-100 shadow-sm hover:shadow-xl transition-all rounded-[2.5rem]">
              <NuxtLink :to="work.url" target="_blank" class="block h-full relative">
                <nuxt-img :src="work.img" :alt="work.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-x-0 bottom-0 p-5 z-20 bg-white/95 backdrop-blur-sm">
                  <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] font-bold mb-1">{{ work.tech }}</Badge>
                  <h3 class="font-bold text-brand-dark text-base">{{ work.title }}</h3>
                </div>
              </NuxtLink>
            </Card>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-zinc-50 py-24 md:py-32">
        <div class="container">
          <div class="relative overflow-hidden rounded-[4rem] bg-[#D1E922] text-brand-dark p-12 md:p-24 text-center space-y-12 group shadow-[0_40px_100px_-20px_rgba(209,233,34,0.3)]">
            <div class="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-[100px] -z-0"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/5 rounded-full blur-[80px] -z-0"></div>

            <div class="relative z-10 space-y-8">
              <h2 class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
                Let's make <br />
                it <span class="text-black/30 italic font-serif">vibrant.</span>
              </h2>
              <div class="flex items-center justify-center">
                <span class="px-8 py-3 rounded-full bg-brand-dark text-[#D1E922] text-sm font-black tracking-[0.3em] uppercase shadow-xl transition-transform group-hover:scale-105 duration-500">
                  共に未来を創りましょう
                </span>
              </div>
            </div>
            
            <p class="relative z-10 text-brand-dark/80 text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed">
              あなたのビジョンに、鮮やかな色彩と確かな技術を。
              新しい挑戦のご相談をお待ちしています。
            </p>
            <div class="relative z-10 pt-6">
              <Button as-child class="rounded-full px-16 py-10 text-2xl font-black bg-brand-dark text-[#D1E922] hover:bg-black hover:scale-110 transition-all border-none shadow-2xl shadow-brand-dark/30 cursor-pointer">
                <NuxtLink to="/contact">TALK WITH ME</NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Badge } from '@/components/ui/badge'

const skills = [
  { 
    name: 'JavaScript', 
    exp: 10, 
    icon: '/images/javascript.svg',
    description: '10年のキャリアを支える核となる言語。複雑な非同期処理からメモリ最適化、ESNextの最新仕様まで深く精通しています。',
    tags: ['Advanced Async', 'Performance', 'Core JS']
  },
  { 
    name: 'Next.js', 
    exp: 6, 
    icon: '/images/nextjs.svg',
    description: 'App RouterやServer Componentsを駆使。SEOに強く、フロントエンドとバックエンドがシームレスに融合した体験を構築します。',
    tags: ['App Router', 'RSC', 'SEO Edge']
  },
  { 
    name: 'React', 
    exp: 4, 
    icon: '/images/react.svg',
    description: 'Hooksと宣言的UIによる洗練された設計。大規模アプリケーションにおける保守性の高いアーキテクチャ構築を得意とします。',
    tags: ['Pure Logic', 'Clean Architecture', 'Hooks']
  },
  { 
    name: 'Vue.js', 
    exp: 4, 
    icon: '/images/vue.svg',
    description: '型安全なComposition APIを用いたクリーンなロジック実装。直感的で高速な開発サイクルと、軽快なUIアニメーションを実現。',
    tags: ['Nuxt Bridge', 'Pinia', 'Reactive UI']
  },
  { 
    name: 'Nuxt', 
    exp: 3, 
    icon: '/images/nuxt.svg',
    description: 'Vue.jsのポテンシャルを最大化するフレームワーク。SSR/SSG/ISRを自在に操り、ゼロコンフィグで最高のパフォーマンスを提供。',
    tags: ['Nuxt 3', 'Nitro Engine', 'Zero Config']
  },
]

useHead({
  title: "Ryutaro Seki | Official Portfolio",
  meta: [{ name: "description", content: "Ryutaro Sekiのポートフォリオサイトです。JavaScript開発のエキスパート。" }],
});
</script>
