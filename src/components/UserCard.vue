<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Rôle : {{ role }}</p>
    <p>Statut : {{ status }}</p>

    <button @click="sendAction"> Voir profil </button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  status: String
})

const emit = defineEmits(['view'])

function sendAction() {
  emit('view', name)
}
</script>

<style scoped>
.card {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 25px;
}
</style>