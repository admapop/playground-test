import React, { useState } from 'react'

import './tab.styles.scss'

const Tab = ({children}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className='tab-container'>
      <div className='tab' onClick={ visible ? () => setVisible(false) : () => setVisible(true)}>Vestibulum at odio sit amet</div>
      {
        visible ? <div className='tab-content'>{children}</div> : null
      }
    </div>
  )
}

export default Tab
