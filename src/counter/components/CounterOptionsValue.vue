<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-option";
const counter = useCounterOptionsStore();
</script>

<template>
  <div>
    <h3 v-if="counter.count">El valor es:</h3>
    <h4 v-if="counter.count">{{ counter.count }}</h4>
    <h3 v-if="counter.lastChanged">Ultimo cambio:</h3>
    <h4 v-if="counter.lastChanged">{{ counter.lastChanged }}</h4>
  </div>
</template>

<style scoped>
h3,
h4 {
  text-align: center;
}

div {
  margin-top: 2em;
}
</style>
