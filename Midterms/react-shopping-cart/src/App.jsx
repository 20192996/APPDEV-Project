import React from 'react';
import Shop from './Shop';
import Login from './Login';

function App() {
  let items = [
    {id: 1, name: "Grapes", price: 50 },
    {id: 2, name: "Orange", price: 20 },
    {id: 3, name: "Pickle", price: 40 }
  ];
  return(
    <>
    <Login />
    </>
  )
}

export default App
