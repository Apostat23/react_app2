import React from 'react'

type link = {
  url: string
  text: string
}

export const Link = (props:link) => {
  const { url, text } = props
  return (
    <a href={url}>{text}</a>
  )
}
