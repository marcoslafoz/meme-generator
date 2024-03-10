import React from 'react'
import { optionsForm } from '../../../types'
//import clsx from 'clsx'
//clsx('foo', true && 'bar', 'baz')

interface CanvasProps {
  options: optionsForm
}

export const Canvas: React.FC<CanvasProps> = props => {

  const { options } = props

  return (

    <img className='canvas-img img-fluid rounded' src={options.image} alt='meme' />

  )
}

