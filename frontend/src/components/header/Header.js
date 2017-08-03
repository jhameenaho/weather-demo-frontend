import React from 'react'
import { NavLink } from 'react-router-dom'

require('./Header.css')

export default ({links}) => (
  <div className="header-wrapper">
    <header>
      <ul className="header-list">
        { links.map(link => { return (
          <li className="header-item" key={link.path} >
            <NavLink to={link.path} exact={true} className="header-link" activeClassName="header-link-active">{link.text}</NavLink>
          </li>
        )}) }
      </ul>
    </header>
  </div>
)