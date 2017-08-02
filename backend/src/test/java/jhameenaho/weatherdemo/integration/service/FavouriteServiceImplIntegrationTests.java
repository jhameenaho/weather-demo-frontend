package jhameenaho.weatherdemo.integration.service;

import io.restassured.RestAssured;
import java.util.ArrayList;
import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.repository.FavouriteRepository;
import jhameenaho.weatherdemo.service.FavouriteService;
import jhameenaho.weatherdemo.service.impl.FavouriteServiceImpl;
import static org.assertj.core.api.Assertions.assertThat;
import org.hamcrest.Matcher;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class FavouriteServiceImplIntegrationTests {
    
    @Rule 
    public MockitoRule rule = MockitoJUnit.rule();
    
//    @TestConfiguration
//    static class EmployeeServiceImplTestContextConfiguration {
//        @Bean
//        public FavouriteService favouriteService() {
//            return new FavouriteServiceImpl();
//        }
//    }
//    
//    @Autowired
//    private FavouriteService favouriteService;
    
    @MockBean
    private FavouriteRepository favouriteRepository;
    
    @Before
    public void setUp() {
        Favourite favourite = new Favourite("Oulu", "user1");
        List<Favourite> favouriteList = new ArrayList<>();
        favouriteList.add(favourite);
        Mockito.when(favouriteRepository.findByUsername(favourite.getUsername())).thenReturn(favouriteList);
    }
    
    @Test
    @WithMockUser(username = "user1")
    public void whenValidUsername_thenFavouriteShouldBeFound() {
        RestAssured.given()
                .auth()
                .preemptive()
                .oauth2("jwt")
                .log()
                .all()
                .when()
                .get("/api/v1/favourite/")
                .then()
                .log()
                .all()
                .statusCode(200)
                .body("", Matchers.any());
        //String username = "user1";
        //List<Favourite> foundList = favouriteService.getFavourites(username);
        //Favourite[] found = foundList.toArray(new Favourite[foundList.size()]);
        
//        assertThat(found[0].getUsername()).isEqualTo(username);
    }
}
