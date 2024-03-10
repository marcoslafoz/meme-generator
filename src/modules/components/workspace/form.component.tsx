import React, { ChangeEvent, useState } from 'react'
import { Select, SelectItem } from "@nextui-org/react"
import { animals } from '../../utils/optionsData'
import { optionsForm } from '../../../types'
import { defaultOptions } from './workspace.component'
import { Input } from "@nextui-org/react";

interface FormProps {
  onSelectionChange: (selection: optionsForm) => void
}

export const Form: React.FC<FormProps> = props => {

  const { onSelectionChange } = props

  const [selection, setSelection] = useState<optionsForm>(defaultOptions)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, type: string) => {
    const value = event.target.value;
    const updatedSelection = { ...selection, [type]: value };
    setSelection(updatedSelection);
    onSelectionChange(updatedSelection);
  };


  return (
    
    <div className="col py-2">
      
      <Input type="text" label="Text" placeholder="Enter your text" onChange={(e) => handleSelectionChange(e, 'text')} />
      
      <div className="row p-2 justify-content-center">
        <Select label="Select an animal" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'animal')}>
          {animals.map((a) => (
            <SelectItem key={a.value} value={a.value}>
              {a.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="row p-2 justify-content-center">
        <Select label="Select an animal" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'animal')}>
          {animals.map((a) => (
            <SelectItem key={a.value} value={a.value}>
              {a.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="row p-2 justify-content-center">
        <Select label="Select an animal" className="max-w-xs" onChange={(e) => handleSelectionChange(e, 'animal')}>
          {animals.map((a) => (
            <SelectItem key={a.value} value={a.value}>
              {a.label}
            </SelectItem>
          ))}
        </Select>
      </div>


    </div>
  )
}
