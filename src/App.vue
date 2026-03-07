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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=400&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop",
    badge: "",
    price: 60,
    discount: 15,
    stock: 30,
    tags: ["Accessories", "Leather"],
  },
]);
let cart = ref(0);

const buyNow = (id) => {
  console.log("buy now");
  products.value[id - 1].stock--;
  cart.value++;
};

</script>

<template>
  <Header :cart="cart" />
  <router-view :products="products" @buyNow="buyNow"></router-view>
  <Footer />
</template>
