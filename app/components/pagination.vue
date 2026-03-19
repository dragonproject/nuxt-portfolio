<template>
  <div class="flex items-center gap-3">
    <Button
      v-for="(paginationLink, index) in paginationLinks"
      :key="index"
      as-child
      variant="outline"
      size="sm"
      class="w-10 h-10 rounded-xl font-bold transition-all hover:bg-brand hover:text-white hover:border-brand"
    >
      <NuxtLink :to="paginationLink">
        {{ index + 1 }}
      </NuxtLink>
    </Button>
  </div>
</template>

<script setup>
const props = defineProps({
  numberPages: Number,
});

const paginationLinks = Array.from({ length: props.numberPages }, (_, i) =>
  i === 0 ? `/blogs` : `/blogs/page/${i + 1}`
);
</script>
