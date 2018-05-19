import axios from 'axios'
import * as types from '../types'
import store from '../reducers'

export function getFavouritesRequest() {return { type: types.GET_FAVOURITES_REQUEST }}
export function getFavouritesSuccess(favourites) {return {
  type: types.GET_FAVOURITES_SUCCESS,
  favourites
}}
export function saveFavouriteRequest() {return { type: types.SAVE_FAVOURITE_REQUEST }}
export function saveFavouriteSuccess(favourites) {return { 
  type: types.SAVE_FAVOURITE_SUCCESS,
  favourites
}}
export function deleteFavouriteRequest() {return { type: types.DELETE_FAVOURITE_REQUEST }}
export function deleteFavouriteSuccess(id) {return { 
  type: types.DELETE_FAVOURITE_SUCCESS,
  id
}}
export function clearFavouritesState() {return {type: types.CLEAR_FAVOURITES_STATE}}

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
  return axios.post('favourite', favourite).then((response) => {
    store.dispatch(saveFavouriteSuccess(response.data))
  }).catch((error) => {
    console.log(error)
  }) 
}

export function deleteFavourite(id) {
  store.dispatch(deleteFavouriteRequest())
  return axios.delete('favourite/' + id).then((response) => {
    store.dispatch(deleteFavouriteSuccess(id))
  }).catch((error) => {
    console.log(error)
  }) 
}

export function clearFavourites() {
  store.dispatch(clearFavouritesState())
}