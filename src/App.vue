<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref, reactive } from "vue";

const state = reactive({
  partsCompleted: {
    GoPart1: false,
    GoPart2: false,
    GoPart3: false,
  },
});

const router = useRouter();
const informations = ref([]);
const dataArray = ref([]);
const Category = ref("none");
const activity = ref("none");
const session_selected = ref([]);

const fetchProduct = () => {
  fetch(`../public/data_activities.json`)
    .then((response) => response.json())
    .then((data) => {
      dataArray.value.push(...data);
    });
};
fetchProduct();

function getHref(completed, part) {
  return completed ? `${part}` : null;
}

const seeMore = () => {
  router.push({ name: "part1" });
};

const GoPart2 = () => {
  state.partsCompleted.part1 = true;
  router.push({ name: "part2" });
};

const handleInformation = (information) => {
  informations.value.push(information);
  console.log(informations.value);
  GoPart2();
};

function handleCategorySelected(selectedCategory) {
  console.log("Catégorie sélectionnée:", selectedCategory);
  Category.value = selectedCategory;
}
function activitieName(activitieName) {
  console.log("activitieName sélectionnée:", activitieName);
  activity.value = activitieName;
}

const GoPart3 = (name) => {
  state.partsCompleted.part2 = true;
  router.push({ name: "part3", params: { name } });
};

function handleSessionSelected(session) {
  console.log("Session sélectionnée:", session);
  session_selected.value = session;
  GoPart4();
}

const GoPart4 = () => {
  state.partsCompleted.part3 = true;
  router.push({ name: "part4" });
};

const goHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <nav>
    <ul>
      <li v-for="(completed, part) in state.partsCompleted" :key="part">
        <a
          @click.prevent="getHref(completed, part)"
          :class="{ disabled: !completed }"
          >{{ part }}</a
        >
      </li>
    </ul>
  </nav>

  <RouterView
    :Category="Category"
    :activity="activity"
    :session_selected="session_selected"
    :informations="informations"
    :dataArray="dataArray"
    @seeMore="seeMore"
    @sendInformation="handleInformation"
    @category-selected="handleCategorySelected"
    @GoPart3="GoPart3"
    @activitieName="activitieName"
    @session-selected="handleSessionSelected"
    @goHome="goHome"
  />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

a {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #f0f0f0;
  text-decoration: none;
  color: #333;
}

a.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

a:hover {
  background-color: #e0e0e0;
}
</style>
