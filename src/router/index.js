import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Part1View from "../views/Part1View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/part1",
      name: "part1",
      component: Part1View,
    },
  ],
});

export default router;
