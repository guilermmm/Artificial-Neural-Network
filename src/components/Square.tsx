import styled from '@emotion/styled'
import { Position } from '../utils/types'

interface Props {
  position: Position
  color: 0 | 1
  handleLeftClick: (position: Position) => void
}

function Square({ color, position, handleLeftClick }: Props) {
  return <Cell painted={color} onClick={() => handleLeftClick(position)} />
}

export default Square

const Cell = styled.div<{ painted: 0 | 1 }>`
  width: 50px;
  height: 50px;
  background-color: ${props => (props.painted ? 'black' : 'white')};
  border: 1px solid black;
`
