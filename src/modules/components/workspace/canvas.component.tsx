import React from 'react'
import { optionsForm } from '../../../types'
import './workspace.css'

interface CanvasProps {
  options: optionsForm
}

export const Canvas: React.FC<CanvasProps> = props => {

  const { options } = props

  return (

    <div className="col col-auto justify-content-center canvas-container mx-3" id='contentToExport'>

      <div className="row ">
        <img
          className='canvas-img p-0'
          src={options.image || 'https://i.imgur.com/qSlGdmN.png'}
          alt='meme'
          style={{
            filter: options.filtre
          }}
        />
      </div>

      {
        (options.text).trim() !== '' &&
        <div className="row canvas-text p-2">
          <p
            className='text-center'
            style={{
              fontSize: options.fontSize,
              color: options.fontColor,
              fontFamily: options.fontFamily,
            }}>
            {options.text}
          </p>
        </div>
      }

    </div>
  )
}

