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
      return state
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.auth,
        authorized: true,
        username: jwt(action.auth).sub
      }
    default:
      return state
  }
}

export default auth
