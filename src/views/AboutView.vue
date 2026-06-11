<script>
  /*import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'*/
</script>

<template>
  <Header />
  <Sidebar />
  <div class="about">
    <h1>This is an about page</h1>
    <br/>
    <p>Mon premier test</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

}

p{
  color: red;
}
</style>
