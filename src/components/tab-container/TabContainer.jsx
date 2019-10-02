import React from 'react'

import './tab-container.styles.scss'

const TabContainer = ({children}) => {
  return (
    <div className='tab-section'>
      {children}
    </div>
  )
}

export default TabContainer