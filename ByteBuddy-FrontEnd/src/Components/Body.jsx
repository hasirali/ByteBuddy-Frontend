import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
    <Navbar />
    {/*    //yeh outlet child component ko render karega */}
    <Outlet /> 
    <Footer/>
    </>
  )
}

export default Body