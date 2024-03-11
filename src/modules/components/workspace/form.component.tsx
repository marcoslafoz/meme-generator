import React, { ChangeEvent, useState } from 'react'
import { Select, SelectItem, Slider } from "@nextui-org/react"
import { filtersData, fontFamilyData, templatesData } from '../../utils/optionsData'
import { memeType } from '../../../types'
import { defaultOptions } from './workspace.component'
import { Input } from "@nextui-org/react"
import TrashCanIcon from '../../../assets/img/trash-can.svg'
import './workspace.css'

interface FormProps {
  onSelectionChange: (selection: memeType) => void
}

export const Form: React.FC<FormProps> = props => {
  const { onSelectionChange } = props
  const [selection, setSelection] = useState<memeType>(defaultOptions)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement> | number[] | number, type: string) => {
    const value =
      typeof event === 'number' ? event :
        Array.isArray(event) ? event[0] :
          event.target.value

    const updatedSelection = { ...selection, [type]: value }
    setSelection(updatedSelection)
    onSelectionChange(updatedSelection)
  }

  const handleClearImage = () => {
    const clearedSelection = {
      ...selection,
      image: '',
      text: '',
    }
    setSelection(clearedSelection)
    onSelectionChange(clearedSelection)
  }

  return (
    <div className="col">

      <div className="row py-1 align-items-center pr-2 ">
        <div className="col">
          <Input type="url" label="Imágen" size={'md'} placeholder="Introduzca la url de su imágen..." value={selection.image} onChange={(i) => handleSelectionChange(i, 'image')} />
        </div>
        <div className='col col-auto p-0 mr-2'>
          <button className="small-button" type="button" onClick={handleClearImage}>
            <span><img className="small-button-img" src={TrashCanIcon} alt='clear' /></span>
          </button>
        </div>
      </div>

      <div className="row py-1">
        <Input type="text" label="Texto" size={'md'} placeholder="Introduzca su texto..." value={selection.text} onChange={(t) => handleSelectionChange(t, 'text')} />
      </div>

      <hr className='my-4' />

      <div className="row py-1">
        <div className="col">
          <Select label="Filtros" className="max-w-xs" value={selection.filtre} onChange={(e) => handleSelectionChange(e, 'filter')}>
            {filtersData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                {a.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="col">
          <Select label="Plantillas" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'template')}>
            {templatesData.map((a) => (
              <SelectItem key={a.id} value={a.text}>
                {a.text}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="row py-1   align-items-center ">
        <div className="col">

          <div className="row align-items-center">
            <div className='col col-auto'>Color de texto:</div>
            <div className='col col-auto'><Input className='color-input' defaultValue='#e0e0e0' type="color" size={'md'} placeholder="Introduzca la url de su imágen..." onChange={(e) => handleSelectionChange(e, 'fontColor')} /></div>
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

      <div className="row py-1 mt-2 pb-4">
        <Slider
          size="md"
          step={10}
          color='foreground'
          label="Tamaño de texto"
          showSteps={true}
          maxValue={100}
          minValue={10}
          defaultValue={20}
          className="max-w-md"
          onChange={(e) => handleSelectionChange(e, 'fontSize')}
        />
      </div>
    </div>
  )
}
