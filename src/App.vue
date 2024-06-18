<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const router = useRouter();
const informations = ref([]);
const dataArray = ref([]);

const fetchProduct = () => {
  fetch(`../public/data_activities.json`)
    .then((response) => response.json())
    .then((data) => {
      dataArray.value.push(...data);
    });
};
fetchProduct();

const seeMore = () => {
  router.push({ name: "part1" });
};

const GoPart2 = () => {
  router.push({ name: "part2" });
};

const handleInformation = (information) => {
  informations.value.push(information);
  console.log(informations.value);
  GoPart2();
};
</script>

<template>
  <RouterView
    :dataArray="dataArray"
    @seeMore="seeMore"
    @sendInformation="handleInformation"
  />
</template>

<style scoped></style>
