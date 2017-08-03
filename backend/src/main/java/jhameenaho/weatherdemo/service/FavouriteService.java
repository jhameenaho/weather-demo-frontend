package jhameenaho.weatherdemo.service;

import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;

public interface FavouriteService {
    
    public List<Favourite> getFavourites(String username);
    
    public Favourite createFavourite(String city, String country, String username);
    
    public void deleteFavourite(Long id, String username);
}

