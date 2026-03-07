import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import productView from "@/views/productView.vue";
import aboutView from "@/views/aboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: productView,
    },
    {
      path: "/about",
      name: "about",
      component: aboutView,
    },
  ],
});

export default router;
