<script setup>
import { ref, reactive } from 'vue';

  /*import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'*/

  const compteur = ref(3)

  const increment = ()=>{
    compteur.value++
  }

  const decrement = ()=>{
    compteur.value--
  }
  import { computed } from 'vue'

  // 1. La boîte de base
  const prixHT = ref(190)

  // 2. La calculatrice automatique
  const prixTTC = computed(() => {
    return prixHT.value * 1.20
  })

  const texteSaisi = ref('')

  function effacerTexte(){
    texteSaisi.value = ref('')
  }

  const courses = ref(['Pain', 'Lait', 'Pommes', 'Œufs'])

  const nouvelleTache = ref('')
  const taches = ref([])

  function ajouterTache() {
    // On vérifie que l'utilisateur n'ajoute pas une tâche vide
    if (nouvelleTache.value.trim() !== '') {
      taches.value.push(nouvelleTache.value)
      nouvelleTache.value = '' // On vide l'input
    }
  }

  function supprimerTache(index) {
    taches.value.splice(index, 1)
  }

  const produit = reactive ({
    nom : 'Ordinateur',
    prix :'3500000',
    stock :'12'
  })

  const name = ref('')
  const savedName = ref('')

  function handleSubmit() {
    savedName.value = name.value
  }

  const email = ref('')
  const error = ref('')

  function submit() {
    if (!email.value.includes('@')) {
      error.value = "Email invalide"
    } else {
      error.value = ""
      console.log("OK :", email.value)
    }
  }
</script>

<template>
  <Header />
  <Sidebar />
  <p>Compteur :{{ compteur }}</p>
  <button @click="increment">Incrémenter</button>
  <button v-if="compteur > 0" v-on:click="decrement"> Décrémenter </button>
  <p>le prix ttc est {{ prixTTC }}</p>


  <!-- 2. On lie la case HTML à notre boîte avec v-model -->
  <input @input="texteSaisi" placeholder="Tapez quelque chose..." />

  <!-- 3. On affiche en temps réel le contenu de la boîte -->
  <p>Vous êtes en train d'écrire : {{ texteSaisi }}</p>

  <button @click="effacerTexte"> Effacer </button>


  <h3>Ma liste de courses :</h3>
  <ul>
    <li v-for="(article, index) in courses" :key="article">
     {{ index +1 }} {{ article }}
    </li>
  </ul>

  <div>
    <h2>📝 Ma Liste de Tâches</h2>
    
    <input v-model="nouvelleTache" placeholder="Ajouter une tâche..." />
    <button @click="ajouterTache">Ajouter</button>

    <ul>
      <li v-for="(tache, index) in taches" :key="index">
        {{ index + 1 }}. {{ tache }}
        <button @click="supprimerTache(index)">❌</button>
      </li>
    </ul>
  </div>
  <p>
    {{ produit.nom }}
    {{ produit.prix }}
    {{ produit.stock }}
  </p>

  <form @submit.prevent="handleSubmit">
    <input @input="name" placeholder="Nom" />

    <button type="submit">
      Envoyer
    </button>
  </form>
  
  <p>Nom envoyé : {{ savedName }}</p>
  <input v-model="email" placeholder="Email" />

  <p v-if="error" style="color:red">
    {{ error }}
  </p>

   <button @click="submit">
    Envoyer
  </button>

  <p v-if="error">{{ error }}</p>
  <p v-if="email.length > 0 && !email.includes('@')">
    Format incorrect
  </p>
  <router-view />
  </template>

<style>

</style>
