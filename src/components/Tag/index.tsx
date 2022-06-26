import { FC } from 'react'

interface TagProps {
  title?: string
  color?: string
}

const Tag: FC<TagProps> = ({ title="title", color='purple' }) => {
  return (
      <div style={{backgroundColor: color}}>
          {title}
      </div>
  )
}
export default Tag

