import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={require('../../assets/logos/logo-playground-white.png')} alt=""/>
        <ul className='link-container'>
          <NavLink exact to='/we-are' className='link' activeClassName='link-active'>we are</NavLink>
          <NavLink exact to='/we-do' className='link' activeClassName='link-active'>we do</NavLink>
          <NavLink exact to='/careers' className='link' activeClassName='link-active'>careers</NavLink>
          <NavLink exact to='/contact-us' className='link' activeClassName='link-active'>contact us</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
