package jhameenaho.weatherdemo.model.weatherapi;

public class PreciseLocation {
    private Double altitude;
    private Double latitude;
    private Double longitude;
    private String geobase;
    private Integer geobaseid;

    public Double getAltitude() {
        return altitude;
    }

    public void setAltitude(Double altitude) {
        this.altitude = altitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getGeobase() {
        return geobase;
    }

    public void setGeobase(String geobase) {
        this.geobase = geobase;
    }

    public Integer getGeobaseid() {
        return geobaseid;
    }

    public void setGeobaseid(Integer geobaseid) {
        this.geobaseid = geobaseid;
    }
}