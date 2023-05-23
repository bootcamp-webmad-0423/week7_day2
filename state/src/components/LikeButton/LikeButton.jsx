import './LikeButton.css'
import { useState } from 'react'

import likeImg from './../../assets/heart-on.svg'
import notLikeImg from './../../assets/heart-off.svg'

const LikeButton = () => {

    const [liked, setLiked] = useState(false)

    const handleClick = () => {
        setLiked(!liked)
    }

    return (
        <img
            src={liked ? likeImg : notLikeImg}
            onClick={handleClick}
            className="LikeButton"
            alt="Botón de like"
        />
    )
}

export default LikeButton