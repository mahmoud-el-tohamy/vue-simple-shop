<script setup lang="ts">
import ProductCard from "@/components/productCard.vue";
import { onMounted, onUnmounted, ref } from "vue";

const carouselRef = ref<HTMLElement | null>(null);
let scrollInterval: ReturnType<typeof setInterval>;

const startAutoScroll = () => {
  scrollInterval = setInterval(() => {
    if (carouselRef.value) {
      const scrollAmount = (carouselRef.value.children[0] as HTMLElement)?.clientWidth || 300;
      if (
        carouselRef.value.scrollLeft + carouselRef.value.clientWidth >=
        carouselRef.value.scrollWidth - 10
      ) {
        carouselRef.value.scrollLeft = 0;
      } else {
        carouselRef.value.scrollLeft += scrollAmount;
      }
    }
  }, 3000);
};

const stopAutoScroll = () => {
  clearInterval(scrollInterval);
};

onMounted(() => {
  console.log("carousel Component Mounted");
  startAutoScroll();
});

onUnmounted(() => {
  console.log("carousel Component Unmounted");
  stopAutoScroll();
});

const props = defineProps(["products"]);

defineEmits(["view"]);
</script>

<template>
  <div 
    class="carousel rounded-box mt-10 scroll-smooth"
    ref="carouselRef"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Running Shoes"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Casual Boots"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Flip Flops"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Sunglasses"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Leather Wallet"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&h=300&auto=format&fit=crop"
        alt="More Shoes"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=300&auto=format&fit=crop"
        alt="Red Sneakers"
      />
    </div>
  </div>
</template>
