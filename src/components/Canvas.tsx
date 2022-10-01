import styled from '@emotion/styled'
import { useContext } from 'react'
import { canvasContext } from '../context/CanvasContext'
import { Position } from '../utils/types'
import Square from './Square'

const Canvas: React.FC = () => {
  const { canvas, setCanvas } = useContext(canvasContext)

  const handleLeftClick = ([x, y]: Position) => {
    canvas[y][x] = Number(!Boolean(canvas[y][x])) as 0 | 1
    setCanvas([...canvas])
  }

  return (
    <Container>
      {canvas.map((line, y) => (
        <Row key={y}>
          {line.map((square, x) => (
            <Square
              key={x}
              color={square}
              position={[x, y]}
              handleLeftClick={handleLeftClick}
            />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Canvas

const Container = styled.div`
  padding: 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
