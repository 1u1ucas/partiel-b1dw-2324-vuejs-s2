<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";

const props = defineProps({
  informations: Array,
});

const informations = ref(props.informations["0"]);

if (informations.value === undefined) {
  const prenom = ref("");
  const nom = ref("");
  const email = ref("");
  const telephone = ref("");
  const codePostal = ref("");
} else {
  const prenom = ref(informations.value.prenom);
  const nom = ref(informations.value.nom);
  const email = ref(informations.value.email);
  const telephone = ref(informations.value.telephone);
  const codePostal = ref(informations.value.codePostal);
}

console.log("informations", informations);

const emits = defineEmits(["sendInformation"]);

const prenom = ref("");
const nom = ref("");
const email = ref("");
const telephone = ref("");
const codePostal = ref("");

const prenomError = ref(false);
const nomError = ref(false);
const emailError = ref(false);
const telephoneError = ref(false);
const codePostalError = ref(false);

function valideprenom() {
  prenomError.value = prenom.value.trim().length === 0;
  const regex = /^[A-Za-z]+$/;
  prenomError.value = !regex.test(prenom.value.trim());
}

function validenom() {
  nomError.value = nom.value.trim().length === 0;
  const regex = /^[A-Za-z]+$/;
  nomError.value = !regex.test(nom.value.trim());
}

function valideEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !regex.test(email.value);
}

function validetelephone() {
  const regex = /^\+?\d{10}$/;
  telephoneError.value = !regex.test(telephone.value);
}

function validecodePostal() {
  const regex = /^\d{5}$/;
  codePostalError.value = !regex.test(codePostal.value);
}

function valideForm() {
  valideprenom();
  validenom();
  valideEmail();
  validetelephone();
  validecodePostal();
}

const isFormValid = computed(() => {
  return (
    !prenomError.value &&
    !nomError.value &&
    !emailError.value &&
    !telephoneError.value &&
    !codePostalError.value
  );
});

function handleSubmit() {
  console.log("Form submitted");
  valideForm();
  if (isFormValid.value) {
    const information = {
      prenom: prenom.value,
      nom: nom.value,
      email: email.value,
      telephone: telephone.value,
      codePostal: codePostal.value,
    };
    emits("sendInformation", information);
    console.log("Information envoyée", information);
  }
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          v-model="prenom"
          @blur="valideprenom"
          required
        />
        <span v-if="prenomError" class="error"
          >Veuillez entrer un prénom valide</span
        >
      </div>

      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" id="nom" v-model="nom" @blur="validenom" required />
        <span v-if="nomError" class="error">Veuillez entrer un nom valide</span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          @blur="valideEmail"
          required
        />
        <span v-if="emailError" class="error"
          >Veuillez entrer un email valide</span
        >
      </div>

      <div class="form-group">
        <label for="telephone">Numéro de téléphone</label>
        <input
          type="tel"
          id="telephone"
          v-model="telephone"
          @blur="validetelephone"
          required
        />
        <span v-if="telephoneError" class="error"
          >Veuillez entrer un numéro de téléphone valide</span
        >
      </div>

      <div class="form-group">
        <label for="codePostal">Code Postal</label>
        <input
          type="text"
          id="codePostal"
          v-model="codePostal"
          @blur="validecodePostal"
          required
        />
        <span v-if="codePostalError" class="error"
          >Veuillez entrer un numéro de code postal valide</span
        >
      </div>

      <button type="submit" :disabled="!isFormValid">Passer à la suite</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2em;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.error {
  color: red;
  font-size: 16px;
  margin-top: 5px;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #45a049;
}
</style>
