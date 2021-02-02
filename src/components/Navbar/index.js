import React from 'react'
// import { NavLink } from 'react-router-dom'

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>

                    <NavLink to="/about" activeStyle>
                        A propos de nous
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contactez-nous
                    </NavLink>
                    
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/contact"></NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar


