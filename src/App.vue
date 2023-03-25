<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconPinia from "@/shared/components/icons/IconPinia.vue";
</script>

<template>
  <div class="wrapper home">
    <IconPinia />
    <h3>Pinia - Ejercicios</h3>
    <nav>
      <RouterLink to="/">Counter Options</RouterLink>
      <RouterLink to="/counter-2">Counter Setup</RouterLink>
      <RouterLink to="/clients">Clientes</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>

.wrapper.home {
  padding: 1em;
  border-right: 1px solid var(--color-border);
  margin-right: 2em;
}


.wrapper.home h3 {
  text-align: center;
  margin-top: 1em;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
