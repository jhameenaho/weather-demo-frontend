import * as types from '../types'
import jwt from 'jwt-decode'

const initState = {
  jwt: '',
  authorized: false,
  username: ''
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
      return state
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.auth,
        authorized: true,
        username: jwt(action.auth).sub
      }
    case types.LOGOUT_SUCCESS:
      return initState
    default:
      return state
  }
}

export default auth
