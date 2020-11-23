package WeightTrackerSB.controllers;

import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.User;
import WeightTrackerSB.services.WeightTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class WeightTrackerController {

    @Autowired
    WeightTrackerService service;

    @GetMapping("/users")
        public List<User> getUsers(){
            return service.getUsers();
    }

    @GetMapping("/getUserEntries")
    public List<Entry> getUserEntries(){
        return service.getEntries();
    }

    @GetMapping("/getUserEntry/{id}")
    public Entry getEntryById(@PathVariable Integer id){return service.getEntryById(id);}

    @PostMapping("/addUser")
    public Integer addUser(){
        return service.addUser();
    }

    // display home page / login page?
    // add user (eventually)
    // get different Angular components

}
