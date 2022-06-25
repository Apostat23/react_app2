import { useState, useEffect } from 'react'
import { DisplayArea } from './DisplayArea'

export const Square = () => {
  const [side, setSide] = useState(0)
  const [area, setArea] = useState(0)
  
  useEffect(() => {
    setArea(side * side)
  }
  , [side])

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
    </>
  )
}
