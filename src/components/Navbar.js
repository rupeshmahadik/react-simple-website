import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'

function Navbar() {
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)

	const handleClick = ()=> setClick(!click);
	const closeMobileMenu =()=> setClick(false);

	const showButton = ()=>{
		if (window.innerWidth <= 960) {
			setButton(false)
		}else{
			setButton(true)
		}
	}

	useEffect(()=>{
		showButton()
		},[])

	window.addEventListener('resize',showButton)

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
						LOGO	
					</Link>
					<div className="menu-icon" onClick={handleClick}> 
						<p className={ click ?'hamberger1' : 'hamberger2'}></p>
					</div>
					<div>
					<ul className={click ? 'nav-menu-acive' : 'nav-menu'}>
						<li className="nav-item">
							<Link to='/' className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/Services' className="nav-links" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/Sign-Up' className="nav-links-mobile" onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					</div>
					<div className= "btn-signup">
					{button && <Button buttonStyle='btn--outline'  buttonSize= 'btn--large'>Sign Up</Button>}
					</div>
				</div>
			</nav>
		
		</>
	)
}

export default Navbar