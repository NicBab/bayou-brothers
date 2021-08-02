import React from 'react'
import './css/Background.css'
import backgroundLogo from '../images/BB-bw.png'

const Background = () => {
    return (
        <>
          <div className="backImg">
           <img className="img-fluid" src={backgroundLogo} alt=""></img>
          </div>
        </>
    )
}

export default Background
