package WeightTrackerRest.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="goals")
public class Goal {

    @Id  // tells hibernate this is involved in the primary key
    private Integer goalId;

    private Integer userId;

    private BigDecimal goalWeight;

    private LocalDate goalDate;

    // getters + setters
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public Integer getGoalId() {
        return goalId;
    }
    public void setGoalId(Integer goalId) {
        this.goalId = goalId;
    }
    public BigDecimal getGoalWeight() {
        return goalWeight;
    }
    public void setGoalWeight(BigDecimal goalWeight) {
        this.goalWeight = goalWeight;
    }
    public LocalDate getGoalDate() {
        return goalDate;
    }
    public void setGoalDate(LocalDate goalDate) {
        this.goalDate = goalDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Goal goal = (Goal) o;

        if (userId != null ? !userId.equals(goal.userId) : goal.userId != null) return false;
        if (goalId != null ? !goalId.equals(goal.goalId) : goal.goalId != null) return false;
        if (goalWeight != null ? !goalWeight.equals(goal.goalWeight) : goal.goalWeight != null) return false;
        return goalDate != null ? goalDate.equals(goal.goalDate) : goal.goalDate == null;
    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (goalId != null ? goalId.hashCode() : 0);
        result = 31 * result + (goalWeight != null ? goalWeight.hashCode() : 0);
        result = 31 * result + (goalDate != null ? goalDate.hashCode() : 0);
        return result;
    }
}
