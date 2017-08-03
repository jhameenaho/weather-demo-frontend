import React from 'react'
import WeatherForm from '../../components/form/WeatherForm'
import Time from 'react-time'

export default ({weather, saveFavourite, searchWeather}) => (
  <div className="weather-wrapper">
     <WeatherForm onSubmit={searchWeather} save={saveFavourite}/>


     <button onClick={saveFavourite.bind(null, weather)}>Save as favourite</button>
    <p>City: {weather.city}</p>
    <p>Country: {weather.country}</p>
    <ul className="list-wrapper">
      { weather.temperature.map(item => { return (
        <li key={item.from} className="item-list-item">
          <p>{item.value} at <Time value={item.from} format="HH:mm DD.MM." /></p>
        </li>
      )}) }
    </ul>
  </div>
)