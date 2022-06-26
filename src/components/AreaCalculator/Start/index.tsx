import {FC} from 'react'
import {useState, useEffect} from 'react'
import Circle from '../Circle/index'
import Rectangle from '../Rectangle/index'
import Triangle from '../Triangle/index'
import Square from '../Square/index'

interface Props {
  fill: string
  stroke: string
}

const Start: FC<Props> = ({fill, stroke}) => {
  const [shape, setShape] = useState('circle')
  return (
    <>
      <h1>Area Calculator</h1>
      <form>
        Set shape to calculate:
        <select value={shape} onChange={e => setShape(e.target.value)}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
        </select>
        {
          shape === 'circle' ? <Circle fill={fill} stroke={stroke} /> :
          shape === 'square' ? <Square fill={fill} stroke={stroke} /> :
          shape === 'rectangle' ? <Rectangle fill={fill} stroke={stroke} /> :
          <Triangle fill={fill} stroke={stroke} />
        }
      </form>
    </>
  )
}

export default Start