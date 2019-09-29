import React from 'react'

import './card-container.styles.scss'
import images from '../../assets/cards/cards'
import Card from '../cards/Card';

const CardContainer = () => {
  return (
    <div className='card-container'>
      {
        images.map(({id, src, text}) => {
          return <Card key={id} src={src} text={text} />
        })
      }
    </div>
  )
}

export default CardContainer
