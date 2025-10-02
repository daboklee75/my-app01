import { useState, useRef} from "react";

export default function useCounterEx(min = 0, max = 5, initial = 0) {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(prev => (prev < max ? prev + 1 : prev));
    };

    const decrease = () => {
        setCount(prev => (prev > min ? prev - 1 : prev));
    };

    const reset = () => setCount(initial);

    return { count, increase, decrease, reset, min, max};
}
