import { useContext } from 'react'
import { CanvasContext } from '../context/CanvasContext'
import { Row, Container } from './Canvas.styles'
import Square from './Square'

const Canvas: React.FC = () => {
  const { canvas, setCanvas } = useContext(CanvasContext)

  const handleLeftClick = (position: [number, number]) => {
    const [row, col] = position
    canvas[row][col] = !canvas[row][col]
    setCanvas([...canvas])
  }

  return (
    <Container>
      {canvas.map((line: boolean[], x: number) => (
        <Row key={`${x}`}>
          {line.map((square: boolean, y: number) => (
            <Square
              key={`${y}`}
              color={square}
              position={[x, y]}
              handleLeftClick={position => {
                handleLeftClick(position)
              }}
            />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Canvas
