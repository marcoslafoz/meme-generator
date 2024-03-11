import React from 'react'
import { Canvas } from './canvas.component'
import { Form } from './form.component'
import { memeType } from '../../../types'
import { DownloadButton } from '../download-button'
import { CollectionModal } from '../collection/collection-modal.component'
import { LikeButton } from '../like-btn/like-btn.component'

export const defaultOptions: memeType = {
  filtre: '',
  fontColor: '',
  fontSize: 20,
  image: '',
  text: '',
  fontFamily: 'Samsung Sharp Sans Regular'
}

const memeCollectionData: memeType[] = []

export const Workspace: React.FC = () => {

  const [options, setOptions] = React.useState<memeType>(defaultOptions)

  const handleSelectionChange = (selection: memeType) => setOptions(selection)

  const handleLikeChange = () => {memeCollectionData.push(options) 
    console.log(memeCollectionData)
  }

  return (
    <div className="row justify-content-center px-3">
      <div className="col col-auto pt-3 pb-3">
        <div className="row justify-content-center mb-3"><Canvas options={options} /></div>
        <div className="row "><Form onSelectionChange={handleSelectionChange} /></div>
        <div className="row justify-content-center gap-3"><DownloadButton divIDToExport='contentToExport' fileName='meme-generator.png' /><CollectionModal memeCollection={memeCollectionData} /><LikeButton onLikeChange={handleLikeChange} /></div>
      </div>
    </div>
  )
}
