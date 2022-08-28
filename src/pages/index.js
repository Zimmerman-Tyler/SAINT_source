import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen) // set state from false->true as a toggle
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Services />
        <Footer />
    </>
  )
}

export default Home