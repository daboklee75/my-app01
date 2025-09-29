import { useEffect, useState } from 'react';

function Body() {

    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

//    setIsLoading(false);
    useEffect(() => {
        console.log("1");

        (async() => {
            console.log("2");
        })();

        },  []
    ); // 최초 1회 실행

    console.log("isLoading", isLoading);
    // 로딩
    // if (isLoading) {
    //     return (
    //         <div>loading</div>
    //     );
    // }

    return (
        <div>
            <p>현재 값: {count}</p>
            <button onClick={() => setCount(count)}>증가</button>
        </div>
    );


    return (
      <div>xxx</div>
    );
}


export default Body;