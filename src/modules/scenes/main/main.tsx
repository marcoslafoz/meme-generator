import React from 'react'
import './main.css'
import { Header, Workspace } from '../../components'

export const Main: React.FC = () => {

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-auto p-4 m-5 main-container ">
          <Header />
          <Workspace />
        </div>
      </div>
    </div>
  )
}

