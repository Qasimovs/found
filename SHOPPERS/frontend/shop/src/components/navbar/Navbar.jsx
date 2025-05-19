import React from 'react'
import Search from '../search/Search'
import Logo from '../logo/Logo'
import Wrap from '../wrap/Wrap'

const Navbar = () => {
  return (
    <div style={{padding:"30px 0", justifyContent:"space-between" ,display:"flex"}}>
        <Search/>
        <Logo/>
        <Wrap/>
      
    </div>
  )
}

export default Navbar
