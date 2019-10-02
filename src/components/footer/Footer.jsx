import React from 'react'
import { NavLink } from 'react-router-dom'

import {ReactComponent as Facebook} from '../../assets/logos/facebook-square.svg'
import {ReactComponent as LinkedIn} from '../../assets/logos/linkedin-in.svg'
import {ReactComponent as Instagram} from '../../assets/logos/instagram.svg'

import './footer.styles.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='title'>
        <h1>PLAYGROUND</h1>
        <h3>CREATIVE DIGITAL AGENCY</h3>
      </div>
      <ul className='link-container'>
        <NavLink exact to='/we-are' className='link' activeClassName='link-active'>we are</NavLink>
        <NavLink exact to='/we-do' className='link' activeClassName='link-active'>we do</NavLink>
        <NavLink exact to='/careers' className='link' activeClassName='link-active'>careers</NavLink>
        <NavLink exact to='/contact-us' className='link' activeClassName='link-active'>contact us</NavLink>
      </ul>
      <div className='logo-container'>
        <a href="https://www.facebook.com/playground.digital.agency" target='_blank' rel="noopener noreferrer"><Facebook className='logo'/></a>
        <a href="https://www.linkedin.com/company/playground-digital-agency" target='_blank' rel="noopener noreferrer"><LinkedIn className='logo'/></a>
        <a href="https://www.instagram.com/playground_agency/?hl=it" target='_blank' rel="noopener noreferrer"><Instagram className='logo'/></a>
      </div>
    </footer>
  )
}

export default Footer
