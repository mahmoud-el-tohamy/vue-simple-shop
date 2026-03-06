<script setup>
import { computed } from "vue";

const props = defineProps(["product"]);

const discountedPrice = computed(() => {
  if (props.product && props.product.discount > 0) {
    return props.product.price * (1 - props.product.discount / 100);
  }
  return props.product?.price || 0;
});
</script>

<template>
  <div class="card bg-base-100 w-96 m-8 shadow-sm">
    <figure>
      <img :src="product.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>
        {{ product.description }}
      </p>
      <div class="badge badge-dash badge-primary">
        {{ discountedPrice }} EGP
      </div>
      <div class="card-actions justify-end">
        <button v-if="product.isAvailable" class="btn btn-primary">
          Buy Now
        </button>
        <button v-else class="btn btn-outline">Out of Stock</button>
      </div>
    </div>
  </div>
</template>
