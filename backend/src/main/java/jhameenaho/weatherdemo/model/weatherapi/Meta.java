package jhameenaho.weatherdemo.model.weatherapi;

public class Meta {
    private String lastupdate;
    private Double calctime;
    private String nextupdate;

    public String getLastupdate() {
        return lastupdate;
    }

    public void setLastupdate(String lastupdate) {
        this.lastupdate = lastupdate;
    }

    public Double getCalctime() {
        return calctime;
    }

    public void setCalctime(Double calctime) {
        this.calctime = calctime;
    }

    public String getNextupdate() {
        return nextupdate;
    }

    public void setNextupdate(String nextupdate) {
        this.nextupdate = nextupdate;
    }
}
