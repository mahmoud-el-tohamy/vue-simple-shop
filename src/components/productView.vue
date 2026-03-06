<script setup>
import ProductHero from "@/components/productHero.vue";
import ProductGallery from "@/components/productGallery.vue";

defineProps(["mainProduct", "relatedProducts"])
</script>

<template>
  <ProductHero :mainProduct="mainProduct" />
  <div class="flex flex-row flex-wrap justify-center gap-4">
    <ProductGallery v-for="product in relatedProducts" :key="product.id" :product="product" />   
  </div>
</template>

<style scoped>
</style>
