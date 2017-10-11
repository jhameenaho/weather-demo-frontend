import React, { Component } from 'react'
import App from './AppComponent'

import { loadAuthorization } from '../../actions/auth'

export default class AppContainer extends Component {

  componentWillMount() {
    loadAuthorization()
  }

  links () {
    var links = [
      { path: '/', text: 'About', exact: true },
      { path: '/weather', text: 'Weather', exact: false },
    ]
    
    if (localStorage.getItem('jwt')) {
      links.push(
        { path: '/logout', text: 'Logout', exact: true }
      )
    } else {
      links.push(
        { path: '/login', text: 'Login', exact: true }
      )
    }

    return links
  }

  render () {
    return (
      <App {...this.props} links={this.links()} />
    )
  }
}