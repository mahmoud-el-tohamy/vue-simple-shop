<script setup>
import { computed } from "vue";
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("pcard Component Mounted");
});
onUnmounted(() => {
  console.log("pcard Component Unmounted");
});

const props = defineProps(["product"]);

defineEmits(["view"]);

const discountedPrice = computed(() => {
  if (props.product && props.product.discount > 0) {
    return props.product.price * (1 - props.product.discount / 100);
  }
  return props.product?.price || 0;
});
</script>

<template>
  <div class="card bg-base-100 w-96 m-8 shadow-sm max-h-100">
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
        <router-link
          :to="{ name: 'product', params: { id: product.id } }"
          v-if="product.stock > 0"
          class="btn btn-primary"
        >
          View
        </router-link>
        <button v-else class="btn btn-outline" disabled>Out of Stock</button>
      </div>
    </div>
  </div>
</template>
