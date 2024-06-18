<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { jsPDF } from "jspdf";

const emit = defineEmits(["goHome"]);

const props = defineProps({
  informations: Array,
  activity: String,
  session_selected: Object,
  Category: String,
});

const informations = ref(props.informations["0"]);
const activity = ref(props.activity);
const session = ref(props.session_selected);
const selectedCategory = ref(props.Category);

console.log("informations", informations);
console.log("activity", activity);
console.log("session", session);
console.log("selectedCategory", selectedCategory);

const downloadPdf = () => {
  const doc = new jsPDF();

  const sessionDate = session.value.date;
  const sessionStart = session.value.start_at;
  const sessionEnd = session.value.end_at;
  const acti = activity.value;
  const category = selectedCategory.value;

  doc.text("Récapitulatif de toutes vos informations", 10, 10);
  doc.text(`Activité: ${acti}`, 10, 20);

  doc.text(
    `Session: ${sessionDate} de ${sessionStart} à ${sessionEnd}`,
    10,
    30
  );
  doc.text(`Catégorie sélectionnée: ${category}`, 10, 40);

  doc.save("informations.pdf");
};
</script>

<template>
  <div class="part4">
    <h3>Récapitulatif de toutes vos informations</h3>
    <div class="informations">
      <div class="information">
        <h4>Prénom: {{ informations.prenom }}</h4>
        <h4>Nom: {{ informations.nom }}</h4>
        <h4>Email: {{ informations.email }}</h4>
        <h4>Téléphone: {{ informations.telephone }}</h4>
        <h4>Code postal: {{ informations.codePostal }}</h4>
        <h4>Activité: {{ activity }}</h4>
        <h4>Catégorie: {{ selectedCategory }}</h4>
        <h4>
          Session: le {{ session.date }} de {{ session.start_at }}h à
          {{ session.end_at }}h
        </h4>
      </div>
    </div>
    <button @click="emit('goHome')">Retourner à la page d'accueil</button>
    <button @click="downloadPdf">télécharger le PDF</button>
  </div>
</template>

<style scoped></style>
