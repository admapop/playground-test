import React, { Component } from 'react'

import './contact-form.styles.scss'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

const validEmailRegEx =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lastName: '',
      email: '',
      message: '',
      errors: {
        name: '',
        lastName: '',
        email: '',
        message: 'Message cannot be blank!'
      }
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let errors = this.state.errors

    switch (name) {
      case 'name':
        errors.name = value.length < 2 ? 'Name must be at least 2 characters long!' : ''
        break
      case 'lastName':
        errors.lastName = value.length < 2 ? 'Last Name must be at least 2 characters long!' : ''
        break
      case 'email':
        errors.email = validEmailRegEx.test(value) ? '' : 'Email is not valid!'
        break
      case 'message':
        errors.message = value.length > 1000 ? 'Message must be under 1000 characters and not be blank!' : ''
        errors.message = value.length < 1 ? 'Message cannot be blank!' : ''
        break
      default:
        break
    }

    this.setState({ errors, [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm(this.state.errors)) {
      console.info('Valid!')
      alert('success!')
    } else {
      console.error('Invalid!')
    }

    //Code will depend on implementation
  }

  render() {
    const { name, lastName, email, message, errors } = this.state
    const { id } = this.props
    return (
      <div className='contact-form-container' id={id}>
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
        <form className='contact-form' method='post'>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            placeholder='name'
            gridArea='name'
            error={errors}
          />
          <FormInput
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            placeholder='last name'
            gridArea='lastname'
            error={errors}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='email'
            gridArea='email'
            error={errors}
            required
          />
          <textarea className='message' name='message' value={message} onChange={this.handleChange} placeholder='message' />
          {errors.message.length > 0 && <span className='error2'>{errors.message}</span>}
          <div className='button'>
            <CustomButton test='contact' button='SEND >' onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    )
  }
}
