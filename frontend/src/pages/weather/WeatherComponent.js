import React from 'react'
import WeatherForm from '../../components/form/WeatherForm'
import TemperatureList from '../../components/list/TemperatureList'
import FavouritesList from '../../components/list/FavouritesList'

export default ({favourites, weather, saveFavourite, searchWeather, deleteFavourite}) => (
  <div className="weather-wrapper">
     <WeatherForm onSubmit={searchWeather}/>
    
    { Object.keys(weather).length > 0 &&
      <div>
        <button onClick={saveFavourite.bind(null, weather, favourites)}>Save as favourite</button>
        <p>City: {weather.city} Country: {weather.country}</p>
        <TemperatureList weather={weather}/>
      </div>
    }

    <FavouritesList favourites={favourites} deleteFavourite={deleteFavourite}/>
  </div>
)