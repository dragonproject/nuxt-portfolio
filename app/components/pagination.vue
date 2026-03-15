<template>
  <h2 class="paginationWrapper">
    <NuxtLink
      v-for="(paginationLink, index) in paginationLinks"
      :to="paginationLink"
      :key="index"
    >
      {{ index + 1 }}
    </NuxtLink>
  </h2>
</template>

<script setup>
const props = defineProps({
  numberPages: Number,
});

const paginationLinks = Array.from({ length: props.numberPages }, (_, i) =>
  i === 0 ? `/blog` : `/blog/page/${i + 1}`
);
</script>
