package jhameenaho.weatherdemo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.Charset;
import jhameenaho.weatherdemo.model.input.FavouriteInput;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

@Component
public class TestUtility {
    
    public final MediaType jsonContent = new MediaType(MediaType.APPLICATION_JSON.getType(),
        MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
    
    public String objectToJson(FavouriteInput object) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();

        return mapper.writeValueAsString(object);
    }
}
