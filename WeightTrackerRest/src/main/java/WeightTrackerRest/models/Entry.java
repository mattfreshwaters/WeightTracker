package WeightTrackerRest.models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="entries")
public class Entry {

    @Id  // tells hibernate this is involved in the primary key
    private Integer entryId;

    private Integer userId;

    private BigDecimal weight;

    private LocalDate date;

    // getters + setters

    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public BigDecimal getWeight() {
        return weight;
    }
    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public Integer getEntryId() {
        return entryId;
    }
    public void setEntryId(Integer entryId) {
        this.entryId = entryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Entry entry = (Entry) o;

        if (userId != null ? !userId.equals(entry.userId) : entry.userId != null) return false;
        if (entryId != null ? !entryId.equals(entry.entryId) : entry.entryId != null) return false;
        if (weight != null ? !weight.equals(entry.weight) : entry.weight != null) return false;
        return date != null ? date.equals(entry.date) : entry.date == null;
    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (entryId != null ? entryId.hashCode() : 0);
        result = 31 * result + (weight != null ? weight.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        return result;
    }
}
