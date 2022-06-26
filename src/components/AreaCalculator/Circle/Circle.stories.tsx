import Circle from './index'

export default {
  radius: 0,
  fill: 'red',
  stroke: 'black',
  component: Circle
}

export const Purple = () => (
  <Circle fill='purple' stroke='black' />
)

export const Red = () => (
  <Circle fill='red' stroke='black' />
)