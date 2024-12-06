import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 2)
    };
    const decrement = () => {
        setCount(count - 2)
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment by 2</button>
            <button onClick={decrement}>Decrement by 2</button>
        </div>
    );
};

export default Counter;