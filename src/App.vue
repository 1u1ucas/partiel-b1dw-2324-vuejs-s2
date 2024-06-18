<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const router = useRouter();

const seeMore = () => {
  router.push({ name: "part1" });
};
</script>

<template>
  <RouterView @seeMore="seeMore" />
</template>

<style scoped></style>
