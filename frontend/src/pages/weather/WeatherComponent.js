import React from 'react'
import WeatherForm from '../../components/form/WeatherForm'

export default ({weather, saveFavourite, searchWeather}) => (
  <div className="weather-wrapper">
     <WeatherForm onSubmit={searchWeather} save={saveFavourite}/>


     <button onClick={saveFavourite.bind(null, weather)}>Save as favourite</button>
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