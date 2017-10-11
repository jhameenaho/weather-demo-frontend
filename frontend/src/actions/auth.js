import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function loginRequest() {return { type: types.LOGIN_REQUEST }}
export function loginSuccess(auth) {return {
  type: types.LOGIN_SUCCESS,
  auth
}}
export function logoutRequest() {return { type: types.LOGOUT_REQUEST }}
export function logoutSuccess() {return { type: types.LOGOUT_SUCCESS }}
export function logoutFailure() {return { type: types.LOGOUT_FAILURE }}

export function login(credentials) {
  store.dispatch(loginRequest())
  return axios.post('login', {
    username: credentials.username,
    password: credentials.password
  }).then((response) => {
    localStorage.setItem('jwt', response.headers.authorization.replace('Bearer ', ''))
    loadAuthorization()
  }).catch((error) => {
    console.log(error)
  })
}

export function logout() {
  return new Promise((resolve, reject) => {
    store.dispatch(logoutRequest())
    localStorage.getItem('jwt') ? resolve() : reject()
  }).then(resolve => {
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('jwt')
    store.dispatch(logoutSuccess())
  }).catch(reject => {
    store.dispatch(logoutFailure())
  })
}

export function loadAuthorization() {
  const token = localStorage.getItem('jwt')
  if(token) {
    axios.defaults.headers.common['Authorization'] = token
    store.dispatch(loginSuccess(token))
  }
}