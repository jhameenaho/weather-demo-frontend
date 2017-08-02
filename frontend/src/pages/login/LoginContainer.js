import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import LoginComponent from './LoginComponent'

class LoginContainer extends Component {
  handleSubmit (values) {
    login(values)
  }

  render () {
    return (
      <LoginComponent onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(LoginContainer)