package WeightTrackerSB.daos;

import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.Goal;
import WeightTrackerSB.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Component
@Profile({"production", "daotesting"})
public class PostgresWeightDao implements WeightTrackerDao{


    @Autowired
    JdbcTemplate template;

    @Override
    public void reset() {

    }

    @Override
    public List<User> getAllUsers() {
        return template.query("SELECT * FROM \"Users\"", new UserMapper());
    }

    public class UserMapper implements RowMapper<User>{
        public User mapRow(ResultSet resultSet, int i)throws SQLException {
            User toReturn = new User();
            toReturn.setUserId(resultSet.getInt("id"));
            toReturn.setFirstName(resultSet.getString("firstName"));
            toReturn.setLastName(resultSet.getString("lastName"));
            return toReturn;
        }
    }

    @Override
    public List<Entry> getAllEntriesForUser() {
        return null;
    }

    @Override
    public List<Goal> getAllGoalsForUser() {
        return null;
    }

    @Override
    public User addUser(User toAdd) {
        return null;
    }

    @Override
    public Entry addEntry(Entry toAdd) {
        return null;
    }

    @Override
    public Goal addGoal(Goal toAdd) {
        return null;
    }

    @Override
    public Entry getEntryById(Integer id) {
        return null;
    }

    @Override
    public Entry getEntryByEntryId(Integer id) {
        return null;
    }
}
