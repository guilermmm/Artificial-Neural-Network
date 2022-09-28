import { Cell } from './Square.styles'

interface Props {
  position: [number, number]
  color: boolean
  handleLeftClick: (position: [number, number]) => void
}

function Square({ color, position, handleLeftClick }: Props) {
  return (
    <Cell
      className="Square"
      style={{ backgroundColor: color ? '#0c142b' : 'white' }}
      onClick={() => handleLeftClick(position)}
    />
  )
}

export default Square
