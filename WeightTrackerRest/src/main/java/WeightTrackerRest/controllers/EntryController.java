package WeightTrackerRest.controllers;
import WeightTrackerRest.daos.EntryRepository;
import WeightTrackerRest.exceptions.InvalidRequestException;
import WeightTrackerRest.models.Entry;
import WeightTrackerRest.services.entryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/entryData")
public class EntryController {

    @Autowired
    EntryRepository entryRepo;

    @Autowired
    entryService service;

    @GetMapping("/")
    public List<Entry> getAllEntries(Principal principal){
        return service.getAllEntries("mfreshy");   // hard coded for now until we get login finished
        //return service.getAllEntries(principal.getName());
    }

    @GetMapping("/{id}")
    public Entry getEntryById(@PathVariable Integer id, Principal principal) throws InvalidRequestException {
        return service.getEntryByIdFor(id,"mfreshy");
    }

    @PostMapping("/")
    public Entry addEntry(@RequestBody Entry toAdd, Principal principal) throws InvalidRequestException {
        return service.addEntry(toAdd, "mfreshy"/*principal.getName()*/);
    }

    @PutMapping("/")
    public Entry editEntry(@RequestBody Entry edited, Principal principal) throws InvalidRequestException {
        return service.editEntry(edited, "mfreshy" /*principal.getName()*/);
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id, Principal principal) throws InvalidRequestException {
        service.deleteEntry(id, "mfreshy" /*principal.getName()*/);
    }
}
