import React from 'react'
import Navbar from '../navbar/Navbar'
import Navlist from '../navlist/Navlist'

const Header = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}} className='Container'>
      <Navbar/>
      <Navlist/>
    </div>
  )
}

export default Header
