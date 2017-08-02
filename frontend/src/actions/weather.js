import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function getWeatherRequest() {
  return { type: types.GET_WEATHER_REQUEST };
}

export function getWeatherSuccess(weather) {
  return {
    type: types.GET_WEATHER_SUCCESS,
    weather
  }
}

export function getWeather() {
  store.dispatch(getWeatherRequest())
  return axios.get('weather/oulu').then((response) => {
    store.dispatch(getWeatherSuccess(response.data))
  }).catch((error) => {
    console.log(error)
  }) 
}