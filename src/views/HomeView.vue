<script setup></script>

<template>
  <div class="home">
    <h3>Pour s'inscrire a une activité veuillez cliquer sur le bouton</h3>
    <button @click="$emit('seeMore')">Commencer</button>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2em;
}

h3 {
  margin-bottom: 20px;
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
