import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({test, button, onClick}) => {
  return (
    <button className={`section-button-custom ${test}`} onClick={onClick}>{button}</button>
  )
}

export default CustomButton
