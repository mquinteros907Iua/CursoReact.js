import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    // Use functional updates to avoid stale state issues
    const increment = (val = 1) => setCounter((counter) => counter + val);
    const reset = () => setCounter(initialValue);
    const decrement = (val = 1, allowNegative = true) => { // = true permite negativos
        setCounter((counter) => {
            if (!allowNegative && counter - val < 0) return counter;
            return counter - val;
        });
    };

    // Return an object so it matches the destructuring in components
    return {
        counter,
        increment,
        reset,
        decrement,
    };
}
