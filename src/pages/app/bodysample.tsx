import {useState, useEffect, useCallback} from "react";
import useCounterEx from "../../hooks/useCounterEx";

function BodySample() {

    const { count, increase, decrease, count2 } = useCounterEx(0, 5, 0);
    const [renderTime, setRenderTime] = useState("");
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    // count 또는 todos가 바뀔 때마다 현재 시각 갱신
    useEffect(() => {
        setRenderTime(new Date().toLocaleTimeString());
    }, [count]);

    useEffect(() => {
        setRenderTime(new Date().toLocaleTimeString());
        console.log("count2");
    }, [count2]);

    const addTodo = () => {
        if (!text.trim()) return;
        setTodos([...todos, { id: Date.now(), text, done: false }]);
        setText("");
    };

        return (
        <div style={{ padding: 20 }}>
            <h2>Counter</h2>
            <p>현재 값: {count}</p>
            <p>현재 값2: {count2}</p>
            <button onClick={increase}>증가</button>
            <button onClick={decrease} style={{ marginLeft: 8 }}>감소</button>

            <h2 style={{ marginTop: 20 }}>Todo</h2>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                // onKeyDown={e => e.key === "Enter" && addTodo()}
                placeholder="할 일 입력"
            />
            <button onClick={addTodo}>추가</button>

            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={t.done}
                                onChange={() => toggleTodo(t.id)}
                            />
                            <span style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.text}
              </span>
                        </label>
                    </li>
                ))}
            </ul>

            <p style={{ marginTop: 20, fontSize: "0.9rem", color: "gray" }}>
                마지막 렌더링 시각: {renderTime}
            </p>
        </div>
    );

}

export default BodySample;