<script setup>
defineProps(["mainProduct"]);
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
        <div class="badge badge-dash badge-primary">{{ mainProduct.price }} EGP</div> <br><br>
        <button class="btn btn-outline">Buy Now</button>
      </div>
    </div>
  </div>
</template>
