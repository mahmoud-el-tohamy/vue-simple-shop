<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
defineEmits(["buyNow"]);
const props = defineProps({
  products: { type: Array, required: true },
});
const route = useRoute();
const productId = computed(() => route.params.id);
const product = computed(() => props.products[Number(productId.value) - 1]);
const discountedPrice = computed(() => {
  if (product.value && product.value.discount > 0) {
    return product.value.price * (1 - product.value.discount / 100);
  }
  return product.value.price;
});

console.log("this is product from product hero", product.value);
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img :src="product.image" class="max-w-lg rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">{{ product.name }}</h1>
        <p class="py-6">
          {{ product.description }}
        </p>
        <div class="badge badge-dash badge-primary mr-2 mb-1">
          {{ discountedPrice }} EGP
        </div>
        <div v-if="product.badge" class="badge badge-dash badge-secondary">
          {{ product.badge }}
        </div>
        <br />
        <div
          v-for="value in product.tags"
          class="badge badge-dash badge-info mr-1"
        >
          {{ value }}
        </div>
        <br />
        <div
          class="mr-2 mb-1 mt-2 w-55"
          :class="{
            'badge badge-primary': product.stock > 0,
            'badge badge-error': product.stock === 0,
          }"
        >
          {{ product.stock }} in stock
        </div>
        <br /><br />
        <button
          v-if="product.stock > 0"
          class="btn btn-outline"
          @click="$emit('buyNow', product.id)"
        >
          Buy Now
        </button>
        <button v-else class="btn btn-outline">Out of Stock</button>
      </div>
    </div>
  </div>
</template>
