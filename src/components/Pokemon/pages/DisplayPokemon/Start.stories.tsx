import Start from './index'

export default {
  fill: 'red',
  stroke: 'black',
  component: Start
} 

export const Bulbasaur = () => (
  <Start  url='https://pokeapi.co/api/v2/pokemon/1/' name='bulbasaur'/>
)

export const Ivysaur = () => (
  <Start url='https://pokeapi.co/api/v2/pokemon/2/' name='ivysaur'/>
)