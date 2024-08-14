<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-test-id="square-label">Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn" @click="counter++">+1</button>
            <button data-test-id="decrement-btn" class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    value: number
}
const props = defineProps<Props>();

import { useCounter } from '../composables/useCounter';
const { counter, squareCounter } = useCounter(props.value);


// import { computed, ref } from 'vue';

// const props = defineProps({
//     value: {type: Number, required: true}
// });



// const props = defineProps<Props>();


// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value );


</script>

<style scoped>
.btn {
    @apply p-5 bg-blue-500 rounded hover:bg-blue-600 mr-2
}
</style>