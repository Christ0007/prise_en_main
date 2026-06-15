<script setup>
/*import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'*/
import UserCard from '../components/UserCard.vue'

function handleView(name) {
  alert("Voir profil de : " + name)
}

</script>

<template>
  <main>
    <Header />
    <Sidebar />
    <h1> Vue JS</h1>
    <p> Ici je fais une prise en main de vue JS</p>
 </main>
  <div>
    <UserCard name="Christ" role="Admin" status="Actif" @view="handleView"/>
    <UserCard name="Alex" role="User" status="Inactif" @view="handleView"/>
    <UserCard name="Marie" role="Editor" status="Actif" @view="handleView"/>
  </div>
</template>
