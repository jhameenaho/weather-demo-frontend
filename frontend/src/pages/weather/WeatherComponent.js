import React from 'react'

export default ({weather, handleSubmit}) => (
  <div className="main">

    <button onClick={handleSubmit}>Add favourite</button>

    <p>City: {weather.city}</p>
    <p>Country: {weather.country}</p>
    <ul className="list-wrapper">
      { weather.temperature.map(item => { return (
        <li key={item.from} className="item-list-item">
          <p>{item.value}</p>
        </li>
      )}) }
    </ul>
  </div>
)