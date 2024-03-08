import React from 'react'

interface CanvasProps {
  image?: string
}

export const Canvas: React.FC<CanvasProps> = props => {

  const {image} = props

  return (
    <img className='canvas-img img-fluid rounded' src={image ?? "https://placehold.co/600x400/333333/fff/?text=Crea+tu+propio+meme"} alt='meme' />
  )
}

