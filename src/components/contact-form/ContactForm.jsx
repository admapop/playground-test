import React, { Component } from 'react'

import './contact-form.styles.scss'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton';

export default class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lastName: '',
      email: '',
      message: ''
    }
  }

  render() {
    const { name, lastName, email, message } = this.state
    return (
      <div className='contact-form-container'>
        <div className='contact-information'>
          <h1>contact us.</h1>
          <ul>
            <li>Playground srl</li>
            <li>Via G. Mazzini 3/C,</li>
            <li>Cernusco Sul Naviglio (Milano)</li>
            <li>-</li>
            <li>T +39 0240706003</li>
          </ul>
        </div>
        <form className='contact-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='name'
            gridArea='name'
          />
          <FormInput
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            placeholder='last name'
            gridArea='lastname'
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='email'
            full
            gridArea='email'
          />
          <textarea className='message' name='message' value={message} onChange={this.handleChange} placeholder='message' />
          <div className='button'>
            <CustomButton test='contact' button='SEND >' />
          </div>
        </form>
      </div>
    )
  }
}
