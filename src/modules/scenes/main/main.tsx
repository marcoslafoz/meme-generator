import React from 'react'
import './main.css'
import { Header, Workspace } from '../../components'

export const Main: React.FC = () => {

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-auto py-2 mt-4 main-container ">
          <Header />
          <Workspace />
        </div>
      </div>
    </div>
  )
}

