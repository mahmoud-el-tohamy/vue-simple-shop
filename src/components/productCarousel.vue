<script setup lang="ts">
import ProductCard from "@/components/productCard.vue";
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("carousel Component Mounted");
});
onUnmounted(() => {
  console.log("carousel Component Unmounted");
});

const props = defineProps(["products"]);

defineEmits(["view"]);
</script>

<template>
  <div
    class="carousel carousel-center bg-neutral rounded-box min-w-full space-x-4 p-4"
  >
    <div v-for="product in products" :key="product.id" class="carousel-item">
      
      <ProductCard :product="product" />

    </div>
  </div>
</template>
