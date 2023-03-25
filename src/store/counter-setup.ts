import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
export const useCounterSetupStore = defineStore('counterSetup', ()=>{

const count = ref<number>(0);
const lastChange = ref<Date>();

const incrementBy = (value: number) => {
    count.value += value
    lastChange.value = new Date();
}

return {
    //State
    count,
    lastChange,

    // Getters
    squareCount: computed(()=>count.value * count.value),

    // Actions
    incrementBy,
    increment: () => incrementBy(1)

}
})