import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import LoginComponent from './LoginComponent'
import { getFavourites } from '../../actions/favourite'

class LoginContainer extends Component {
  handleSubmit = (values) => {
    login(values).then(() => {
      getFavourites()
    })

    this.props.history.push("/")
  }

  render () {
    return (
      <LoginComponent handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(LoginContainer)