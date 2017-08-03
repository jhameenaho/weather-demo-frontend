import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function getWeatherRequest() {
  return { type: types.GET_WEATHER_REQUEST };
}

export function getWeatherSuccess(query, weather) {
  return {
    type: types.GET_WEATHER_SUCCESS,
    query,
    weather
  }
}

export function getWeather(weather) {
  store.dispatch(getWeatherRequest())
  return axios.get('weather/' + weather.query).then((response) => {
    store.dispatch(getWeatherSuccess(weather.query, response.data))
  }).catch((error) => {
    console.log(error)
  }) 
}