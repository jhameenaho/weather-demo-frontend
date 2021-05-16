import React from 'react'
import { Form, Field } from 'react-final-form'

import './LoginForm.css'

const LoginForm = props => {
  const onSubmit = values => {
    props.onSubmit(values)
  }
  
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="Login-wrapper">
          <Field
            name="username"
            placeholder="Username"
            component="input"
            type="text"
            className="Login-input"
          />
          <Field
            name="password"
            placeholder="Password"
            component="input"
            type="password"
            className="Login-input"
          />
          <button type="submit" className="Login-button">Login</button>
        </form>
      )} />
  )
}

export default LoginForm;