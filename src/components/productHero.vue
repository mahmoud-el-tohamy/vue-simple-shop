<script setup>
import { computed } from "vue";

const props = defineProps(["mainProduct"]);

const discountedPrice = computed(() => {
  if (props.mainProduct && props.mainProduct.discount > 0) {
    return props.mainProduct.price * (1 - props.mainProduct.discount / 100);
  }
  return props.mainProduct?.price || 0;
});
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img :src="mainProduct.image" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">{{ mainProduct.name }}</h1>
        <p class="py-6">
          {{ mainProduct.description }}
        </p>
        <div class="badge badge-dash badge-primary">
          {{ discountedPrice }} EGP
        </div>
        <div class="badge badge-dash badge-secondary m-2">{{ mainProduct.badge }}</div>
        <br /><br />
        <button class="btn btn-outline">Buy Now</button>
      </div>
    </div>
  </div>
</template>
