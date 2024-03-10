import React from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { optionsForm } from '../../../types'
import { DownloadButton } from '../donwload-button'

export const defaultOptions: optionsForm = {
  animal: '',
  color: '',
  number: 0,
  filtre: '',
  fontColor: '',
  fontSize: 20,
  image: '',
  text: '',
  fontFamily: 'Samsung Sharp Sans Regular'
}

export const Workspace: React.FC = () => {

  const [options, setOptions] = React.useState<optionsForm>(defaultOptions)

  const handleSelectionChange = (selection: optionsForm) => {
    setOptions(selection)
  }

  return (
    <div className="row justify-content-center px-3">
      <div className="col col-auto pt-4 pb-3">
        <div className="row justify-content-center mb-3"><Canvas options={options} /></div>
        <div className="row "><Form onSelectionChange={handleSelectionChange} /></div>
        <div className="row justify-content-center"><DownloadButton /></div>
      </div>
    </div>
  )
}
