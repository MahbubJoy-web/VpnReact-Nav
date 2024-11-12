import React from 'react'
import './Feature.css'
import { FaCheckCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <>
    <section className='Feature'>
        <div className="container">
            <div className="feature_row">
                <div className="feature_img">
                    <img src="Image/feature.png" alt="" />
                </div>
                <div className="feature_text">
                    <h2>We Provide Many Features You Can Use</h2>
                    <h3>You can explore the features that we provide with fun and have their own functions each feature.</h3>
                    <div className="pont_text">
                        <p><FaCheckCircle className='pointer'/>Powerfull online protection.</p>
                        <p><FaCheckCircle className='pointer'/>Internet without borders.</p>
                        <p><FaCheckCircle className='pointer'/>Supercharged VPN</p>
                        <p><FaCheckCircle className='pointer'/>No specific time limits.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Feature