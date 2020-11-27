package WeightTrackerRest.services;

import WeightTrackerRest.daos.GoalRepository;
import WeightTrackerRest.daos.UserRepository;
import WeightTrackerRest.models.Goal;
import WeightTrackerRest.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class goalService {

    @Autowired
    GoalRepository repo;

    @Autowired
    UserRepository userRepo;

    // Get all goals for the user that is logged in
    public List<Goal> getAllGoals(String username){
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        return repo.findByUserId(userId);
    }

    // Get specific goal entry.  The userId for the entry MUST match the current user or an error is thrown.
    public Goal getGoalById(Integer goalId, String username){
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        if(repo.findById(goalId).get().getUserId() != userId){
            throw new UnsupportedOperationException("Goal Id does not exist for user");
        }

        return repo.findById(goalId).get();

    }

    public Goal addGoal(Goal toAdd, String username){
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        return repo.saveAndFlush(toAdd);
    }

    public Goal editGoal(Goal edited, String username){
        return repo.saveAndFlush(edited);
    }

    public void deleteGoal(Integer id, String username){
        repo.deleteById(id);
    }
}
