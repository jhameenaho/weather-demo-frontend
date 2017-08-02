package jhameenaho.weatherdemo.unit.controller;

import jhameenaho.weatherdemo.controller.WeatherController;
import jhameenaho.weatherdemo.model.output.WeatherOutput;
import jhameenaho.weatherdemo.model.weatherapi.Weather;
import jhameenaho.weatherdemo.service.WeatherService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@WebMvcTest(WeatherController.class)
public class WeatherControllerUnitTests {
    
    private MockMvc mvc;
    
    @Autowired
    private WebApplicationContext webApplicationContext;

    @Before
    public void setup() throws Exception {
        this.mvc = webAppContextSetup(webApplicationContext).build();
    }
    
    @MockBean
    private WeatherService service;
    
    @Test
    public void givenWeather_whenGetWeather_thenReturnWeatherOutputObject() throws Exception {
        given(service.getWeather("oulu")).willReturn(new WeatherOutput());
        
        mvc.perform(get("/weather/oulu"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json;charset=UTF-8"));
    }
    
    @Test
    public void givenWeather_whenGetWeatherFull_thenReturnWeatherObject() throws Exception {
        given(service.getWeatherData("oulu")).willReturn(new Weather());
        
        mvc.perform(get("/weather/oulu/full"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json;charset=UTF-8"));
    }
}
