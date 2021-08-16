import React from 'react'
import { instagram } from '../icons/index'
import './css/SocialIcons.css'

const SocialIcons = () => {

    const onInstaClick = () => {
        window.open("")
    }
    return (
        <div className="icons">
            <div className="instaIcon" onClick={onInstaClick}>{instagram}</div>
        </div>
    )
}

export default SocialIcons
