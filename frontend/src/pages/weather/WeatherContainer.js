import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'
import { getFavourites, saveFavourite } from '../../actions/favourite'
import { withRouter } from 'react-router-dom'
import Weather from './WeatherComponent'

class WeatherContainer extends Component {

  componentDidMount () {
    getWeather()
    getFavourites()
  }

  handleSubmit (e) {
    console.log("ASD")
    e.preventDefault()
    saveFavourite("testi testi")
  }

  render () {
    return (
      <Weather {...this.props} handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default withRouter(connect(mapStateToProps)(WeatherContainer))