import * as types from '../types'

const initState = 
{
  query: '',
  weather: {}
}

const weather = (state = initState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST:
      return state
    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        query: action.query,
        weather: action.weather
      }
    default:
      return state
  }
}

export default weather