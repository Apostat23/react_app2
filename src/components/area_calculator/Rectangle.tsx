import { useState, useEffect } from 'react'
import { DisplayArea } from './DisplayArea'

export const Rectangle = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [area, setArea] = useState(0)

  useEffect(() => {
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
      <input
        type="number"
        value={width}
        onChange={e => setWidth(Number(e.target.value))}
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
