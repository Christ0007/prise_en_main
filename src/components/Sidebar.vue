<template>
  <aside>
    <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/About">A propos</router-link></li>
    </ul>
  </aside>
</template>

<style>

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
    }

    li a{
        margin: 5px;
        color: aqua;
        cursor: pointer;
    }

    ul li a:hover{
        color: red;
    }
</style>