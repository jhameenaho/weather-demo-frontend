package jhameenaho.weatherdemo.model.weatherapi;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

public class Forecast {
    @JacksonXmlElementWrapper(useWrapping = false)
    private Time[] time;

    public Time[] getTime() {
        return time;
    }

    public void setTime(Time[] time) {
        this.time = time;
    }
}
