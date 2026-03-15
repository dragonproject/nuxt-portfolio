<template>
  <div class="py-16 md:py-24">
    <div class="container max-w-2xl space-y-12">
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold tracking-tight md:text-5xl">Contact</h1>
        <p class="text-xl text-muted-foreground">お気軽にご連絡ください</p>
      </div>

      <Card class="p-8 shadow-lg">
        <form action="https://formspree.io/f/mrgwdroj" method="POST" class="space-y-6">
          <div class="space-y-2">
            <Label for="name">お名前</Label>
            <Input type="text" name="name" id="name" placeholder="山田 太郎" required />
          </div>
          
          <div class="space-y-2">
            <Label for="email">メールアドレス</Label>
            <Input type="email" name="email" id="email" placeholder="example@gmail.com" required />
          </div>

          <div class="space-y-2">
            <Label for="message">ご用件</Label>
            <Textarea name="message" id="message" placeholder="メッセージを入力してください" :rows="10" required />
          </div>

          <Button type="submit" size="lg" class="w-full">
            送信する
          </Button>
        </form>
      </Card>
      
      <div class="text-center text-sm text-muted-foreground pt-8">
        <p>通常、2〜3営業日以内にご返信いたします。</p>
      </div>
    </div>
  </div>
</template>


<script setup>
useHead({
  title: "コンタクト",
  meta: [{ name: "description", content: "コンタクトページです" }],
});
</script>
