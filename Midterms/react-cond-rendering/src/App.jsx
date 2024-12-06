import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'


function App() {
  //array of fruits => fruit.objects
  const fruits=[
    {id:1, name: "apple",color: "red"},
    {id:2, name: "banana",color: "yellow"},
    {id:3, name: "orange",color: "orange"},
    {id:4, name: "grape",color: "purple"},
    {id:5, name: "kiwi",color: "green"}
  ]
  const desserts =[
    {id:1, name: "cake", color: "red"},
    {id:1, name: "ice cream", color: "blue"},
    {id:1, name: "pie", color: "orange"}
  ]
  return (
    <>
    <Header/>
    {/*
    {fruits.length > 0 ? <ListOfFruits items={fruits} category="My Favourite Fruits" /> : <p>No Fruits</p>}
    {fruits.length > 0 ? --- : ----} true or false*/}
    {fruits.length > 0 ? <ListOfFruits items={fruits} category="My Favourite Fruits" /> : <p>No Fruits</p>}
    {desserts.length > 0 ? <ListOfFruits items={desserts} category="My Favourite Desserts" /> : <p>I dont like desserts</p>}
    <Footer/>
    </>
  )
}

export default App