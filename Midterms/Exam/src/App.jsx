import { useState } from 'react'
import Header from './Header'
import FavoriteFood from './FavoriteFood'
import Counter from './Counter'
import Function from './Function'
import Paragraph from './Paragraph'
import MyCart from './MyCart'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)
  const fruits=[
    {id:1, name: "orange",color: "orange", rating: "5"},
    {id:2, name: "melon",color: "yellow", rating: "4"},
    {id:3, name: "watermelon",color: "green", rating: "3"},
    {id:4, name: "apple",color: "red", rating: "4"},
    {id:5, name: "grape",color: "purple", rating: "5"}
  ]
  const porkDishes=[
    {id:1, name: "pork bbq",color: "brown", rating: "3"},
    {id:2, name: "buttered pork",color: "orange", rating: "5"},
    {id:3, name: "glazed pork",color: "yellow", rating: "5"},
    {id:4, name: "creamy pork",color: "white", rating: "5"},
    {id:5, name: "smoked pork",color: "brown", rating: "3"}
  ]

  return(
    <>
    <Header />
    {fruits.length > 0 ? <FavoriteFood items={fruits} category="fruits" /> : <p>I have no favorite fruits</p>}
    {porkDishes.length > 0 ? <FavoriteFood items={fruits} category="porkDishes" /> : <p>I have no favorite Pork Dishes</p>}
    <Counter />
    <Function />
    <Paragraph />
    <MyCart />
    <Footer />
    </>
  )
}

export default App
