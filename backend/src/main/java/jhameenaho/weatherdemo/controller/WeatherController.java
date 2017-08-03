package jhameenaho.weatherdemo.controller;

import jhameenaho.weatherdemo.model.input.WeatherInput;
import jhameenaho.weatherdemo.model.output.WeatherOutput;
import jhameenaho.weatherdemo.model.weatherapi.Weather;
import jhameenaho.weatherdemo.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/weather")
public class WeatherController {
    
    private final WeatherService weatherService;
    
    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }
    
    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public WeatherOutput getWeather(@RequestBody WeatherInput weather) {
        return weatherService.getWeather(weather.getQuery());
    }
    
    @RequestMapping(value = "/full", method = RequestMethod.GET, produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public Weather getWeatherFull(@RequestBody WeatherInput weather) {
        return weatherService.getWeatherData(weather.getQuery());
    }
}