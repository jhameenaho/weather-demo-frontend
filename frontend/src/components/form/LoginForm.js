import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './LoginForm.css'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className="Login-wrapper">
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
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;