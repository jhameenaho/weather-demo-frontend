import React, { Component } from 'react'
import App from './AppComponent'

export default class AppContainer extends Component {

  links () {
    var links = [
      { path: '/', text: 'Home' },
    ]
    
    if (localStorage.getItem('jwt')) {
      links.push(
        { path: '/logout', text: 'Logout' }
      )
    } else {
      links.push(
        { path: '/login', text: 'Login' }
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