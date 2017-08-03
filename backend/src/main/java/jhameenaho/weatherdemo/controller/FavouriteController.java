package jhameenaho.weatherdemo.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import jhameenaho.weatherdemo.model.input.FavouriteInput;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/favourite")
public class FavouriteController {
    
    private final FavouriteService favouriteService;
    
    @Autowired
    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }
    
    @Autowired
    private HttpServletRequest request;
    
    private String getUsername(HttpServletRequest request) {
        return request.getUserPrincipal().getName();
    }
    
    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public List<Favourite> getFavourites() {
        return favouriteService.getFavourites(getUsername(request));
    }
    
    @RequestMapping(method = RequestMethod.POST, produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Favourite createFavourite(@RequestBody FavouriteInput favourite) {
        return favouriteService.createFavourite(favourite.getCity(), favourite.getCountry(), getUsername(request));
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "application/json")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void destroyFavourite(@PathVariable("id") Long id) {
        favouriteService.deleteFavourite(id, getUsername(request));
    }
}