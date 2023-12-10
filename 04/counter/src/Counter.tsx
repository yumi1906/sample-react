import React from "react";

export const Counter:React.FC = () => {
    const [count, setCount] = React.useState(0);

    const inc = () => {
        // ToDo setTimeout()を加えてみる
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            <div>
                <span>{count}</span>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    );
};