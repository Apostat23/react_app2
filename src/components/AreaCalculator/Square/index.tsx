import {FC, useState, useEffect } from 'react'
import DisplayArea from '../components/display_area/index'

interface Props {
  fill: string
  stroke: string
}

const Square: FC<Props> = ({fill, stroke}) => {
  const [side, setSide] = useState(100)
  const [area, setArea] = useState(0)

  useEffect (() => {
    const calculateArea = () => {
      setArea(Math.round(side ** 2))
    }
    calculateArea()
  }, [side])

  return (
    <>
      <h1>Square</h1>
      <div>
        <label>Side:</label>
        <input
          type="number"
          value={side}
          onChange={e => setSide(Number(e.target.value))}
        />
      </div>
      <DisplayArea area={area} />
      <svg width={side} height={side} >
        <rect x={0} y={0} width={side} height={side} fill={fill} stroke={stroke} />
      </svg>
    </>
  )
}

export default Square