import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import bgimage from './bgimage.jpg'

function Cards() {
	return (
		<div className="cards">
			<h1>hello this is my card</h1>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
						</ul>

						<ul className="cards__items">
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
							<CardItem
							src={bgimage}
							text="This is your Card Product"
							label="Ice and Fire"
							path='/services'
							/>
						</ul>
					</div>
				</div>			
		</div>
	)
}

export default Cards