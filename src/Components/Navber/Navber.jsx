import React from 'react'
import { Link } from 'react-router-dom'
import './Navber.css'

const Navber = () => {
  return (
    <nav className='Navbar' >
        <div className="container">
            <div className="menu_row">
                <Link className="logo">
                    <img src="Image/Logo.png" alt="" />
                </Link>
                <div className="menu_col">
                    <ul>
                        <li><Link to={''}>About</Link></li>
                        <li><Link to={''}>Features</Link></li>
                        <li><Link to={''}>Pricing</Link></li>
                        <li><Link to={''}>Testimonials</Link></li>
                        <li><Link to={''}>Help</Link></li>
                    </ul>
                </div>
                <div className="menu_button">
                    <Link to={''}> Sign In</Link>
                    <Link to={''}> Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navber