import { useEffect } from "react";

function Body() {

    useEffect(() => {
        console.log("렌더링 때마다 실행");
    });

    return (
        <div>body</div>
    );
}


export default Body;