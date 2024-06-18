<script setup>
import { ref, defineProps, computed, defineEmits } from "vue";

const emits = defineEmits(["sendInformation"]);

const props = defineProps({
  dataArray: Array,
});

const selectedCategory = ref("none");
const datas = ref(props.dataArray);

const filteredActivities = computed(() => {
  if (selectedCategory.value === "none") {
    return [];
  }
  return datas.value.filter((data) =>
    data.categories.includes(
      selectedCategory.value === "Children" ? "Children" : "Adults"
    )
  );
});

function notifyParent() {
  emits("category-selected", selectedCategory.value);
}
</script>

<template>
  <div class="part2">
    <h3>
      Pour afficher la liste des activité veuillez choisir une catégorie d'âge
    </h3>
    <form action="">
      <label for="age">Choisir une catégorie d'âge:</label>
      <select
        name="age"
        id="age"
        v-model="selectedCategory"
        @change="notifyParent"
      >
        <option value="none">--Sélectionné ici--</option>
        <option value="Children">Enfant</option>
        <option value="Adults">Adulte</option>
      </select>
    </form>
    <h3>Activités</h3>
    <div class="activities" v-if="filteredActivities.length > 0">
      <div v-for="data in filteredActivities" :key="data.id">
        <div class="activitie">
          <h4>{{ data.name }}</h4>
          <button @click="$emit('GoPart3', data.name)">
            Passer à la suite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.part2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5em;
}

form {
  margin-bottom: 20px;
}

select {
  padding: 10px;
  font-size: 1em;
}

.activities {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 50%;
}

h3 {
  margin-bottom: 20px;
}

.activitie {
  margin-bottom: 10px;
  border: black solid 1px;
  padding: 10px;
  border-radius: 10px;
}

h4 {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
