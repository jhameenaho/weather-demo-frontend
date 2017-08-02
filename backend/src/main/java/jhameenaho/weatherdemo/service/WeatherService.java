package jhameenaho.weatherdemo.service;

import jhameenaho.weatherdemo.model.output.WeatherOutput;
import jhameenaho.weatherdemo.model.weatherapi.Weather;

public interface WeatherService {
    
    public WeatherOutput getWeather(String query);
    
    public Weather getWeatherData(String query);
}