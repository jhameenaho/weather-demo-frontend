import React from 'react'
import LoginForm from '../../components/form/LoginForm'

export default ({handleSubmit}) => (
  <div className="login-wrapper">
    <LoginForm onSubmit={handleSubmit} />
  </div>
)