import Tag from './index'

export default {
  title: 'Tag title',
  color: 'purple',
  component: Tag
}
export const Basic = () => (
  <Tag />
)
export const Red = () => (
  <Tag title="title" color='red'/>
)
