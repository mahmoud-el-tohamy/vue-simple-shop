<script setup>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/footer.vue";
import { ref } from "vue";
import router from "./router";
const products = ref([
  {
    id: 1,
    name: "Cozy Sneakers",
    description: "High-quality sneakers that go with everything you wear.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "NEW",
    price: 120,
    discount: 20,
    stock: 10,
    tags: ["Fashion", "Casual", "Sport"],
  },
  {
    id: 2,
    name: "Running Shoes",
    description: "Built for speed and comfort on any terrain.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "",
    price: 90,
    discount: 10,
    stock: 5,
    tags: ["Sport", "Running"],
  },
  {
    id: 3,
    name: "Casual Boots",
    description: "Rugged boots for everyday adventures.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "SALE",
    price: 150,
    discount: 0,
    stock: 8,
    tags: ["Casual", "Winter"],
  },
  {
    id: 4,
    name: "Flip Flops",
    description: "Light and breezy for sunny days.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "",
    price: 30,
    discount: 50,
    stock: 20,
    tags: ["Summer", "Casual"],
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    description: "Protect your eyes with style.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "TRENDING",
    price: 45,
    discount: 0,
    stock: 15,
    tags: ["Accessories", "Summer"],
  },
  {
    id: 6,
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badge: "",
    price: 60,
    discount: 15,
    stock: 30,
    tags: ["Accessories", "Leather"],
  },
]);

const buyNow = (id) => {
  console.log("buy now");
  products.value[id - 1].stock--;
};

</script>

<template>
  <Header />
  <router-view :products="products" @buyNow="buyNow"></router-view>
  <Footer />
</template>
