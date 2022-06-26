import { useState, useEffect } from 'react'
import { Link } from '../../components/link/Link'
import { useFetchData } from '../../hooks/useFetchData'

export const Pokeapi = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [state, setState] = useState<any>({
    loading: false,
    data: null,
  })
  const [data, loading, fetchData] = useFetchData()
  
  useEffect(() => {
    fetchData(url)
    console.log(data)
    setState({
      loading: loading,
      data: data.results,
    })
  }, [url])

  const handleClick = (url: string) => {
    setUrl(url)
  }

  return (
    <>
      <h1>Pokemon</h1>
      {
        data.previous && (
          <button onClick={() => handleClick(data.previous)}>Previous</button>
        )
      }
      <button onClick={() => handleClick(data.next)}>Next</button>
      {state.page}
      {
        state.loading ? <p>Loading...</p>
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
