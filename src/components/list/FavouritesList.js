import React from 'react'
import { NavLink } from 'react-router-dom'

import './FavouritesList.css'

export default ({favourites, deleteFavourite}) => (
  <div className="favourites-list-wrapper">
    <div className="favourites-list-header">Favourites</div>
    <ul className="favourites-list">
      { favourites.map(item => { return (
        <li key={item.id} className="favourites-list-item">
          <NavLink to={'/weather/' + item.city + ',' + item.country} exact={true} className="favourites-list-link" activeClassName="favourites-list-link-active">
            {item.city}, {item.country}
          </NavLink>
          <button onClick={deleteFavourite.bind(this, item.id)} className="favourites-list-button">Delete</button>
        </li>
      )}) }
    </ul>
  </div>
)