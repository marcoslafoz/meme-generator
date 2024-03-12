import React, { useEffect, useState } from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { memeType } from '../../../types'
import { DownloadButton } from '../download-button'
import { CollectionModal } from '../collection/collection-modal.component'
import { LikeButton } from '../collection/like-btn.component'

export const defaultOptions: memeType = {
  filter: '',
  fontColor: '#e0e0e0',
  fontSize: 20,
  image: '',
  text: '',
  fontFamily: 'Samsung Sharp Sans Regular',
  id: '',
  category: ''
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

  return (
    <div className="row justify-content-center px-3">
      <div className="col col-auto pt-3 pb-3">
        <div className="row justify-content-center mb-3"><Canvas options={options} /></div>
        <div className="row "><Form onSelectionChange={handleSelectionChange} /></div>
        <div className="row justify-content-center gap-3">
          <DownloadButton divIDToExport='contentToExport' memeName={options.text} />
          <CollectionModal memeCollection={memeCollectionData} onClearCollection={handleClearCollection} />
          <LikeButton onLikeChange={handleLikeChange} />
        </div>
      </div>
    </div>
  )
}
