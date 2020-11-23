package WeightTrackerSB.services;

import WeightTrackerSB.daos.WeightTrackerDao;
import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.Goal;
import WeightTrackerSB.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeightTrackerService {

    WeightTrackerDao dao;

    @Autowired
    public WeightTrackerService(WeightTrackerDao dao){
        this.dao = dao;
    }

    public Integer addUser(){
        throw new UnsupportedOperationException();
    }

    public List<Entry> getEntries(){
        List<Entry> allEntries = dao.getAllEntriesForUser();
        return allEntries;
    }

    public Entry getEntryById(Integer id){
        return dao.getEntryById(id);
    }

    public List<Goal> getGoals(){
        List<Goal> allGoals = dao.getAllGoalsForUser();
        return allGoals;
    }

    public List<User> getUsers(){
        List<User> allUsers = dao.getAllUsers();
        return allUsers;
    }


}
