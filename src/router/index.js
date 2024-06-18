import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Part1View from "../views/Part1View.vue";
import Part2View from "../views/Part2View.vue";
import Part3View from "../views/Part3View.vue";
import Part4View from "../views/Part4View.vue";

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
    {
      path: "/part2",
      name: "part2",
      component: Part2View,
    },
    {
      path: "/part3/:name",
      name: "part3",
      component: Part3View,
    },
    {
      path: "/part4",
      name: "part4",
      component: Part4View,
    },
  ],
});

export default router;
