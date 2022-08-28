import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 800) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
  return (
    <>
        <IconContext.Provider value={{ color: 'white'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src="https://us.123rf.com/450wm/adnanjaya/adnanjaya2110/adnanjaya211000035/175644850-letter-st-simple-loop-overlapping-design-logo-vector.jpg?ver=6"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem><NavLinks to = 'about'>About</NavLinks></NavItem>
                        <NavItem><NavLinks to = 'discover'>Discover</NavLinks></NavItem>
                        <NavItem><NavLinks to = 'services'>Services</NavLinks></NavItem>
                        <NavItem><NavLinks to = 'signup'>Sign Up</NavLinks></NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Contact Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav> 
        </IconContext.Provider>
    </>
  )
}

export default Navbar