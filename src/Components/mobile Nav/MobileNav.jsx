import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { LuBarChart2 } from "react-icons/lu";

const MobileNav = () => {
  // ================usestate
  const [delivary , reciver] = useState(true)
  return (
    <>
    <div className='resNav'>
        <div className="container">
          <div className="resmenu_row">
            <Link  className='resmenu_logo'><img src="Image/Logo.png" alt='' /></Link>
            <div onClick={()=>reciver(!delivary)} className="resmenu_Icon">
               <LuBarChart2 className='menu_icon'/>
            </div>
          </div>
          {
            delivary &&
            <div className='meni_col'>
            <ul className="resmenu_col">
              <li><Link to={''}>About</Link></li>
              <li><Link to={''}>Features</Link></li>
              <li><Link to={''}>Pricing</Link></li>
              <li><Link to={''}>Testimonials</Link></li>
              <li><Link to={''}>Help</Link></li>
            </ul>
            </div>
        
          }
         

        </div>
    </div>
    </>
  )
}

export default MobileNav