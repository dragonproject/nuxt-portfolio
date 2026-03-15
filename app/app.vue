<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [{ rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" }],
});
</script>
