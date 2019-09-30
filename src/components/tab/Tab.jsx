import React from 'react'

import './tab.styles.scss'

const Tab = ({children}) => {
  return (
    <div className='tab-container'>
      <div className='tab'>Vestibulum at odio sit amet</div>
      <div className='tab-content'>{children}</div>
    </div>
  )
}

export default Tab
