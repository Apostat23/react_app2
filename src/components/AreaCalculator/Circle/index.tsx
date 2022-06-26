import {FC, useState, useEffect } from 'react'
import DisplayArea from '../components/display_area/index'

interface Props {
  fill: string
  stroke: string
}

const Circle: FC<Props> = ({fill, stroke}) => {
  const [radius, setRadius] = useState(50)
  const [area, setArea] = useState(0)

  useEffect (() => {
    const calculateArea = () => {
      setArea(Math.round(Math.PI * radius ** 2))
    }
    calculateArea()
  }, [radius])

  return (
    <>
      <h1>Circle</h1>
      <div>
        <label>Radius:</label>
        <input
          type="number"
          value={radius}
          onChange={e => setRadius(Number(e.target.value))}
        />
      </div>
      <DisplayArea area={area} />
      <svg width={radius*2} height={radius*2} >
        <circle cx={radius} cy={radius} r={radius} fill={fill} stroke={stroke} />
      </svg>
    </>
  )
}

export default Circle