import React, { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react"
import { memeType } from "../../../types"
import './collection.css'
import { CollectionItem } from "./collection-item.component"
import TrashCanIcon from '../../../assets/img/trash-can.svg'

interface CollectionModalProps {
  memeCollection: memeType[]
  onClearCollection: () => void
}

export const CollectionModal: React.FC<CollectionModalProps> = props => {
  const { memeCollection, onClearCollection } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [hasResults, setHasResults] = useState<boolean>(true)

  const handleOpen = () => {
    onOpen()
  }

  return (
    <>
      <button className="collection_button" type="button" onClick={handleOpen}>
        <span className="collection_button__text">Guardados</span>
        <span className="collection_button__icon">
          <svg className="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none">
            <g strokeWidth="2" strokeLinecap="round" stroke="#333333" fillRule="evenodd" clipRule="evenodd">
              <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
              <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
            </g>
          </svg>
        </span>
      </button>

      <Modal size={'5xl'} isOpen={isOpen} onClose={onClose} className="collection-modal" scrollBehavior="inside">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Memes guardados
            <div className="col flex-grow">
              <div className="row my-3">
                <div className="col">
                  <Input
                    type="text"
                    size={'md'}
                    placeholder="Buscar memes guardados"
                    startContent={
                      <svg
                        aria-hidden="true"
                        fill="none"
                        focusable="false"
                        height="1em"
                        role="presentation"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    }
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setHasResults(e.target.value.trim() === "" ? true : memeCollection.some(m => m.text.toLowerCase().includes(e.target.value.toLowerCase())))
                    }}
                  />
                </div>
                <div className='col col-auto p-0'>
                  <button className="twitter-button" type="button" onClick={onClearCollection}>
                    <span><img className="twitter-button-img" src={TrashCanIcon} alt='twitter' /></span>
                  </button>
                </div>

              </div>
            </div>
          </ModalHeader>

          <ModalBody>
            <div className="container">
              <div className="row justify-content-center gap-4">
                {memeCollection.length > 0 ? (
                  memeCollection
                    .filter(m => m.text.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((m, index) => (
                      <CollectionItem meme={m} key={index} memeKey={index} />
                    ))
                ) : (
                  <div>
                    <p className="text-center">No tienes memes guardados</p>
                  </div>
                )}
                {!hasResults && (
                  <div>
                    <p className="text-center">No se encontraron resultados</p>
                  </div>
                )}
              </div>
            </div>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  )
}
