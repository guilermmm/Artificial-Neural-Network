import styled from '@emotion/styled'
import { useState } from 'react'
import { ann } from '../utils/functions'
import Square from './Square'

const Canvas: React.FC = () => {
  const [canvas, setCanvas] = useState<boolean[][]>(
    new Array(4).fill(null).map(() => new Array(5).fill(false)),
  )

  const handleLeftClick = (position: [number, number]) => {
    const [row, col] = position
    canvas[row][col] = !canvas[row][col]
    setCanvas([...canvas])
    console.log('canvas', canvas)
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
      <button onClick={() => ann()}>asdasd</button>
    </Container>
  )
}

export default Canvas

const Container = styled.div`
  display: flex;
`

const Row = styled.div``
