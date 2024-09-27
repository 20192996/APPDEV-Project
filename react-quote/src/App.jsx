import { useState } from 'react'
import Header from './Header'
import Quote from './Quote'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Quote />
      <Footer />
    </>
  )
}

export default App
