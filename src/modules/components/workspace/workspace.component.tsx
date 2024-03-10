import React from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { optionsForm } from '../../../types'

export const defaultOptions: optionsForm = {
  animal: '',
  color: '',
  number: 0,
  filtre: '',
  fontColor: '',
  fontSize: 12,
  image: 'https://placehold.co/600x400/333333/fff/?text=Crea+tu+propio+meme',
  text: '',
}

export const Workspace: React.FC = () => {

  const [options, setOptions] = React.useState<optionsForm>(defaultOptions)

  const handleSelectionChange = (selection: optionsForm) => {
    setOptions(selection)
  }

  return (
    <div className="row justify-content-center p-3">
      <div className="col col-auto w-75">
        <div className="row"><Canvas options={options} /></div>
        <div className="row"><Form onSelectionChange={handleSelectionChange} /></div>
      </div>
    </div>
  )
}
