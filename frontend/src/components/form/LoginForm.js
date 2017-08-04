import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="username"
        placeholder="Username"
        component="input"
        type="text"
      />
      <Field
        name="password"
        placeholder="Password"
        component="input"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;