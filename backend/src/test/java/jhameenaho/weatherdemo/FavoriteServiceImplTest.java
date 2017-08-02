package jhameenaho.weatherdemo;

import java.util.Collections;
import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.repository.FavouriteRepository;
import jhameenaho.weatherdemo.service.FavouriteService;
import jhameenaho.weatherdemo.service.impl.FavouriteServiceImpl;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

public class FavoriteServiceImplTest {
    
    
    @Rule 
    public MockitoRule rule = MockitoJUnit.rule();
    
    @Mock
    private FavouriteRepository repository;
    
    private FavouriteService service;
    
    @Before
    public void setUp() {
        service = new FavouriteServiceImpl(repository);
    }
    
    @Test
    public void testFavouriteFound() {
        List<Favourite>favourites = Collections.singletonList(new Favourite());
        Mockito.when(repository.findByUsername("someUser")).thenReturn(favourites);
        assertEquals(favourites, service.getFavourites("someUser"));
    }
}
