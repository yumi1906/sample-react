import React from "react";

export const Counter:React.FC = () => {
    const [count, setCount] = React.useState(0);

    const inc = () => {
        setTimeout(() => {setCount(v => v + 1)}, 2000);
    };

    const dec = (count: number) => {
        const tmpCount = count - 1;

        if (tmpCount < 0) {
            // 最小値は0としたい
            // マイナスは表示させたくない
            setCount(0);
        } else {
            setCount(v => v - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <div>
                <span>{count}</span>
                <button onClick={inc}>+</button>
                <button onClick={() => dec(count)}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    );
};