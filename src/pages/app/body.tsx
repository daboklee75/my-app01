import { useEffect, useState } from 'react';


function Body() {

    const [isLoading, setIsLoading] = useState(true);
    const [cancel, setCancel] = useState(false);

//    setIsLoading(false);
    useEffect(() => {
        console.log("1");

        if (cancel) return;
        const timer = setInterval(() => {
            console.log("테스트: 2초 후 강제 에러 발생!");
            setIsLoading(false);
            setCancel(true);
        }, 2000);

        (async() => {
            console.log("2");
        })();

        return () => {
            // clean Up
            console.log("clean up");
            clearInterval(timer); // 타이머 정리
        };
        },  [cancel]); // 최초 1회 실행

    console.log("isLoading", isLoading);

    // 로딩
    if (isLoading) {
         return (
             <div><Loading /></div>
         );
    }

    return (
        <div>
            <button onClick={() => setCancel(true)}>취소</button>
        </div>
    );
}

function Loading() {
    return <div>Loading...</div>;
}


export default Body;