import { createContext, useState } from 'react'

export const CanvasContext = createContext(
  {} as { canvas: boolean[][]; setCanvas: (canvas: boolean[][]) => void },
)

interface Props {
  children: React.ReactNode
}

const CanvasContextProvider: React.FC<Props> = ({ children }) => {
  const [canvas, setCanvas] = useState(
    new Array(4).fill(null).map(() => new Array(5).fill(false)),
  )

  return (
    <CanvasContext.Provider
      value={{
        canvas,
        setCanvas,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export default CanvasContextProvider
