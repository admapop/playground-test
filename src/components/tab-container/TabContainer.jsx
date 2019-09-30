import React, { Component } from 'react'

import './tab-container.styles.scss'

export default class TabContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: ''
    }
  }
  

  render() {
    return (
    <div className='tab-section'>
      {this.props.children}
    </div>
    )
  }
}
