package WeightTrackerRest.controllers;

import WeightTrackerRest.daos.UserRepository;
import WeightTrackerRest.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/userdata")
public class UserDataController {

    @Autowired
    UserRepository userRepo;

    @GetMapping("/")
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id){
        return userRepo.getOne(id);
    }

    @PostMapping("/")
    public User addUser(@RequestBody User toAdd){
        return userRepo.saveAndFlush(toAdd);
    }

    @PutMapping("/")
    public User editUser(@RequestBody User edited){
        return userRepo.saveAndFlush(edited);
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id){
        userRepo.deleteById(id);
    }
}
