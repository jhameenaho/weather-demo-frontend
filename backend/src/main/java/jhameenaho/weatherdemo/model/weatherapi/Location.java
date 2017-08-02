package jhameenaho.weatherdemo.model.weatherapi;

public class Location {
    private String name;
    private String type;
    private String country;
    private String timezone;
    private PreciseLocation location;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public PreciseLocation getLocation() {
        return location;
    }

    public void setLocation(PreciseLocation location) {
        this.location = location;
    }
}