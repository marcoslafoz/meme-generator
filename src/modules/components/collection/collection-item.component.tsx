import React from "react";
import { memeType } from "../../../types";
import './collection.css'
import { DownloadButton } from "../download-button";
import TwitterIcon from '../../../assets/img/twitter.svg'


interface CollectionItemProps {
  meme: memeType
  memeKey: number
}

export const CollectionItem: React.FC<CollectionItemProps> = props => {
  const { meme, memeKey } = props

  return (
    <>
      <div className="col col-auto meme-collection-item-container justify-content-center">
        <div className='canvas-container' id={`memeCollectionItem${memeKey}`}>
          <div className="row ">
            <img
              className='canvas-img p-0'
              src={meme.image || 'https://i.imgur.com/qSlGdmN.png'}
              alt='meme'
              style={{
                filter: meme.filtre
              }}
            />
          </div>

          {
            (meme.text).trim() !== '' &&
            <div className="row canvas-text p-2">
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
          <DownloadButton divIDToExport={`memeCollectionItem${memeKey}`} fileName={"saved-meme"} />
          <div className='col col-auto p-0'>
            <button className="twitter-button" type="button">
              <span><img className="twitter-button-img" src={TwitterIcon} alt='twitter' /></span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
