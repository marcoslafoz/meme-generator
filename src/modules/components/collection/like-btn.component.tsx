import React from 'react'
import './collection.css'
import likeIcon from '../../../assets/img/like.svg'
import unlikeIcon from '../../../assets/img/unlike.svg'

interface LikeButtonProps {
  onLikeChange: () => void
}

export const LikeButton: React.FC<LikeButtonProps> = props => {
  const { onLikeChange } = props

  const [like, setLike] = React.useState<boolean>(false)

  const handleLikeClick = () => {
    setLike(!like)
    onLikeChange()
    setTimeout(() => setLike(false), 3000)
  }

  return (
    <div className='col col-auto p-0'>
      <button className="small-button" type="button" onClick={handleLikeClick}>
        <span><img className="small-button-img" src={like ? likeIcon : unlikeIcon} alt='like' /></span>
      </button>
    </div>
  )
}
