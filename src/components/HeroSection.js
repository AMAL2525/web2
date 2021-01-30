import React from 'react'
import "../App.css"
import {Button} from './Button';
import "./HeroSection.css";
function HeroSection() {
    return (
        <div className="hero-container">
           <video src="/videoplayback.mp4" autoPlay loop muted/>
           <h1>Canada land of Freedom</h1> 
           <p>Be one of US</p>
           <div className="hero-btns">
               <Button className="btns" buttonStyle='btn--outline'
               buttonSize='btn--large'>Get Started</Button>
               <Button className="btns" buttonStyle='btn--primary'
               buttonSize='btn--large'>Watch Youtube Channel
               <i className='far fa-play-circle'/>
               </Button>
           </div>
        </div>
    )
}

export default HeroSection
