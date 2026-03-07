<script setup>
import ProductHero from "@/components/productHero.vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
defineEmits(["buyNow", "view"]);

const route = useRoute();
const productId = computed(() => route.params.id);

const props = defineProps({
  products: { type: Array, required: true },
});
const filteredProducts = computed(() =>
  props.products.filter((product) => product.id !== Number(productId.value)),
);
</script>

<template>
  <ProductHero :products="props.products" @buyNow="$emit('buyNow', productId)" />
  <div class="flex flex-row flex-wrap justify-center gap-4">
    <CarouselBanner :products="filteredProducts" />
  </div>
</template>

<style scoped></style>
