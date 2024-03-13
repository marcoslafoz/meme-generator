import React, { ChangeEvent, useState } from 'react'
import { Select, SelectItem, SelectSection, Slider } from "@nextui-org/react"
import { filtersData, fontFamilyData, templatesData } from '../../utils/data'
import { memeType } from '../../../types'
import { defaultMemeOptions } from './workspace.component'
import { Input } from "@nextui-org/react"
import TrashCanIcon from '../../../assets/img/trash-can.svg'
import './workspace.css'

interface FormProps {
  onSelectionChange: (selection: memeType) => void
}

export const Form: React.FC<FormProps> = props => {
  const { onSelectionChange } = props
  const [selection, setSelection] = useState<memeType>(defaultMemeOptions)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement> | number[] | number, type: string) => {
    const value =
      typeof event === 'number' ? event :
        Array.isArray(event) ? event[0] :
          event.target.value

    const updatedSelection = { ...selection, [type]: value }
    setSelection(updatedSelection)
    onSelectionChange(updatedSelection)
  }


  const handleClearMeme = () => {
    const clearedSelection = {
      ...selection,
      image: defaultMemeOptions.image,
      text: defaultMemeOptions.text,
      filter: defaultMemeOptions.filter,
      fontSize: defaultMemeOptions.fontSize,
      fontFamily: defaultMemeOptions.fontFamily,
      fontColor: defaultMemeOptions.fontColor
    }
    setSelection(clearedSelection)
    onSelectionChange(clearedSelection)
  }

  const categories: string[] = templatesData.reduce((uniqueCategories: string[], item) => {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category)
    }
    return uniqueCategories
  }, [])

  const handleTemplateChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const template = templatesData.find(data => data.id === event.target.value)

    const templateSelection = {
      ...selection,
      image: template?.image || defaultMemeOptions.image,
      text: template?.text || defaultMemeOptions.text,
      filter: template?.filter || defaultMemeOptions.filter,
      fontSize: template?.fontSize || defaultMemeOptions.fontSize,
      fontFamily: template?.fontFamily || defaultMemeOptions.fontFamily,
      fontColor: template?.fontColor || defaultMemeOptions.fontColor
    }

    setSelection(templateSelection)
    onSelectionChange(templateSelection)
  }


  return (
    <div className="col">

      <div className="row align-items-center pr-2 ">
        <div className="col">
          <Input type="url" label="Imágen" size={'md'} placeholder="Introduzca la url de su imágen..." value={selection.image} onChange={(i) => handleSelectionChange(i, 'image')} />
        </div>

        <div className='col col-auto p-0 mr-2'>
          <button className="small-button" type="button" onClick={handleClearMeme}>
            <span><img className="small-button-img" src={TrashCanIcon} alt='clear' /></span>
          </button>
        </div>
      </div>

      <div className="row mt-2 my-1">
        <Input type="text" label="Texto" size={'md'} placeholder="Introduzca su texto..." value={selection.text} onChange={(t) => handleSelectionChange(t, 'text')} />
      </div>

      <hr className='my-4' />

      <div className="row py-1">
        <div className="col">
          <Select label="Filtros" className="max-w-xs" value={selection.filter} onChange={(e) => handleSelectionChange(e, 'filter')}>
            {filtersData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                {a.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="col">
          <Select label="Plantillas" className="max-w-xs" onChange={handleTemplateChange}>
            {(categories).map((category) => (
              <SelectSection title={category} key={category}>

                {templatesData.filter(meme => meme.category === category).map((memeByCategory) => (

                  <SelectItem key={memeByCategory.id} textValue={memeByCategory.text}>
                    <div className="flex gap-2 items-center">
                      <img className="inline-block w-10  rounded" src={memeByCategory.image} alt="a" />
                      <div className="flex flex-col">
                        <span className="text-small">{memeByCategory.text}</span>
                      </div>
                    </div>
                  </SelectItem>
                ))}

              </SelectSection>
            ))}
          </Select>
        </div>
      </div>

      <div className="row py-1   align-items-center ">
        <div className="col">
          <div className="row align-items-center">
            <div className='col col-auto'>Color de texto:</div>
            <div className='col col-auto'><Input className='color-input' type="color" size={'md'} placeholder="Introduzca la url de su imágen..." onChange={(e) => handleSelectionChange(e, 'fontColor')} /></div>
          </div>
        </div>

        <div className="col">
          <Select label="Tipografía" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'fontFamily')}>
            {fontFamilyData.map((a) => (
              <SelectItem key={a.value} value={a.value}>
                <span style={{ fontFamily: a.value }}>{a.label}</span>
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="row py-1 mt-2 ">
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
