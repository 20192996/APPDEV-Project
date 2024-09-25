import React, {useState} from 'react';
export default function Counter(){
    //useState Hook for updating variable or stateful variables
    const [count, setCount] = useState(0)
    //to increment count
    const incrementCount = () => {
        setCount(c => c + 1)
    }
    //to decrement count
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    //to reset count
    const resetCount = () => {
        setCount(c => c = 0)
    }
    return (
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
        </div>
    )
}