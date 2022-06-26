import {FC, useState, useEffect } from 'react'
import DisplayArea from '../components/display_area/index'

interface Props {
  fill: string
  stroke: string
}

const Triangle: FC<Props> = ({fill, stroke}) => {
  const [base, setBase] = useState(150)
  const [height, setHeight] = useState(100)
  const [area, setArea] = useState(0)

  useEffect (() => {
    const calculateArea = () => {
      setArea((base * height)/2)
    }
    calculateArea()
  }, [base, height])

  return (
    <>
      <h1>Triangle</h1>
      <div>
        <label>Base:</label>
        <input type="number" value={base} onChange={e => setBase(Number(e.target.value))} />
        <label style={{marginLeft: '10px'}}>Height:</label>
        <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} />
      </div>
      <DisplayArea area={area} />
      <svg width={base} height={height} >
        <polygon points={`0,0 ${base},0 ${base/2},${height}`} fill={fill} stroke={stroke} />
      </svg>
    </>
  )
}

export default Triangle