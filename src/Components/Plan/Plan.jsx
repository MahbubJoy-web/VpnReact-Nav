import React from 'react'
import './Plan.css'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <>
    <section className='Plan'>
        <div className="container">
            <div className="plan_row">
                <div className="planHead">
                    <h2>Choose Your Plan</h2>
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
                <div className="masterCard">
                    <div className="single_card">
                        <img src="Image/CardImg.png" alt="" />
                        <div className="card_name">
                            <h3>Free Plan</h3>
                        </div>
                        <div className="card_point">
                            <p><FaCheck className='marker'/>Unlimited Bandwitch</p>
                            <p><FaCheck className='marker'/>Encrypted Connection</p>
                            <p><FaCheck className='marker'/>No Traffic Logs</p>
                            <p><FaCheck className='marker'/>Works on All Devices</p>

                        </div>
                        <div className="card_price">
                            <h2>Free</h2>
                        </div>
                        <div className="card_button">
                            <Link to={''}>Select</Link>
                        </div>
                    </div>
                    <div className="single_card">
                        <img src="Image/CardImg.png" alt="" />
                        <div className="card_name">
                            <h3>Standard Plan</h3>
                        </div>
                        <div className="card_point">
                            <p><FaCheck className='marker'/>Unlimited Bandwitch</p>
                            <p><FaCheck className='marker'/>Encrypted Connection</p>
                            <p><FaCheck className='marker'/>Yes Traffic Logs</p>
                            <p><FaCheck className='marker'/>Works on All Devices</p>
                            <p><FaCheck className='marker'/>Connect Anyware</p>

                        </div>
                        <div className="card_price">
                        <h2>$9<span> / mo</span></h2>
                        </div>
                        <div className="card_button">
                            <Link to={''}>Select</Link>
                        </div>
                    </div>
                    <div className="single_card">
                        <img src="Image/CardImg.png" alt="" />
                        <div className="card_name">
                            <h3>Premium Plan</h3>
                        </div>
                        <div className="card_point">
                            <p><FaCheck className='marker'/>Unlimited Bandwitch</p>
                            <p><FaCheck className='marker'/>Encrypted Connection</p>
                            <p><FaCheck className='marker'/>No Traffic Logs</p>
                            <p><FaCheck className='marker'/>Connect Anyware</p>
                            <p><FaCheck className='marker'/>Get New Features</p>

                        </div>
                        <div className="card_price">
                            <h2>$12<span> / mo</span></h2>
                        </div>
                        <div className="card_button">
                            <Link to={''}>Select</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Plan