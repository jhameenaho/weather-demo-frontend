import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function getFavouritesRequest() {
  return { type: types.GET_FAVOURITES_REQUEST }
}

export function getFavouritesSuccess(favourites) {
  return {
    type: types.GET_FAVOURITES_SUCCESS,
    favourites
  }
}

export function saveFavouriteRequest() {
  return { type: types.SAVE_FAVOURITE_REQUEST }
}

export function saveFavouriteSuccess() {
  return { type: types.SAVE_FAVOURITE_SUCCESS }
}

export function getFavourites() {
  store.dispatch(getFavouritesRequest())
  return axios.get('favourite').then((response) => {
    store.dispatch(getFavouritesSuccess(response.data))
  }).catch((error) => {
    console.log(error)
  }) 
}

export function saveFavourite(favourite) {
  store.dispatch(saveFavouriteRequest())
  return axios.post('favourite', {
    query: favourite
  }).then((response) => {
    store.dispatch(saveFavouriteSuccess(response.data))
  }).catch((error) => {
    console.log(error)
  }) 
}