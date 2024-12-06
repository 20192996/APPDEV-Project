import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import FavoriteGames from './FavoriteGames'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FavoriteGames/>
      <Footer/>
    </>
  )
}

export default App
