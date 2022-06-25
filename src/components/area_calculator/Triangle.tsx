import { useState, useEffect } from 'react'
import { DisplayArea } from './DisplayArea'

export const Triangle = () => {
  const [base, setBase] = useState(0)
  const [height, setHeight] = useState(0)
  const [area, setArea] = useState(0)
  
  useEffect(() => {
    const calculateArea = () => {
      setArea(base * height / 2)
    }
    calculateArea()
  }, [base, height])
  
  return (
    <>
      <h1>Triangle</h1>
      <div>
        <label>Base:</label>
        <input
          type="number"
          value={base}
          onChange={e => setBase(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Height:</label>
        <input
          type="number"
          value={height}
          onChange={e => setHeight(Number(e.target.value))}
        />
      </div>
      <DisplayArea area={area} />
    </>
  )
}
