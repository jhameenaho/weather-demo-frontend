package jhameenaho.weatherdemo.integration.repository;

import java.util.List;
import jhameenaho.weatherdemo.model.Favourite;
import jhameenaho.weatherdemo.repository.FavouriteRepository;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class FavouriteRepositoryIntegrationTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private FavouriteRepository favouriteRepository;
    
    @Test
    public void whenFindByUsername_thenReturnList() {
        Favourite favourite = new Favourite("oulu", "user1");
        entityManager.persist(favourite);
        entityManager.flush();

        List<Favourite> found = favouriteRepository.findByUsername(favourite.getUsername());

        assertThat(found.size()).isEqualTo(1);
    }
}
