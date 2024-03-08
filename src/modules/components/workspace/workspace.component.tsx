import React from 'react'
import { Canvas } from './canvas.component'

export const Workspace: React.FC = () => {

  return (
    <div className="row justify-content-center p-3">

      <div className="col col-auto w-75"><Canvas /></div>
      
    </div>
  )
}

