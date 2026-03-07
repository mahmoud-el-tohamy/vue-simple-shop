<script setup>
import { onMounted, onUnmounted } from "vue";
import bgImage from "../../public/bg.jpg";

onMounted(() => {
  console.log("aboutV Component Mounted");
});
onUnmounted(() => {
  console.log("aboutV Component Unmounted");
});
</script>
<template>
  <div
    class="hero min-h-screen"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="hero-overlay opacity-80 bg-black"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-white">About Us</h1>
        <p class="mb-5 text-gray-200">
          This is a simple e-commerce website built with Vue.js and Tailwind CSS.
        </p>
        <a
          href="https://github.com/mahmoud-el-tohamy"
          target="_blank"
          class="btn btn-primary"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
