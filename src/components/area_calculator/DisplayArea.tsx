import React from 'react'

interface area {
  area: number
}

export const DisplayArea = (props:area) => {
  const { area } = props
  return (
    <>
      <div>
        <label>Area:</label>
        <span>{area} squared units</span>
      </div>
    </>
  )
}
