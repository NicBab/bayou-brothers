import React from 'react'
import { Background, Cards } from '../components'
import './css/Home.css'

const Home = () => {
    return (
       <>
         <div className="main" style={{textAlign: "center"}}>Home</div>
         <Background />
         <Cards />
       </>
    )
}

export default Home