import Rectangle from './index'

export default {
  width: 0,
  height: 0,
  fill: 'red',
  stroke: 'black',
  component: Rectangle
}

export const Purple = () => (
  <Rectangle fill='purple' stroke='black' />
)

export const Red = () => (
  <Rectangle fill='red' stroke='black' />
)