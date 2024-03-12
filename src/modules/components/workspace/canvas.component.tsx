import React from 'react'
import { memeType } from '../../../types'
import { defaultMemeOptions } from './workspace.component'
import './workspace.css'

interface CanvasProps {
  meme: memeType
}

export const Canvas: React.FC<CanvasProps> = props => {

  const { meme } = props

  return (

    <div className="col justify-content-center workspace-canvas-container p-0 " id='contentToExport'>

      <div className="row ">
        <img
          className='workspace-canvas-img p-0'
          src={meme.image || 'https://i.imgur.com/qSlGdmN.png'}
          alt={meme.text}
          style={{
            filter: meme.filter
          }}
        />
      </div>

      {
        (meme.text).trim() !== '' &&
        <div className="row p-3">
          <p
            className='text-center'
            style={{
              fontSize: meme.fontSize || defaultMemeOptions.fontSize,
              color: meme.fontColor || defaultMemeOptions.fontColor,
              fontFamily: meme.fontFamily || defaultMemeOptions.fontFamily,
            }}>
            {meme.text}
          </p>
        </div>
      }

    </div>
  )
}

