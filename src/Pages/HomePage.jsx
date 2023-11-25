import React from 'react'
import NavBar from '../components/NavBar'
import MobileNav from '../components/MobileNav'
import Hero from '../components/Hero'
import Advertising from '../components/Advertising'
import Footer from "../components/Footer"

function HomePage() {
  return (
    <>
    <NavBar/>
    <MobileNav/>
    <Hero/>
    <Advertising/>
    <Footer/>
    </>
  )
}

export default HomePage