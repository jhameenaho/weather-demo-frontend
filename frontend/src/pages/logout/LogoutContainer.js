import { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../actions/auth'
import { clearFavourites } from '../../actions/favourite'

class Logout extends Component {

  handleLogout = () => {
    logout().then(() => {
      clearFavourites()
      this.props.history.push("/weather")
    })
  }

  render() {
    this.handleLogout()

    return null
  }

}

export default connect()(Logout)