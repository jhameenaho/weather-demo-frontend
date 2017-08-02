package jhameenaho.weatherdemo.service.impl;

import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.repository.FavouriteRepository;
import jhameenaho.weatherdemo.service.FavouriteService;
import org.springframework.stereotype.Service;

@Service
public class FavouriteServiceImpl implements FavouriteService {
    
    private final FavouriteRepository favouriteRepository;
    
    public FavouriteServiceImpl(FavouriteRepository repository) {
        this.favouriteRepository = repository;
    }
    
    @Override
    public List<Favourite> getFavourites(String username) {
        return favouriteRepository.findByUsername(username);
    }

    @Override
    public Favourite createFavourite(String query, String username) {
        Favourite favourite = new Favourite(query, username);
        
        return favouriteRepository.save(favourite);
    }

    @Override
    public void deleteFavourite(Long id, String username) {
        if (favouriteRepository.findOne(id).getUsername().equals(username)) {
            favouriteRepository.delete(id);
        }
    }
}