import { useCounter } from "@/composables/useCounter";

describe('useCounter', () => {

    test('initializes counter with provide default values', () => {
        const { counter, squareCounter } = useCounter();
        expect(counter.value).toBe(4);
        expect(squareCounter.value).toBe(16);
    });

    test('initializes counter with provide initial value', () => {

        const initialValue = 10;

        const { counter, squareCounter } = useCounter(initialValue);
        expect(counter.value).toBe(initialValue);
        expect(squareCounter.value).toBe(initialValue * initialValue);
    });


    test('increments counter correctly', () => {
        const { counter, squareCounter } = useCounter();

        counter.value++;
        expect(counter.value).toBe(5);
        expect(squareCounter.value).toBe(25);

    });




});