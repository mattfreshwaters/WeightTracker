package WeightTrackerRest.services;

import WeightTrackerRest.daos.EntryRepository;
import WeightTrackerRest.daos.UserRepository;
import WeightTrackerRest.exceptions.InvalidRequestException;
import WeightTrackerRest.models.Entry;
import WeightTrackerRest.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class entryService {

    @Autowired
    EntryRepository repo;

    @Autowired
    UserRepository userRepo;

    public List<Entry> getAllEntries(String username){
        User currentUser = userRepo.findByUsername(username).get();
        // theoretically could throw an error but would be super weird/rare (i.e. login and then username not found)
        Integer userId = currentUser.getId();
        return repo.findByUserId(userId);
    }

    public Entry getEntryByIdFor(Integer entryId, String username) throws InvalidRequestException {
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        if(repo.findById(entryId).get().getUserId() != userId){
            throw new InvalidRequestException("No corresponding for user " + currentUser.getUsername());
        }

        return repo.findById(entryId).get();
    }

    public Entry addEntry(Entry toAdd, String username) throws InvalidRequestException {
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        if(toAdd.getUserId() != userId){throw new InvalidRequestException("Tried adding an entry for another user");}
        return repo.saveAndFlush(toAdd);
    }

    public Entry editEntry( Entry edited, String username) throws InvalidRequestException {
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();

        if(edited.getUserId()!=userId){throw new InvalidRequestException("Tried editing an entry for alternate user");}
        return repo.saveAndFlush(edited);
    }

    public void deleteEntry(Integer entryId, String username) throws InvalidRequestException {
        User currentUser = userRepo.findByUsername(username).get();
        Integer userId = currentUser.getId();
        Entry temp = repo.findById(entryId).get();
        System.out.println(temp);
        if(temp.getUserId() != userId){throw new InvalidRequestException("Tried removing an entry that doesn't exist for user: " + username);}
        repo.deleteById(entryId);
    }
}