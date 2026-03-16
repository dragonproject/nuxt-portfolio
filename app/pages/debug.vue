<template>
  <div>
    <h1>Debug Blogs Collection</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('debug-blogs', () => queryCollection('blogs').all())
</script>
