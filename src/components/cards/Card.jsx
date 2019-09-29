import React from 'react'

import './card.styles.scss'

const Card = ({ src, text }) => {
  return (
    <div className='card'>
      <img src={src} alt="" className='card-image'/>
      <div className='card-text'>
        <p>{text}</p>
      </div>
      <button className='card-button'>READ MORE</button>
    </div>
  )
}

export default Card
