<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-option";
import { storeToRefs } from "pinia";
import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const counterOptions = useCounterOptionsStore();

const { count, squareCount } = storeToRefs(counterOptions);
const { increment, incrementBy } = counterOptions;
</script>

<template>
  <div class="wrapper">
    <h1>Counter Options</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>

    <br />

    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset()">Reset</button>

    <CounterOptionsValue />
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.5s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2) !important;
  transition: all 0.5s !important;
}
</style>
