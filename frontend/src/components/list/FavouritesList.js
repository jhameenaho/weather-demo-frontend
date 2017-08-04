import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({favourites, deleteFavourite}) => (
  <ul className="fav-wrapper">
    { favourites.map(item => { return (
      <li key={item.id} className="item-list-item">
        <NavLink to={'/weather/' + item.city + ',' + item.country} exact={true} className="fav-link" activeClassName="fav-link-active">
          City: {item.city} Country: {item.country}
        </NavLink>
        <button onClick={deleteFavourite.bind(this, item.id)}>Delete</button>
      </li>
    )}) }
  </ul>
)