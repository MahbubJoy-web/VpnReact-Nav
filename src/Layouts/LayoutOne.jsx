import React from 'react'
import Navber from '../Components/Navber/Navber'
import { Outlet } from 'react-router-dom'
import MobileNav from '../Components/mobile Nav/MobileNav'

const LayoutOne = () => {
  return (
    <>
    <Navber />
    <MobileNav/>
    <Outlet />
    </>
  )
}

export default LayoutOne