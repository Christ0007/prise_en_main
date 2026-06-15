<template>
  <Header />
  <Sidebar />

<router-view />
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import UserCard from './components/UserCard.vue';

export default {
  components: {
    Header,
    Sidebar,
    UserCard
  }
}
</script>