<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router";

const emit = defineEmits(["activitieName", "session-selected"]);

const route = useRoute();

const props = defineProps({
  dataArray: Array,
  Category: String,
});

console.log("dataArray", props.dataArray);

const data = props.dataArray.find((data) => data.name === route.params.name);

console.log("data", data.sessions);

console.log("Category", props.Category);

const filteredSessions = data.sessions.filter(
  (session) => session.categories === props.Category
);

console.log("filteredSessions", filteredSessions);

emit("activitieName", data.name);
function sendSessionToParent(session) {
  emit("session-selected", session);
}
</script>

<template>
  <div class="part3">
    <h3>Vous avez choisi l'activité suivante:</h3>
    <div class="activity">
      <h4>{{ data.name }}</h4>
      <h3>maintenant veuillez choisir une session</h3>
      <div class="sessions">
        <div v-for="session in filteredSessions" :key="session.id">
          <div class="session">
            <h4>{{ session.date }}</h4>
            <h4>{{ session.start_at }}</h4>
            <h4>{{ session.end_at }}</h4>
            <h4>{{ session.option }}</h4>
            <button @click="sendSessionToParent(session)">
              Choisir cette session
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.part3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5em;
}

.activity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.sessions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.session {
  border: black solid 1px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
}

button {
  margin-top: 20px;
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
