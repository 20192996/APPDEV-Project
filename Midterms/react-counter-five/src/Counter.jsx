import React, {useState} from 'react';
export default function Counter(){
    //useState Hook for updating variable or stateful variables
    const [count, setCount] = useState(0)
    //to increment count
    const incrementCount = () => {
        setCount(c => c + 1)
    }
    //to increment count +5
    const incrementCount5 = () => {
        setCount(c => c + 5)
    }
    //to decrement count
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    //to decrement count -5
    const decrementCount5 = () => {
        setCount(c => c - 5)
    }
    //to reset count
    const resetCount = () => {
        setCount(c => c = 0)
    }
    //to reset count
    const randomCount = () => {
        setCount(Math.floor((Math.random()*(999 - (- 999) + 1)) + (-999)))
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
            
            <br />
            <button className="button-container-decrement" onClick={decrementCount5}>- 5</button>
            <button className="button-container-increment" onClick={randomCount}>Random</button>
            <button className="button-container-increment" onClick={incrementCount5}>+ 5</button>
        </div>
    )
}