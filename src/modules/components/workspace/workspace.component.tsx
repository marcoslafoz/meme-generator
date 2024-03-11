import React, { useEffect, useState } from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { memeType } from '../../../types'
import { DownloadButton } from '../download-button'
import { CollectionModal } from '../collection/collection-modal.component'
import { LikeButton } from '../like-btn/like-btn.component'
import { templatesData } from '../../utils'

export const defaultOptions: memeType = {
  filtre: '',
  fontColor: '',
  fontSize: 20,
  image: '',
  text: '',
  fontFamily: 'Samsung Sharp Sans Regular',
  template: '',
  id: ''
}

export const Workspace: React.FC = () => {
  
  const [options, setOptions] = useState<memeType>(defaultOptions)
  
  const [memeCollectionData, setMemeCollectionData] = useState<memeType[]>(() => {
    const storedData = localStorage.getItem('memeCollectionData')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    localStorage.setItem('memeCollectionData', JSON.stringify(memeCollectionData))
  }, [memeCollectionData])

  const handleSelectionChange = (selection: memeType) => setOptions(selection)

  const handleLikeChange = () => {
    const updatedMemeCollectionData = [...memeCollectionData, options]
    setMemeCollectionData(updatedMemeCollectionData)
  }

  const handleClearCollection = () => {
    setMemeCollectionData([])
  }

  useEffect(() => {
    setOptions(templatesData.find(template => template.id === options.template) || options)
  }, [options, options.template]);


  return (
    <div className="row justify-content-center px-3">
      <div className="col col-auto pt-3 pb-3">
        <div className="row justify-content-center mb-3"><Canvas options={options} /></div>
        <div className="row "><Form onSelectionChange={handleSelectionChange} /></div>
        <div className="row justify-content-center gap-3">
          <DownloadButton divIDToExport='contentToExport' fileName='meme-generator.png' />
          <CollectionModal memeCollection={memeCollectionData} onClearCollection={handleClearCollection} />
          <LikeButton onLikeChange={handleLikeChange} />
        </div>
      </div>
    </div>
  )
}
