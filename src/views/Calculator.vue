<script setup>
import { ref } from 'vue'

const expression = ref('')

const ajouter = (valeur) => {
  expression.value += valeur
}

const effacer = () => {
  expression.value = ''
}

const calculer = () => {
  expression.value = eval(expression.value)
}


</script>

<template>
  <div>
    <h1>Calculatrice</h1>

    <input type="text" :value="expression" readonly>
    <br>

    <button @click="ajouter('7')">7</button>

    <button @click="ajouter('8')">8</button>

    <button @click="ajouter('9')">9</button>

    <br>

    <button @click="ajouter('4')">4</button>

    <button @click="ajouter('5')">5</button>

    <button @click="ajouter('6')">6</button>

    <br>

    <button @click="ajouter('1')">1</button>

    <button @click="ajouter('2')">2</button>

    <button @click="ajouter('3')">3</button>

    <br>

    <button @click="ajouter('0')">0</button>
    <br>

    <button @click="ajouter('+')">+</button>

    <button @click="ajouter('-')">-</button>

    <button @click="ajouter('*')">*</button>

    <button @click="ajouter('/')">/</button>
    <br>

    <button @click="effacer"> C </button>

    <button @click="calculer"> = </button>
  </div>
</template>