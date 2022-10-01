import Home from './components/Home'
import CanvasContextProvider from './context/CanvasContext'

function App() {
  return (
    <CanvasContextProvider>
      <Home />
    </CanvasContextProvider>
  )
}

export default App
