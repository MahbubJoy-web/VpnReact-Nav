import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className="joy_banner">
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h2>Want anything to be easy with <span >LaslesVPN.</span></h2>
                    <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    <div className="banner_button">
                        <Link to={'#'}>Get Started</Link>
                    </div>
                </div>
                <div className="banner_image">
                    <img src="Image/banner.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner