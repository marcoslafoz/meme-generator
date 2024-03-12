import React from 'react'
import './main.css'
import { Header, Workspace } from '../../components'

export const Main: React.FC = () => {

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-auto px-4 py-3 pb-4 my-4 main-container ">
          <div className='mb-3'><Header/></div>
          <div><Workspace /></div>
        </div>
      </div>
    </div>
  )
}

