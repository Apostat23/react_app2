import { useEffect, useState } from 'react'
import { DisplayArea } from './DisplayArea'

export const Circle = () => {
  const [radius, setRadius] = useState(0)
  const [area, setArea] = useState(0)

  useEffect(() => {
    const calculateArea = () => {
      setArea(Math.PI * radius ** 2)
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
    </>
  )
}
