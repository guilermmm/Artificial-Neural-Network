import { useState } from 'react'
import CanvasContextProvider from './context/CanvasContext'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <CanvasContextProvider>
        <Home></Home>
      </CanvasContextProvider>
    </div>
  )
}

export default App
