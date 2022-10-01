import { createContext, useState } from 'react'

interface Context {
  canvas: (0 | 1)[][]
  setCanvas: (canvas: (0 | 1)[][]) => void
}

export const canvasContext = createContext({} as Context)

interface Props {
  children: React.ReactNode
}

const CanvasContextProvider: React.FC<Props> = ({ children }) => {
  const [canvas, setCanvas] = useState<(0 | 1)[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  return (
    <canvasContext.Provider value={{ canvas, setCanvas }}>
      {children}
    </canvasContext.Provider>
  )
}

export default CanvasContextProvider
