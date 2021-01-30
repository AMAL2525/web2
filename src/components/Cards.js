import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"
function Cards() {
    return (
        <div className="cards">
            <h1>Check out theses destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                        <CardItems
                        src="images/ca4.jpg"
                        text="New Brunswick"
                        label="Canada"
                        path="/services"
                        />
                        <CardItems
                        src="images/ca6.jpg"
                        text="Prince Edward Island"
                        label="Canada"
                        path="/services"
                        />
                        <CardItems
                        src="images/ca3.jpg"
                        text="New FoundLand"
                        label="Canada"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItems
                        src="images/ca1.webp"
                        text="Qubec City"
                        label="Canada"
                        path="/services"
                        />
                        <CardItems
                        src="images/ca2.jpeg"
                        text="Ontario"
                        label="Canada"
                        path="/services"
                        />
                        <CardItems
                        src="images/ca7.jpg"
                        text="Manitoba"
                        label="Canada"
                        path="/services"
                        />
                        <CardItems
                        src="images/ca8.jpg"
                        text="Yukon"
                        label="Canada"
                        path="/services"
                        />
                        
                    </ul>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Cards
