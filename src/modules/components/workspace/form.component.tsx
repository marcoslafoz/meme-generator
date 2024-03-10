import React, { ChangeEvent, useState } from 'react'
import { Select, SelectItem, Slider } from "@nextui-org/react"
import { filtersData, fontFamilyData } from '../../utils/optionsData'
import { optionsForm } from '../../../types'
import { defaultOptions } from './workspace.component'
import { Input } from "@nextui-org/react"
import './workspace.css'

interface FormProps {
  onSelectionChange: (selection: optionsForm) => void
}

export const Form: React.FC<FormProps> = props => {

  const { onSelectionChange } = props

  const [selection, setSelection] = useState<optionsForm>(defaultOptions)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement> | number[] | number, type: string) => {
    const value =
      typeof event === 'number' ? event :
        Array.isArray(event) ? event[0] :
          event.target.value

    const updatedSelection = { ...selection, [type]: value }
    setSelection(updatedSelection)
    onSelectionChange(updatedSelection)
  }

  return (

    <div className="col">

      <div className="row py-1">
        <Input type="text" label="Texto" size={'md'} placeholder="Introduzca su texto..." onChange={(e) => handleSelectionChange(e, 'text')} />
      </div>

      <div className="row py-1">
        <Input type="url" label="Imagen" size={'md'} placeholder="Introduzca la url de su imágen..." onChange={(e) => handleSelectionChange(e, 'image')} />
      </div>

      <hr className='my-4' />

      <div className="row py-1 pb-2 ">
        <div className="col">
          <Select label="Filtros" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'filtre')}>
            {filtersData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                {a.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="col">
          <Select label="Plantillas" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'animal')}>
            {filtersData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                {a.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="row py-1   align-items-center ">
        <div className="col">

          <div className="row align-items-center">
            <div className='col col-auto'>Color de texto:</div>
            <div className='col col-auto'><Input className='color-input' defaultValue='#ffffff' type="color" size={'md'} placeholder="Introduzca la url de su imágen..." onChange={(e) => handleSelectionChange(e, 'fontColor')} /></div>
          </div>
        </div>
        <div className="col">
          <Select label="Tipografía" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'fontFamily')}>
            {fontFamilyData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                {a.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="row py-1 pb-4">
        <Slider
          size="md"
          step={5}
          color='foreground'
          label="Tamaño de texto"
          showSteps={true}
          maxValue={50}
          minValue={15}
          defaultValue={25}
          className="max-w-md"
          onChange={(e) => handleSelectionChange(e, 'fontSize')}
        />
      </div>





    </div>
  )
}
