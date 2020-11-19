package WeightTrackerSB.Models;

import java.time.LocalDate;
import java.math.BigDecimal;

public class Entry {

    private Integer userId;
    private Integer entryId;
    private LocalDate date;
    private BigDecimal weight;

    public Entry(){

    }

    public Entry(Entry that){
        this.userId = that.userId;
        this.entryId = that.entryId;
        this.date = that.date;
        this.weight = that.weight;
    }

    public Integer getUserId(){return userId;}
    public void setUserId(Integer userId){this.userId = userId;}

    public Integer getEntryId(){return entryId;}
    public void setEntryId(Integer entryId){this.entryId = entryId;}

    public LocalDate getDate(){return date;}
    public void setDate(LocalDate date){this.date = date;}

    public BigDecimal getWeight(){return weight;}
    public void setWeight(BigDecimal weight){this.weight = weight;}

}
