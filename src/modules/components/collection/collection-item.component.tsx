import React from "react"
import { memeType } from "../../../types"
import './collection.css'
import { DownloadButton } from "../download-button"
import TwitterIcon from '../../../assets/img/twitter.svg'


interface CollectionItemProps {
  meme: memeType
  id: number
}

export const CollectionItem: React.FC<CollectionItemProps> = props => {
  const { meme, id: memeKey } = props

  const handleTwitterButtonClick = () => {
    const tweetText = encodeURIComponent("Crea tu propio meme con MemeGenerator a través de este enlace 🎨 https://meme-generator.lafoz.dev/")
    window.open("https://twitter.com/intent/tweet?text=" + tweetText, "_blank")
  }

  return (
    <>
      <div className="col col-auto meme-collection-item-container justify-content-center">
        <div className='modal-canvas-container' id={`memeCollectionItem${memeKey}`}>
          <div className="row ">
            <img
              className='modal-canvas-img p-0'
              src={meme.image || 'https://i.imgur.com/qSlGdmN.png'}
              alt={meme.text}
              style={{
                filter: meme.filter
              }}
            />
          </div>

          {
            (meme.text).trim() !== '' &&
            <div className="row modal-canvas-text p-2">
              <p
                className='text-center'
                style={{
                  fontSize: meme.fontSize,
                  color: meme.fontColor,
                  fontFamily: meme.fontFamily,
                }}>
                {meme.text}
              </p>
            </div>
          }
        </div>

        <div className="row justify-content-center mt-2 gap-3">
          <DownloadButton divIDToExport={`memeCollectionItem${memeKey}`} memeName={meme.text} />
          <div className='col col-auto p-0'>
            <button className="small-button" type="button" onClick={handleTwitterButtonClick}>
              <span><img className="small-button-img" src={TwitterIcon} alt='twitter' /></span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
