import * as types from '../types'

const initState = 
{
  city: '',
  country: '',
  temperature: [
    {
      from: '',
      to: '',
      value: ''
    }
  ]
}

const weather = (state = initState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST:
      return state
    case types.GET_WEATHER_SUCCESS:
      return action.weather
    default:
      return state
  }
}

export default weather