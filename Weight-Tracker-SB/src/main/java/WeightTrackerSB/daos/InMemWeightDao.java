package WeightTrackerSB.daos;

import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.Goal;
import WeightTrackerSB.models.User;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Profile({"inmemtesting", "servicetesting"})
public class InMemWeightDao implements WeightTrackerDao{

    List<User> allUsers = new ArrayList<>();
    List<Entry> allEntries = new ArrayList<>();
    List<Goal> allGoals = new ArrayList<>();


    public InMemWeightDao(){
        reset();
    }

    @Override
    public void reset(){
        allUsers.clear();
        allEntries.clear();
        allGoals.clear();

        User userToAdd = new User();
        userToAdd.setUserId(1);
        userToAdd.setFirstName("Annelise");
        userToAdd.setLastName("Freshwaters");
        allUsers.add(userToAdd);

        Entry entryToAdd = new Entry();
        entryToAdd.setUserId(1); // should correspond to Matt
        entryToAdd.setEntryId(1);
        entryToAdd.setWeight(new BigDecimal("300"));
        entryToAdd.setDate(LocalDate.of(2020,1,8));

        //LocalDate date = LocalDate.of(2020, 1, 8);
        //LocalDate date = LocalDate.of(2020, Month.JANUARY, 8)
        //LocalDate date = LocalDate.ofEpochDay(18269);
        //LocalDate date = LocalDate.ofYearDay(2020, 8);

        Goal goalToAdd = new Goal();
        goalToAdd.setUserId(1);
        goalToAdd.setDate(LocalDate.of(2021,1,8));
        goalToAdd.setGoalWeight(new BigDecimal("250"));
    }

    // get all for model
    @Override
    public List<User> getAllUsers(){
        return allUsers.stream().map(toCopy -> new User(toCopy)).collect(Collectors.toList());
    }
    @Override
    public List<Entry> getAllEntriesForUser(){
        return allEntries.stream().map(toCopy -> new Entry(toCopy)).collect(Collectors.toList());
    }
    @Override
    public List<Goal> getAllGoalsForUser(){
        return allGoals.stream().map(toCopy -> new Goal(toCopy)).collect(Collectors.toList());
    }

    // add model
    @Override
    public User addUser(User toAdd){
        User copy = toAdd;
        copy.setUserId(allUsers.stream().mapToInt(g->g.getUserId()).max().orElse(0)+1);
        allUsers.add(copy);
        return new User(copy);
    }
    @Override
    public Entry addEntry(Entry toAdd){
        Entry copy = toAdd;
        copy.setUserId(allEntries.stream().mapToInt(g->g.getUserId()).max().orElse(0)+1);
        allEntries.add(copy);
        return new Entry(copy);
    }
    @Override
    public Goal addGoal(Goal toAdd){
        Goal copy = toAdd;
        copy.setUserId(allGoals.stream().mapToInt(g->g.getUserId()).max().orElse(0)+1);
        allGoals.add(copy);
        return new Goal(copy);
    }

    // get model by id
    public User getUserById(Integer id){
        User toCopy = allUsers.stream().filter( g -> g.getUserId() == id ).findAny().orElse(null);
        if( toCopy != null ) return new User(toCopy);
        return null;
    }

    @Override
    public Entry getEntryById(Integer id){

        return new Entry();
    }

    @Override
    public Entry getEntryByEntryId(Integer id){
        Entry toCopy = allEntries.stream().filter( g -> g.getEntryId() == id ).findAny().orElse(null);
        if( toCopy != null ) return new Entry(toCopy);
        return null;
    }




}
