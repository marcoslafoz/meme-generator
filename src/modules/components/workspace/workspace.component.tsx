import React, { useEffect, useState } from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { memeType } from '../../../types'
import { DownloadButton } from '../download-button'
import { CollectionModal } from '../collection/collection-modal.component'
import { LikeButton } from '../collection/like-btn.component'

export const defaultMemeOptions: memeType = {
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

  const [meme, setMeme] = useState<memeType>(defaultMemeOptions)

  const [memeCollectionData, setMemeCollectionData] = useState<memeType[]>(() => {
    const storedData = localStorage.getItem('memeCollectionData')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    localStorage.setItem('memeCollectionData', JSON.stringify(memeCollectionData))
  }, [memeCollectionData])

  const handleSelectionChange = (selection: memeType) => setMeme(selection)

  const handleLikeChange = () => {
    const updatedMemeCollectionData = [...memeCollectionData, meme]
    setMemeCollectionData(updatedMemeCollectionData)
  }

  const handleClearCollection = () => {
    setMemeCollectionData([])
  }

  return (
    <div className="row justify-content-center">
      <div className="col col-auto">
        <div className="row mb-3 px-3 justify-content-center"><Canvas meme={meme} /></div>
        <div className="row"><Form onSelectionChange={handleSelectionChange} /></div>
        <div className="row mt-3 justify-content-center gap-3">
          <DownloadButton divIDToExport='contentToExport' memeName={meme.text} />
          <CollectionModal memeCollection={memeCollectionData} onClearCollection={handleClearCollection} />
          <LikeButton onLikeChange={handleLikeChange} />
        </div>
      </div>
    </div>
  )
}
