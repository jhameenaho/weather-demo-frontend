package jhameenaho.weatherdemo.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import jhameenaho.weatherdemo.model.output.TemperatureOutput;
import jhameenaho.weatherdemo.model.output.WeatherOutput;
import jhameenaho.weatherdemo.model.weatherapi.Time;
import jhameenaho.weatherdemo.model.weatherapi.Weather;
import jhameenaho.weatherdemo.service.WeatherService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class WeatherServiceImpl implements WeatherService {

    @Value("${weatherApi.url}")
    private String weatherApiUrl;
    
    @Value("${weatherApi.key}")
    private String weatherApiKey;
    
    @Value("${weatherApi.mode}")
    private String weatherApiMode;
    
    @Value("${weatherApi.units}")
    private String weatherApiUnits;
    
    @Override
    public WeatherOutput getWeather(String query) {
        Weather weather = getWeatherData(query);
        WeatherOutput weatherOutput = new WeatherOutput();
        
        weatherOutput.setCity(weather.getLocation().getName());
        weatherOutput.setCountry(weather.getLocation().getCountry());
        
        List<TemperatureOutput> temperatureOutputList = new ArrayList<>();
        
        for (Time time : weather.getForecast().getTime()) {
            TemperatureOutput temperatureOutput = new TemperatureOutput();

            temperatureOutput.setFrom(time.getFrom());
            temperatureOutput.setTo(time.getTo());
            temperatureOutput.setUnit(time.getTemperature().getUnit());
            temperatureOutput.setValue(time.getTemperature().getValue());
            
            temperatureOutputList.add(temperatureOutput);
        }
        weatherOutput.setTemperature(temperatureOutputList.toArray(new TemperatureOutput[temperatureOutputList.size()]));

        return weatherOutput;
    }
    
    @Override
    public Weather getWeatherData(String query) {
        URI uri = UriComponentsBuilder.fromHttpUrl(weatherApiUrl)
                .queryParam("APPID", weatherApiKey)
                .queryParam("mode", weatherApiMode)
                .queryParam("units", weatherApiUnits)
                .queryParam("q", query)
                .build().toUri();
        
        ObjectMapper mapper = new XmlMapper();
        Weather weather;
        
        try {
            weather = mapper.readValue(uri.toURL(), Weather.class);
        } catch(Exception e) {
            return new Weather();
        }
        
        return weather;
    }
}
