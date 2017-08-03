package jhameenaho.weatherdemo.unit.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Arrays;
import jhameenaho.weatherdemo.model.input.FavouriteInput;
import jhameenaho.weatherdemo.controller.FavouriteController;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.service.FavouriteService;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(FavouriteController.class)
public class FavouriteControllerUnitTests {
    
    @Autowired
    private MockMvc mvc;
 
    @MockBean
    private FavouriteService service;
    
    @Test
    public void notLoggedIn_whenGetFavourites_thenDeny() throws Exception {
        mvc.perform(get("/favourite"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    public void notLoggedIn_whenPostFavourites_thenDeny() throws Exception {
        mvc.perform(post("/favourite"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    public void notLoggedIn_whenDeleteFavourites_thenDeny() throws Exception {
        mvc.perform(delete("/favourite/1"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    @WithMockUser(username = "user1")
    public void givenFavourites_whenGetFavourites_thenReturnFavouritesArray() throws Exception {
        Favourite favourite = new Favourite("Oulu", "FI", "");

        given(service.getFavourites("user1")).willReturn(Arrays.asList(favourite));

        mvc.perform(get("/favourite/"))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json;charset=UTF-8"))
            .andExpect(jsonPath("$", hasSize(1)))
            .andExpect(jsonPath("$[0].query", is(favourite.getCity())));
    }
    
    @Test
    @WithMockUser(username = "user1")
    public void whenCreateFavourite_thenReturnFavouriteObject() throws Exception {
        FavouriteInput favInput = new FavouriteInput("Oulu", "FI");

        given(service.createFavourite(favInput.getCity(), favInput.getCountry(), "user1"))
                .willReturn(new Favourite(favInput.getCity(), favInput.getCountry(), ""));

        mvc.perform(post("/favourite")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectToJson(favInput)))
            .andExpect(status().isCreated())
            .andExpect(content().contentType("application/json;charset=UTF-8"))
            .andExpect(jsonPath("$.query", is(favInput.getCity())));
    }
    
    @Test
    @WithMockUser(username = "user1")
    public void whenDeleteFavourite_thenReturnNoContent() throws Exception {
        mvc.perform(delete("/favourite/1"))
            .andExpect(status().isNoContent());
    }
    
    public String objectToJson(FavouriteInput object) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();

        return mapper.writeValueAsString(object);
    }
}
