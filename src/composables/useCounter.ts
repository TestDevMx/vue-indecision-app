import { computed, ref } from "vue";

export const useCounter = (initialValue: number = 4) => {
    const counter = ref(initialValue);
    return {
        counter,
        squareCounter: computed(() => counter.value * counter.value)
    };
}