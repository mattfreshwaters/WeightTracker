package WeightTrackerSB.daos;


import WeightTrackerSB.models.User;
import WeightTrackerSB.models.Entry;
import WeightTrackerSB.models.Goal;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("inmemtesting")
public class InMemDaoWeightTest {

    @Autowired
        InMemWeightDao daoToTest;

    @BeforeEach
    void setUp(){
        daoToTest.reset();
    }

    @Test
    void getAllUsers(){
        List<User> allUsers = daoToTest.getAllUsers();
        assertEquals(1, allUsers.size());

        User userToAdd = new User();
        userToAdd.setUserId(2);
        userToAdd.setFirstName("Matt");
        userToAdd.setLastName("Freshwaters");
        allUsers.add(userToAdd);

        assertEquals(2, allUsers.size());
        assertEquals(1, allUsers.get(0).getUserId());
        assertEquals("Annelise", allUsers.get(0).getFirstName());
        assertEquals("Freshwaters", allUsers.get(0).getLastName());


    }


}
