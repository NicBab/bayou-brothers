import React from 'react'
import backgroundLogo from '../images/BB-bw-no-title copy.png'

const Background = () => {
    return (
        <>
          <div ClassName="backImg" style={{opacity: ".1"}}>
           <img className="img-fluid" src={backgroundLogo} alt=""></img>
          </div>
        </>
    )
}

export default Background
