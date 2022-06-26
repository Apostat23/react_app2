import {FC} from 'react'
import {useState, useEffect} from 'react'
import { useFetchData } from '../../../../hooks/useFetchData'
import { Link } from '../../../../components/link/Link'

interface Props {
  fill: string
  stroke: string
}

const Start: FC<Props> = ({fill, stroke}) => {
  const [url , setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [state, setState] = useState<any>({
    loading: false,
    data: null,
  })

  const [data, loading, fetchData] = useFetchData()

  useEffect(() => {
    fetchData(url)
    setState({
      loading: loading,
      data: data.results,
    })
  }
  , [url])

  const handleClick = (url: string) => {
    setUrl(url)
  }

  return (
    <>
      <h1>Pokemon</h1>
      <div>
        <svg width="100" height="100">
          <circle cx={50} cy={50} r={40} fill={fill} stroke={stroke} />
        </svg>
      </div>
      {
        data.previous 
          ? <button onClick={() => handleClick(data.previous)}>Previous</button>
          : null
      }
      <button onClick={() => handleClick(data.next)}>Next</button>
      {
        loading ? <p>Loading...</p>
        : state.error ? <p>Error: {state.error}</p>
        : state.data ? (
          <ul>
            {state.data.map((item: any) => (
              <li key={item.name}>
                <Link url={item.url} text={item.name} />
              </li>
            ))}
          </ul>
        ) : null
      }
    </>
  )
}

export default Start