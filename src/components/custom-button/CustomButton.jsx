import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({test, button}) => {
  return (
    <button className={`section-button-custom ${test}`}>{button}</button>
  )
}

export default CustomButton
