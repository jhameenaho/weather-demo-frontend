import * as types from '../types'

const initState = 
[
  {
    query: ''
  }
]

const favourite = (state = initState, action) => {
  switch (action.type) {
    case types.GET_FAVOURITES_REQUEST:
    case types.SAVE_FAVOURITE_REQUEST:
    case types.SAVE_FAVOURITE_SUCCESS:
      return state
    case types.GET_FAVOURITES_SUCCESS:
      return action.favourites
    default:
      return state
  }
}

export default favourite