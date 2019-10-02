import React, { useState, useRef, useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

const isBrowser = typeof window !== `undefined`

function getScrollPosition ({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0}

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow ? { x: window.scrollX, y: window.scrollY } : { x: position.left, y: position.top }
}

function useScrollPosition (effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

const Navbar = () => {
  const [opacityOnScroll, setOpacityOnScroll] = useState(false)
  useScrollPosition (({ currPos }) => {
    const trigger = document.getElementsByClassName('custom-slider')[0].clientHeight - document.getElementsByClassName('navbar')[0].clientHeight
    const isOpacity = currPos.y < -trigger
    if (isOpacity !== opacityOnScroll) setOpacityOnScroll(isOpacity)
  }, [opacityOnScroll])
  return (
    <nav className={`navbar ${opacityOnScroll ? 'scroll' : '' }`}>
      <img src={require('../../assets/logos/logo-playground-white.png')} alt=""/>
        <ul className='link-container'>
          {/* <NavLink to='#we-are' className='link' activeClassName='link-active'>we are</NavLink>
          <NavLink exact to='/we-do' className='link' activeClassName='link-active'>we do</NavLink>
          <NavLink exact to='/careers' className='link' activeClassName='link-active'>careers</NavLink>
          <NavLink exact to='/contact-us' className='link' activeClassName='link-active'>contact us</NavLink> */}
          <a href="#we-are" className='link'>we are</a>
          <a href="#we-do" className='link'>we do</a>
          <a href="#careers" className='link'>careers</a>
          <a href="#contact-us" className='link'>contact us</a>
        </ul>
    </nav>
  )
}

export default Navbar
