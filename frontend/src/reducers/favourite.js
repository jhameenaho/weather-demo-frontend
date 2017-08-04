import * as types from '../types'

const initState = {
  favourites: []
}

const favourite = (state = initState, action) => {
  switch (action.type) {
    case types.GET_FAVOURITES_REQUEST:
    case types.SAVE_FAVOURITE_REQUEST:
    case types.DELETE_FAVOURITE_REQUEST:
      return state
    case types.GET_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.favourites
      }
    case types.SAVE_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourites: [...state.favourites, action.favourites]
      }
    case types.DELETE_FAVOURITE_SUCCESS:
      return {
        ...state,
        favourites: state.favourites.filter(favourite => favourite.id !== action.id)
      }
    
    default:
      return state
  }
}

export default favourite