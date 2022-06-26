import {FC, useEffect} from 'react'

interface Props {
  area: number
}

const DisplayArea: FC<Props> = ({area}) => {
  return (
    <>
      <label>Area: </label>
      <span>{area} squared units</span>
    </>
  )}

  export default DisplayArea