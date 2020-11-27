package WeightTrackerRest.daos;

import WeightTrackerRest.models.Entry;
import WeightTrackerRest.models.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Integer> {


    List<Goal> findByUserId(Integer userId);
}
