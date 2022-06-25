import { useState } from 'react'
import { Circle } from './Circle'
import { Triangle } from './Triangle'
import { Rectangle } from './Rectangle'
import { Square } from './Square'

export const AreaCalculator = () => {
  const [shape, setShape] = useState('circle')

  return (
    <>
      <h1>AreaCalculator</h1>

      <form>
        Set shape to calculate:
        <select value={shape} onChange={e => setShape(e.target.value)}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
        </select>
        {
          shape === 'circle' ? <Circle /> :
          shape === 'square' ? <Square /> :
          shape === 'rectangle' ? <Rectangle /> :
          shape === 'triangle' ? <Triangle /> : null 
        }
      </form>
    </>
  )
}
