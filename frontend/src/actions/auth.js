import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function loginRequest() {
  return { type: types.LOGIN_REQUEST };
}

export function loginSuccess(auth) {
  return {
    type: types.LOGIN_SUCCESS,
    auth
  }
}

export function login(credentials) {
  store.dispatch(loginRequest())
  return axios.post('login', {
    username: credentials.username,
    password: credentials.password
  }).then((response) => {
    const token = response.headers.authorization.replace('Bearer ', '')
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(loginSuccess(token))
  }).catch((error) => {
    console.log(error)
  }) 
}
