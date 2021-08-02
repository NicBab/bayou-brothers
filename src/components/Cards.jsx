import React from 'react'
import { Card } from 'react-bootstrap'
import './css/Cards.css'
import stefanCrawfish from '../images/BB-stefan-crawfish.jpg'
import baconBreast from '../images/BB-bacon-breast.jpg'
import stuffedBreast from '../images/BB-stuffed-breast.jpg'
import boudin from '../images/BB-boudin.jpg'

const Cards = () => {
    return (
        <>
        <div className="imageContainer">
        <Card className="card">
         <Card.Img  src={stefanCrawfish} alt="stefan crawfish" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Crawdaddy</Card.Title>
          </Card.Body>
         </Card>
 
         <Card className="card">
         <Card.Img  src={baconBreast} alt="bacon breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Juicy stuffed turkey breast</Card.Title>
          </Card.Body>
         </Card>
 
         <Card className="card">
         <Card.Img  src={stuffedBreast} alt="stuffed breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Bacon wrapped stuffed turkey breast</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img  src={boudin} alt="stuffed breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Boudin</Card.Title>
          </Card.Body>
         </Card>
        </div>
       </>
    )
}

export default Cards
