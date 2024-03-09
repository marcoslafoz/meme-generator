import React from 'react'
import { Canvas } from './canvas.component'
import { Select, SelectItem } from "@nextui-org/react"

export const Workspace: React.FC = () => {

  const animals = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' },
    // Puedes agregar más animales aquí según sea necesario
  ];

  return (
    <div className="row justify-content-center p-3">

      <div className="col col-auto w-75"><Canvas /></div>
      <Select
        label="Select an animal"
        className="max-w-xs"
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

