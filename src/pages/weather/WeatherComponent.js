import React from 'react'
import WeatherForm from '../../components/form/WeatherForm'
import TemperatureList from '../../components/list/TemperatureList'
import FavouritesList from '../../components/list/FavouritesList'

import './WeatherComponent.css'

export default ({favourites, weather, saveFavourite, searchWeather, deleteFavourite, authorized}) => (
  <div className="weather-wrapper">
     <WeatherForm onSubmit={searchWeather}/>
{/*     
    { weather.city &&
      <div className="weather-result-wrapper">
        <div className="weather-location-wrapper">{weather.city}, {weather.country}</div>
        { authorized &&
          <div className="weather-save"><button onClick={saveFavourite.bind(null, weather, favourites)}>Save as favourite</button></div>
        }

        <TemperatureList weather={weather}/>
      </div>
    }

    { favourites.length > 0 &&
      <div className="weather-favourites-wrapper">
        <FavouritesList favourites={favourites} deleteFavourite={deleteFavourite}/>
      </div>
    } */}
  </div>
)