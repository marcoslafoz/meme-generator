import React from 'react'
import './main.css'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {

  return (
    <div className="container-fluid">
      <div className="row bg-warning justify-content-center">
        <div className="col col-6 p-5 bg-primary">
    x
        </div>
      </div>
    </div>
  )
}

