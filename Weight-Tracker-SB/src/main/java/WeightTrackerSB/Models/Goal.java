package WeightTrackerSB.Models;


import java.math.BigDecimal;
import java.time.LocalDate;
public class Goal {

    private Integer userId;
    private BigDecimal goalWeight;
    private LocalDate date;

    public Goal(){

    }

    public Goal(Goal that) {
        this.userId = that.userId;
        this.goalWeight = that.goalWeight;
        this.date = that.date;
    }

    public Integer getUserId(){return userId;}
    public void setUserId(Integer userId){this.userId = userId;}

    public BigDecimal getGoalWeight(){return goalWeight;}
    public void setGoalWeight(BigDecimal goalWeight){this.goalWeight = goalWeight;}

    public LocalDate getDate(){return date;}
    public void setDate(LocalDate date){this.date = date;}
}
