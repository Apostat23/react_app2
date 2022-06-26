import {FC, useState, useEffect } from 'react'
import DisplayArea from '../components/display_area/index'

interface Props {
  fill: string
  stroke: string
}

const Rectangle: FC<Props> = ({fill, stroke}) => {
  const [width, setWidth] = useState(150)
  const [height, setHeight] = useState(100)
  const [area, setArea] = useState(0)

  useEffect (() => {
    const calculateArea = () => {
      setArea(width * height)
    }
    calculateArea()
  }, [width, height])

  return (
    <>
      <h1>Rectangle</h1>
      <div>
        <label>Width:</label>
        <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} />
        <label style={{marginLeft: '10px'}}>Height:</label>
        <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} />
      </div>
      <DisplayArea area={area} />
      <svg width={width} height={height} >
        <rect x={0} y={0} width={width} height={height} fill={fill} stroke={stroke} />
      </svg>
    </>
  )
}

export default Rectangle