package jhameenaho.weatherdemo.model.output;

import java.util.Date;

public class TemperatureOutput {
    private Date from;
    private Date to;
    private Double value;
    private String unit;

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public TemperatureOutput() {
    }

    public TemperatureOutput(Date from, Date to, Double value, String unit) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.unit = unit;
    }
}
