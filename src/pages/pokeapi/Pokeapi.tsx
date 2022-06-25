import React from 'react'
import { useState, useEffect } from 'react'

interface ability {
  ability: {
    name: string
    url: string
  }
}

export const Pokeapi = () => {

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [pokemon, setPokemon] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPokemon(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const name = pokemon.name || 'Ditto'
  const weight = pokemon.weight || 0
  const height = pokemon.height || 0
  const abilities = pokemon.abilities

  return (
    <>
      <h1>Pokeapi</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <p>Abilities:</p>
          <ul>
            {abilities.map((ability: ability) => (
              <li key={ability.ability.url}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
    </>
      )}
    </>
  )
}
