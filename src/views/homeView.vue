<script setup lang="ts">
import CarouselBanner from "@/components/CarouselBanner.vue";
const props = defineProps(["products"]);
</script>

<template>
  <div class="flex justify-center flex-col h-150 mt-20">
    <h1 class="text-5xl font-bold ml-10">Home</h1>
    <CarouselBanner :products="products" />
  </div>
</template>
