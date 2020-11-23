package WeightTrackerSB.daos;

import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.Goal;
import WeightTrackerSB.models.User;

import java.util.List;

public interface WeightTrackerDao {

    void reset();
    List<User> getAllUsers();
    List<Entry> getAllEntriesForUser();
    List<Goal> getAllGoalsForUser();

    User addUser(User toAdd);
    Entry addEntry(Entry toAdd);
    Goal addGoal(Goal toAdd);

    Entry getEntryById(Integer id);
    Entry getEntryByEntryId(Integer id);


}
