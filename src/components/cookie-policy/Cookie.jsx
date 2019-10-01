import React, {useState} from 'react'

import './cookie.styles.scss'
import CustomButton from '../custom-button/CustomButton';

const Cookie = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div className={`cookie-bar ${visible ? '' : 'hidden'}`}>
      <p>Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.</p>
      <CustomButton test='cookie' button='OK' onClick={() => setVisible(false)}/>
    </div>
  )
}

export default Cookie
