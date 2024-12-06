import React, { useState } from 'react';

const MyCart = () => {
    const [item, setItem] = useState('')
    const [myCart, setMyCart] = useState([]) 
    const handleInputChange = (e) => {
        setItem(e.target.value) 
    }
    const addItemToCart = () => {
        if (item.trim() !== '') { 
            setMyCart([...myCart, item])
            setItem('')
        }
    }
    return (
        <div>
            <h1>My Cart</h1>
            <input 
                type="text" 
                value={item} 
                onChange={handleInputChange} 
                placeholder="Enter item name" 
            />
            <button onClick={addItemToCart}>Add to Cart</button>

            <h2>Items in Cart:</h2>
            <ul>
                {myCart.map((cartItem, index) => (
                    <li key={index}>{cartItem}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyCart;