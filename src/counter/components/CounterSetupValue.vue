<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup";
const counter = useCounterSetupStore();
</script>

<template>
  <div>
    <h3 v-if="counter.count">El valor es:</h3>
    <h4 v-if="counter.count">{{ counter.count }}</h4>
    <h3 v-if="counter.lastChange">Ultimo cambio:</h3>
    <h4 v-if="counter.lastChange">{{ counter.lastChange }}</h4>
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
