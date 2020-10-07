import React from 'react'
import {Button} from './Button.js'
import './HeroSection.css'
import '../App.css'
import bgimage from './bgimage.jpg'

function HeroSection() {
	return (
		<div className="hero-container">
			<img className="bgimage" src={bgimage} alt="demo" />
			<h1>Hello, we are Starks</h1>
			<p>Here, You will find what you are looking for </p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle= 'btn--outline'
					buttonSize= 'btn--large'
				>
					SPECIAL OFFERS
				</Button>
				<Button
					className="btns"
					buttonStyle= 'btn--primary'
					buttonSize= 'btn--large'
				>
					BEST SELLERS
				</Button>
				
			</div>
		</div>
	)
}

export default HeroSection