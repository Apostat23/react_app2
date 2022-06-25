import { useState } from 'react'
import { First } from '../first/First'
import { AreaCalculator } from '../../components/area_calculator/AreaCalculator'
import { Pokeapi } from '../../pages/pokeapi/Pokeapi'

export const Start = () => {
  const [page, setPage] = useState('first')

  return (
    <>
      <h1>Start</h1>
      <div>
        <select value={page} onChange={e => setPage(e.target.value)}>
          <option value="first">First</option>
          <option value="area-calculator">Area Calculator</option>
          <option value="pokeapi">Pokeapi</option>
        </select>
        {
          // Displays the page selected in the select box
          page === 'first' ? <First /> :
          page === 'area-calculator' ? <AreaCalculator /> : <Pokeapi />
        }
      </div>
    </>
  )
}
