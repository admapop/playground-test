import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, full, gridArea, ...otherProps}) => {
  return (
    <div className={`group ${gridArea}`}>
      <input className={`form-input ${full ? 'full' : 'half'}`} onChange={handleChange} {...otherProps} />
    </div>
  )
}

export default FormInput
