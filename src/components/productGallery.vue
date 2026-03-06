<script setup>
defineProps(["product"]);
</script>

<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        :src="product.image"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>
        {{ product.description }}
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
