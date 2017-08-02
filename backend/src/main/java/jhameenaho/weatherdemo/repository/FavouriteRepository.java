package jhameenaho.weatherdemo.repository;

import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;
    
public interface FavouriteRepository extends JpaRepository<Favourite, Long> {
    List<Favourite> findByUsername(String username);
}
