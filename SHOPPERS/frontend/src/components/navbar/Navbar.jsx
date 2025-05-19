import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'
import "./Navbar.css"
import Hamb from '../hamb/Hamb'

const Navbar = () => {
  return (
    <div className='navbar container'>
        <Logo/>
        <Navlist/>
        <Wrapper/>
        <Hamb/>
    </div>
  )
}

export default Navbar