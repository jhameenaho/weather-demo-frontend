import React from 'react'
import Time from 'react-time'

export default ({weather}) => (
  <ul className="list-wrapper">
    { weather.temperature.map(item => { return (
      <li key={item.from} className="item-list-item">
        <p>{item.value} at <Time value={item.from} format="HH:mm DD.MM." /></p>
      </li>
    )}) }
  </ul>
)