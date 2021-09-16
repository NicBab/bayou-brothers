import React from 'react'
import { instagram, facebook } from '../icons/index'
import './css/SocialIcons.css'

const SocialIcons = () => {

    const onInstaClick = () => {
        window.open("")
    }

    const onFacebookClick = () => {
        window.open("")
    }

    return (
        <div className="icons">
            <div className="instaIcon" onClick={onInstaClick}>{instagram}</div>
            <div className="facebookIcon" onClick={onFacebookClick}>{facebook}</div>
        </div>
    )
}

export default SocialIcons
