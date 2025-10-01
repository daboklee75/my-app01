import { useState } from 'react';
//
// function useCounter(initial = 0) {
//
//     const [count, setCount] = useState(initial);
//     const increase = () => setCount(c => c + 1);
//     return { count, increase };   // JSX ❌ , 데이터/함수만 반환
// }

function useCounter(initial = 0, max = 10) {

    const [count, setCount] = useState(initial);
    const increase = () => setCount(c => c + 1);
    const decrease = () => setCount(c => c - 1);

    return { count, max, increase, decrease };   // JSX ❌ , 데이터/함수만 반환
}

export default useCounter;




