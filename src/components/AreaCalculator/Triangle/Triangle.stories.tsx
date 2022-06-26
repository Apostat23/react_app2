import Triangle from './index'

export default {
  base: 0,
  height: 0,
  fill: 'red',
  stroke: 'black',
  component: Triangle
}

export const Purple = () => (
  <Triangle fill='purple' stroke='black' />
)

export const Red = () => (
  <Triangle fill='red' stroke='black' />
)