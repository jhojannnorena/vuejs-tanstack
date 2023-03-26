<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup";
import { storeToRefs } from "pinia";
import CounterSetupValue from "../components/CounterSetupValue.vue";

const counterOptions = useCounterSetupStore();

const { count, squareCount } = storeToRefs(counterOptions);
const { increment, incrementBy } = counterOptions;
</script>

<template>
  <div class="wrapper">
    <h1>Counter Setup</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>

    <br />

    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>

    <CounterSetupValue />
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>
