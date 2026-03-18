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
            <p class="text-xl md:text-2xl font-medium text-brand-dark/80 max-w-xl leading-snug animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
              Ryutaro Seki is a JavaScript Developer building high-performance, beautiful digital worlds from Japan.
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 justify-center lg:justify-start">
              <Button as-child size="xl" class="rounded-full px-10 py-8 text-xl font-black bg-brand-dark text-brand hover:bg-[#3D1E16] transition-all hover:scale-105 shadow-xl border-none">
                <NuxtLink to="/blogs">Explore Blogs</NuxtLink>
              </Button>
              <Button variant="ghost" size="xl" as-child class="rounded-full px-10 py-8 text-xl font-black text-brand-dark hover:bg-white/10 transition-all underline decoration-4 underline-offset-8">
                <NuxtLink to="/contact">Get in Touch</NuxtLink>
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

    <div class="container py-16 md:py-24 space-y-24">
      <!-- Profile Section -->
      <section class="grid md:grid-cols-5 gap-12 items-center">
        <div class="md:col-span-3 space-y-8">
          <div class="space-y-3">
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">Passion for Code</h2>
            <div class="flex items-center gap-3">
              <div class="h-[2px] w-6 bg-brand"></div>
              <span class="text-sm font-bold tracking-[0.2em] text-brand uppercase">エンジニアとしての情熱</span>
            </div>
          </div>
          <p class="text-lg text-brand-dark/70 leading-relaxed font-medium">
            フロントエンド開発を中心に、10年以上に渡り多種多様なデジタルプロダクトの構築に携わってきました。
            単にコードを書くだけでなく、ユーザー体験（UX）を第一に考え、技術を通してビジネスの課題を解決することに価値を感じています。
            現在はモダンなJavaScriptフレームワークを活用し、高速で堅牢、かつ美しいインターフェースの実装に力を入れています。
          </p>
          <Button as-child size="xl" class="rounded-full px-8 bg-brand-dark text-white hover:bg-[#3D1E16]">
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
            <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-brand-dark">Technology Stack</h2>
            <div class="flex items-center justify-center mt-6">
              <span class="px-6 py-2 rounded-full bg-brand text-white text-sm font-bold tracking-[0.25em] uppercase shadow-lg shadow-brand/20">
                技術スタック
              </span>
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
      <section id="works" class="space-y-12 scroll-mt-24">
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
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          <!-- Feature project (Large Bento Card) -->
          <Card class="md:col-span-2 md:row-span-2 overflow-hidden group relative border-none bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 py-0 gap-0">
            <NuxtLink to="https://next-market-server-actions-silk.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/next-market.png" 
                alt="Next Market" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-white via-white/90 to-transparent pt-20">
                <div class="flex gap-2 mb-3">
                  <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-xs font-bold">Next.js</Badge>
                  <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-xs font-bold">Full Stack</Badge>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-brand-dark">Next Market</h3>
                <p class="text-brand-dark/70 max-w-lg mt-2 text-sm md:text-base leading-relaxed">Server Actionsを活用した、高速でセキュアなマーケットプレイス・アプリケーション。ユーザー認証、商品出品、詳細閲覧機能を備えたモダンなプロダクトです。</p>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 1: Blogs -->
          <Card class="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between bg-white dark:bg-zinc-900 hover:border-brand/30 transition-all shadow-sm hover:shadow-md border border-zinc-100">
            <NuxtLink to="/blogs" class="flex flex-col h-full justify-between">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
                </div>
                <h3 class="font-bold text-xl text-brand-dark">Blogs</h3>
                <p class="text-sm text-brand-dark/60 leading-relaxed">開発の裏側や、日々の技術的な学びをアウトプットしています。</p>
              </div>
              <div class="flex items-center gap-2 text-xs font-bold text-brand italic">
                View All <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 2: Travel Blog -->
          <Card class="md:col-span-1 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all py-0 gap-0">
            <NuxtLink to="https://travel-blog-eosin-chi.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/travel-blog.png" 
                alt="Travel Blog" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-x-0 bottom-0 p-4 z-20 bg-white/90 backdrop-blur-sm border-t border-zinc-100">
                <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">Next.js</Badge>
                <h3 class="font-bold text-brand-dark text-base leading-tight">Travel Blog</h3>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 3: English School -->
          <Card class="md:col-span-1 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all py-0 gap-0">
            <NuxtLink to="https://english-school-app.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/english-school.png" 
                alt="English School App" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-x-0 bottom-0 p-4 z-20 bg-white/90 backdrop-blur-sm border-t border-zinc-100">
                <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">Next.js</Badge>
                <h3 class="font-bold text-brand-dark text-base leading-tight">English School</h3>
              </div>
            </NuxtLink>
          </Card>

          <!-- Small Bento Card 4: Smart Bookshelf -->
          <Card class="md:col-span-1 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all py-0 gap-0">
            <NuxtLink to="https://bookshelf-q9y2.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/smart-bookshelf.png" 
                alt="Smart Bookshelf" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-x-0 bottom-0 p-4 z-20 bg-white/90 backdrop-blur-sm border-t border-zinc-100">
                <Badge variant="secondary" class="bg-brand/20 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">React + Vite</Badge>
                <h3 class="font-bold text-brand-dark text-base leading-tight">Smart Bookshelf</h3>
              </div>
            </NuxtLink>
          </Card>

          <!-- Medium Bento Card 5: La Buca Italian Cafe -->
          <Card class="md:col-span-2 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all py-0 gap-0">
            <NuxtLink to="https://la-buca-italian-cafe-pearl.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/la-buca.png" 
                alt="La Buca Italian Cafe" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 p-6 z-20 bg-white/95 backdrop-blur-md border-t border-zinc-100">
                <div class="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">Next.js</Badge>
                    <h3 class="font-bold text-brand-dark text-xl leading-tight">La Buca Italian Cafe</h3>
                  </div>
                  <div class="p-2 rounded-full bg-brand/10 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10M17 7H7v10"/></svg>
                  </div>
                </div>
                <p class="text-brand-dark/70 text-sm mt-2 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">三田の街角にある隠れ家的なイタリアンカフェ。温かみのあるデザインと高いユーザビリティを両立しています。</p>
              </div>
            </NuxtLink>
          </Card>

          <!-- Medium Bento Card 6: PON DESIGN -->
          <Card class="md:col-span-2 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all py-0 gap-0">
            <NuxtLink to="https://pon-design.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/pon-design.png" 
                alt="PON DESIGN" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 p-6 z-20 bg-white/95 backdrop-blur-md border-t border-zinc-100">
                <div class="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">Next.js</Badge>
                    <h3 class="font-bold text-brand-dark text-xl leading-tight">PON DESIGN</h3>
                  </div>
                  <div class="p-2 rounded-full bg-brand/10 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10M17 7H7v10"/></svg>
                  </div>
                </div>
                <p class="text-brand-dark/70 text-sm mt-2 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">「WEB DESIGN SPECIALIST」を掲げる制作会社のコーポレートサイト。洗練されたビジュアルと没入感のあるレイアウトを実現。</p>
              </div>
            </NuxtLink>
          </Card>

          <!-- Medium Bento Card 7: Furniture Design -->
          <Card class="md:col-span-2 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all py-0 gap-0">
            <NuxtLink to="https://store-app-blue.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/furniture-design.png" 
                alt="Furniture Design" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 p-6 z-20 bg-white/95 backdrop-blur-md border-t border-zinc-100">
                <div class="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">React + Vite</Badge>
                    <h3 class="font-bold text-brand-dark text-xl leading-tight">Furniture Design</h3>
                  </div>
                  <div class="p-2 rounded-full bg-brand/10 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10M17 7H7v10"/></svg>
                  </div>
                </div>
                <p class="text-brand-dark/70 text-sm mt-2 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">ミニマルで洗練された家具を扱うオンラインカタログサイト。機能美を強調したクリーンなレイアウトが特徴です。</p>
              </div>
            </NuxtLink>
          </Card>

          <!-- Medium Bento Card 8: ENGBODY -->
          <Card class="md:col-span-2 md:row-span-1 overflow-hidden group relative border border-zinc-100 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all py-0 gap-0">
            <NuxtLink to="https://engbody-app.vercel.app/" target="_blank" class="block h-full relative">
              <nuxt-img 
                src="/images/engbody.png" 
                alt="ENGBODY" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 p-6 z-20 bg-white/95 backdrop-blur-md border-t border-zinc-100">
                <div class="flex justify-between items-start">
                  <div>
                    <Badge variant="secondary" class="bg-brand/10 text-brand border-none text-[10px] scale-90 origin-left font-bold mb-1">Next.js</Badge>
                    <h3 class="font-bold text-brand-dark text-xl leading-tight">ENGBODY</h3>
                  </div>
                  <div class="p-2 rounded-full bg-brand/10 text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7l10 10M17 7H7v10"/></svg>
                  </div>
                </div>
                <p class="text-brand-dark/70 text-sm mt-2 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">英会話とパーソナルトレーニングを融合したユニークなジムのウェブサイト。クリーンでエネルギッシュなビジュアルが特徴です。</p>
              </div>
            </NuxtLink>
          </Card>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="relative overflow-hidden rounded-[3rem] bg-[#D1E922] text-brand-dark p-12 md:p-24 text-center space-y-10 group shadow-2xl shadow-[#D1E922]/20">
        <!-- Decor -->
        <div class="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-[100px] -z-0"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/5 rounded-full blur-[80px] -z-0"></div>

        <div class="relative z-10 space-y-6">
          <h2 class="text-4xl md:text-7xl font-black tracking-tighter text-brand-dark leading-[0.9]">
            Let's build <br />
            something <span class="text-black/40 italic font-serif">extraordinary.</span>
          </h2>
          <div class="flex items-center justify-center">
            <span class="px-6 py-2 rounded-full bg-brand-dark text-[#D1E922] text-sm font-bold tracking-[0.25em] uppercase shadow-lg shadow-black/10 transition-transform group-hover:scale-105 duration-500">
              新しいプロジェクトを始めましょう
            </span>
          </div>
        </div>
        
        <p class="relative z-10 text-brand-dark/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          現在、フリーランスとしてのプロジェクトや技術コンサルティングのご依頼を承っております。
          あなたのビジョンを形にするお手伝いをさせてください。
        </p>
        <div class="relative z-10 pt-4">
          <Button as-child class="rounded-full px-12 py-8 text-xl font-black bg-brand-dark text-[#D1E922] hover:bg-black hover:scale-105 transition-all outline-none border-none shadow-xl shadow-brand-dark/20">
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
