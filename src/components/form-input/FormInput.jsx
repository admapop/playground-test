import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, full, gridArea, error, name, ...otherProps}) => {
  return (
    <div className={`group ${gridArea}`}>
      <input className={`form-input ${full ? 'full' : 'half'}`} onChange={handleChange} name={name} {...otherProps} />
      {error[name].length > 0 && <span className='error'>{error[name]}</span>}
    </div>
  )
}

export default FormInput
