package jhameenaho.weatherdemo.model.output;

import jhameenaho.weatherdemo.model.output.TemperatureOutput;

public class WeatherOutput {
    private String city;
    private String country;
    private TemperatureOutput[] temperature;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public TemperatureOutput[] getTemperature() {
        return temperature;
    }

    public void setTemperature(TemperatureOutput[] temperature) {
        this.temperature = temperature;
    }
}

