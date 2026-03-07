<script setup lang="ts">
import productCarousel from "@/components/productCarousel.vue";
import carouselBanner from "@/components/carouselBanner.vue";
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("homeV Component Mounted");
});
onUnmounted(() => {
  console.log("homeV Component Unmounted");
});
const props = defineProps(["products"]);
</script>

<template>
  <div class="flex justify-center p-10 flex-col min-h-sccreen pics-carousel">
    <h1 class="text-5xl font-bold">Welcome</h1>
    <carouselBanner />
  </div>
  <div class="flex justify-center flex-col min-h-sccreen mt-10">
    <h1 class="text-5xl font-bold ml-10">Our Products</h1>
    <productCarousel :products="products" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  h1 {
    font-size: 2rem;
    margin: 10px auto;
  }
  .pics-carousel {
    padding: 20px;
  }
}
</style>
