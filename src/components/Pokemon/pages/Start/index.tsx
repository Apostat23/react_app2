import {FC} from 'react'
import {useState, useEffect} from 'react'
import {useFetchData} from '../../../../hooks/useFetchData'
import DisplayPokemon from '../DisplayPokemon/index'

interface Props {
  fill: string
  stroke: string
}

const Start: FC<Props> = ({fill, stroke}) => {
  const [url , setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [state, setState] = useState<any>({
    loading: false,
    pokemonList: null,
  })
  const [data, loading, fetchData] = useFetchData()
  const handleClick = (url: string) => {
    setUrl(url)
    setState({
      loading: loading,
      pokemonList: data.results,
    })
  }
  useEffect(() => {
    fetchData(url)
    setState({
      loading: loading,
      pokemonList: data.results,
    })
  }, [url])

  return (
    <>
      <h1>Pokemon</h1>
      {
        data.previous 
          ? <button onClick={() => handleClick(data.previous)}>Previous</button>
          : null
      }
      <button onClick={() => handleClick(data.next)}>Next</button>
      {
        loading ? <p>Loading...</p>
        : state.error ? <p>Error: {state.error}</p>
        : state.pokemonList ? (
          <ul>
            {state.pokemonList.map((pokemon: any) => (
              <li key={pokemon.name}>
                <DisplayPokemon url={pokemon.url} name={pokemon.name} />
              </li>
            ))}
          </ul>
        ) : null
      }
    </>
  )
}

export default Start