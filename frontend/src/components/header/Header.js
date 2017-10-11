import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default ({links}) => (
  <div className="header-wrapper">
    <header>
      <ul className="header-list">
        { links.map(link => { return (
          <li className="header-item" key={link.path} >
            <NavLink to={link.path} exact={link.exact} className="header-link" activeClassName="header-link-active">{link.text}</NavLink>
          </li>
        )}) }
      </ul>
    </header>
  </div>
)