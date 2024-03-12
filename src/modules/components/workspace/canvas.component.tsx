import React from 'react'
import { memeType } from '../../../types'
import './workspace.css'

interface CanvasProps {
  options: memeType
}

export const Canvas: React.FC<CanvasProps> = props => {

  const { options } = props

  return (

    <div className="col justify-content-center workspace-canvas-container mx-3 p-0 " id='contentToExport'>

      <div className="justify-content-center  p-0 m-0">
        <img
          className='img-fluid p-0 m-0 '
          src={options.image || 'https://i.imgur.com/qSlGdmN.png'}
          alt='meme'
          style={{
            filter: options.filter
          }}
        />
      </div>

      {
        (options.text).trim() !== '' &&
        <div className="row p-3">
          <p
            className='text-center'
            style={{
              fontSize: options.fontSize || 20,
              color: options.fontColor || '#e0e0e0',
              fontFamily: options.fontFamily,
            }}>
            {options.text}
          </p>
        </div>
      }

    </div>
  )
}

