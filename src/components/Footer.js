import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Click here to Subscribe to our Newsletter
				</p>
				<p className="footer-subscription-text">
					Thank You
				</p>
				<div className="input-areas">
					<form>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className=""
						/>
						<Button buttonStyle="btn--outline" 
								className="btns"
								buttonSize= 'btn--large'>Subscribe
						</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testiomonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Team</Link>
						<Link to='/'>Terms of Services</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testiomonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Team</Link>
						<Link to='/'>Terms of Services</Link>
					</div>
				</div>	
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Media</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testiomonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Team</Link>
						<Link to='/'>Terms of Services</Link>
					</div>
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<Link to='/sign-up'>How it works</Link>
						<Link to='/'>Testiomonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Team</Link>
						<Link to='/'>Terms of Services</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to='/' className="social-logo">
							LOGO
						</Link>
					</div>
					
					<div className="social-icons">
						<Link 
							className="social-icons-link twitter"
							to='/'
							target='_blank'
							aria-label='Twitter' >
								Follow us
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Footer