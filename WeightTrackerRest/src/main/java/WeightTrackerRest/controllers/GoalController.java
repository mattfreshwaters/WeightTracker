package WeightTrackerRest.controllers;

import WeightTrackerRest.daos.GoalRepository;
import WeightTrackerRest.models.Goal;
import WeightTrackerRest.services.goalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/goalData")
public class GoalController {

    @Autowired
    goalService service;

    @GetMapping("/")
    public List<Goal> getAllGoals(Principal principal){
        return service.getAllGoals("mfreshy");
    }

    @GetMapping("/{id}")
    public Goal getGoalById(@PathVariable Integer id, Principal principal){
        return service.getGoalById(id, "mfreshy"/*principal.getName()*/);
    }

    @PostMapping("/")
    public Goal addGoal(@RequestBody Goal toAdd, Principal principal){
        return service.addGoal(toAdd, "mfreshy"/*principal.getName()*/);
    }

    @PutMapping("/")
    public Goal editGoal(@RequestBody Goal edited, Principal principal){
        return service.editGoal(edited, "mfreshy"/*principal.getName()*/);
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id, Principal principal){

        service.deleteGoal(id, "mfreshy"/*principal.getName()*/);
    }
}
