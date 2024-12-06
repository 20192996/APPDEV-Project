import { useState } from 'react'
import Header from './Header'
import ColorPicker from './ColorPicker'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ColorPicker />
      <Footer />
    </>
  )
}

export default App
