import Square from './index'

export default {
  side: 0,
  fill: 'red',
  stroke: 'black',
  component: Square
}

export const Purple = () => (
  <Square fill='purple' stroke='black' />
)

export const Red = () => (
  <Square fill='red' stroke='black' />
)