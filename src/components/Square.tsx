// square of canvas that can be clicked to toggle between black and white
import styled from '@emotion/styled'

interface Props {
  position: [number, number]
  color: boolean
  handleLeftClick: (position: [number, number]) => void
}

function Square({ color, position, handleLeftClick }: Props) {
  return (
    <Cell
      className="Square"
      style={{ backgroundColor: color ? 'black' : 'white' }}
      onClick={() => handleLeftClick(position)}
    />
  )
}

export default Square

const Cell = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
`
