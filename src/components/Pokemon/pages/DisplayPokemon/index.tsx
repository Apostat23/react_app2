import {FC, useState, useEffect} from 'react';
import {Link} from '../../../link/Link';
import {useFetchData} from '../../../../hooks/useFetchData';

export interface Props {
  url: string
  name: string
}

const Start: FC<Props> = ({url, name}) => {
  const [pokemon, setPokemon] = useState<any>();
  const [data, loading, fetchData] = useFetchData();
  useEffect(() => {
    fetchData(url);
    setPokemon(data);
  }, [data]);

  // If the pokemon is not yet fetched, return a loading indicator.
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  // If the pokemon is fetched, return its info in a table.
  return (
    <>
      <h1>{pokemon.name}</h1>
      <table>
        <tbody>
          <tr>
            <td>Height</td>
            <td>{pokemon.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <td>Image<br />
              { pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} /> }
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Start;