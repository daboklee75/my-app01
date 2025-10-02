import { useEffect, useState } from 'react';
import useCounter from "../../hooks/useCounter";

function Bodyhook() {

    const { count, max, increase, decrease } = useCounter(0, 5);
    const [renderTime, setRenderTime] = useState(new Date().toLocaleTimeString());


    // useEffect(() => {
    //     console.log("mount count:", count);   // 마운트 시 1회
    //     increase();                           // 상태 올림(비동기)
    // }, []);

    // count가 바뀔 때마다 실행 → 업데이트된 값 확인 가능
    useEffect(() => {
        console.log("after update count:", count);
    }, [count]);

    // 리렌더링이 일어날 때마다 현재 시간 갱신
    useEffect(() => {
        console.log("after update all:", count);
        setRenderTime(new Date().toLocaleTimeString());
    });

    return (
        <div>
            <p>현재 값: {count}</p>
            <p>최대 값: {max}</p>
            <p>렌더링 시각: {renderTime}</p>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    );
}

export default Bodyhook;
