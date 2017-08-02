/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jhameenaho.weatherdemo.integration.service;

import jhameenaho.weatherdemo.controller.WeatherController;
import jhameenaho.weatherdemo.model.output.WeatherOutput;
import jhameenaho.weatherdemo.service.WeatherService;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author jaakkohameenaho
 */
@SpringBootTest
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
public class WeatherServiceImplIntegrationTests {
    
    @Rule 
    public MockitoRule rule = MockitoJUnit.rule();
    
    @Mock
    private WeatherService weatherService;
    
    private WeatherController controller;
    
    @Before
    public void setUp() {
        controller = new WeatherController(weatherService);
    }
    
    @Test
    public void getWeatherData() {
        WeatherOutput weather = Mockito.mock(WeatherOutput.class);
        Mockito.when(weather.getCity()).thenReturn("oulu");
        Mockito.when(weatherService.getWeather("oulu")).thenReturn(weather);
//        RestAssured.given()
//                .log()
//                .all()
//                .when()
//                .get("api/v1/weather/oulu")
//                .then()
//                .log()
//                .all()
//                .statusCode(200);
//                     
        assertEquals("oulu", controller.getWeather("oulu").getCity());
               
    }
    
}
