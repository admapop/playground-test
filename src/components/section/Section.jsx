import React from 'react'

import './section.styles.scss'

import CustomButton from '../custom-button/CustomButton';

const Section = ({ imageLeft, src, title, children, button }) => {
  const test = `${imageLeft ? '' : 'flipped'}`
  return (
    <div className={`section-container ${test}`}>
      <img src={src} alt="" className={`banner ${test}`} />
      <div className={`smaller-section ${test}`}>
        <h1 className={`section-title ${test}`}>{title}</h1>
        <div className={`children ${test}`}>
          {children}
        </div>
        <CustomButton test={test} button={button} />
      </div>
    </div>
  )
}

export default Section
