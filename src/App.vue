<script setup>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/footer.vue";
import ProductView from "@/components/productView.vue";
const mainProduct = {
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear.",
  image:
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  badge: "NEW",
  price: 120,
  discount: 20,
  tags: ["Fashion", "Casual", "Sport"],
};

const relatedProducts = [
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];
</script>

<template>
  <Header />
  <ProductView :mainProduct="mainProduct" :relatedProducts="relatedProducts" />
  <Footer />
</template>
