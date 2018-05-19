import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weather'
import { saveFavourite, deleteFavourite, getFavourites } from '../../actions/favourite'
import { withRouter } from 'react-router-dom'
import Weather from './WeatherComponent'

class WeatherContainer extends Component {

  componentDidMount () {
    if (this.props.match.params.query)
      getWeather(this.props.match.params.query)

    if (this.props.authorized && this.props.favourites.length === 0)
      getFavourites()
  }

  componentWillUpdate (nextProps) {
    if (this.props.match.params.query !== nextProps.match.params.query && nextProps.match.params.query)
      getWeather(nextProps.match.params.query)
  }

  searchWeather = (values) => {
    this.props.history.push("/weather/" + values.query);
  }

  saveFavourite = () => {
    let w = this.props.weather
    let f = this.props.favourites
    if (f.filter(i => (i.city + "" + i.country) === (w.city + "" + w.country)).length === 0) {
      saveFavourite(w)
    } else {
      console.log("Favourite already exists!")
    }
  }

  deleteFavourite(id) {
    deleteFavourite(id)
  }

  render () {
    return (
      <Weather 
        {...this.props} 
        saveFavourite={this.saveFavourite}
        searchWeather={this.searchWeather}
        deleteFavourite={this.deleteFavourite}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
  favourites: state.favourite.favourites,
  authorized: state.auth.authorized
})

export default withRouter(connect(mapStateToProps)(WeatherContainer))