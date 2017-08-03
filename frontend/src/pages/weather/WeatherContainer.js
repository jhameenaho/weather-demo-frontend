import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'
import { getFavourites, saveFavourite } from '../../actions/favourite'
import { withRouter } from 'react-router-dom'
import Weather from './WeatherComponent'

class WeatherContainer extends Component {

  componentDidMount () {
    getFavourites()
  }

  searchWeather (values) {
    getWeather(values)
  }

  saveFavourite (weather) {
    saveFavourite(weather)
  }

  render () {
    return (
      <Weather 
        {...this.props} 
        saveFavourite={this.saveFavourite}
        searchWeather={this.searchWeather}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
  query: state.weather.query
})

export default withRouter(connect(mapStateToProps)(WeatherContainer))