import React from 'react'
import './Counter.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <>
    <div className="Counter">
        <div className="container">
            <div className="counter_row">
                <div className="singel_counter">
                    <div className="icon">
                        <FaUserLarge className='sicon' />
                    </div>
                    <div className="count_tex">
                    <div className="count_num">
                    <CountUp end={90} duration={5.75} className='Num_text' />
                    <h2>+</h2>
                    </div>
                    <h3>Locations</h3>
                    </div>
                    <div className='part'></div>
                </div>
                <div className="singel_counter">
                    <div className="icon">
                    <FaMapMarkerAlt className='sicon' />
                    </div>
                    <div className="count_tex">
                    <div className="count_num">
                    <CountUp end={30} duration={5.75} className='Num_text' />
                    <h2>+</h2>
                    </div>
                    <h3>Users</h3>
                    </div>
                    <div className='part'></div>
                </div>
                <div className="singel_counter">
                    <div className="icon">
                    <FaDigitalTachograph className='sicon'/>
                    </div>
                    <div className="count_tex">
                    <div className="count_num">
                    <CountUp end={50} duration={5.75} className='Num_text' />
                    <h2>+</h2>
                    </div>
                    <h3>Servers</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter