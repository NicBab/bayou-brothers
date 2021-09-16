import React from 'react'
import { Card } from 'react-bootstrap'
import './css/Cards.css'

import stefanCrawfish from '../images/BB-stefan-crawfish.jpg'
import baconBreast from '../images/BB-bacon-breast.jpg'
import stuffedBreast from '../images/BB-stuffed-breast.jpg'
import boudin from '../images/BB-boudin.jpg'
import stuffing from '../images/BB-stuffing.jpg'
import baconLoin from '../images/BB-bacon-loin.jpg'
import andouille from '../images/andouille.jpg'
import freshBoudin from '../images/fresh-boudin.jpg'
import charringPeppers from '../images/charring-peppers.jpg'
import smokedAndouille from '../images/smoked-andouille.jpg'

const Cards = () => {
    
    return (
        <>
        <div className="imageContainer">
        <Card className="card">
         <Card.Img className="cardImg"  src={stefanCrawfish} alt="stefan crawfish" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Crawdaddy</Card.Title>
          </Card.Body>
         </Card>
 
         <Card className="card">
         <Card.Img className="cardImg" src={baconBreast} alt="bacon breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Juicy stuffed turkey breast</Card.Title>
          </Card.Body>
         </Card>
 
         <Card className="card">
         <Card.Img className="cardImg" src={stuffedBreast} alt="stuffed breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Bacon wrapped stuffed turkey breast</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={boudin} alt="stuffed breast" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Boudin</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={stuffing} alt="stuffing" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Boudin Stuffing</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={baconLoin} alt="Bacon wrapped loin" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Bacon wrapped pork loin</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={andouille} alt="andouille sausage" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Fresh Andouille Sausage</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={freshBoudin} alt="Fresh Boudin" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Fresh Boudin</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={charringPeppers} alt="charring peppers" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Charring Peppers</Card.Title>
          </Card.Body>
         </Card>

         <Card className="card">
         <Card.Img className="cardImg" src={smokedAndouille} alt="smoking andouille" />
          <Card.Body className="cardBody">
           <Card.Title className="cardTitle">Smoked Andouille</Card.Title>
          </Card.Body>
         </Card>
        </div>
       </>
    )
}

export default Cards
