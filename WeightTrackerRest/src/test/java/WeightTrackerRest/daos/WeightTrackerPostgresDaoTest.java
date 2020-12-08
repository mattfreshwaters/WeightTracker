package WeightTrackerRest.daos;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class WeightTrackerPostgresDaoTest {

    @Autowired
    EntryRepository entryRepo;


    @BeforeEach
    void setup(){
        //entryRepo.reset();
    }

//    @Test
//    public void whenFindByUserId_ReturnUsername{
//
//    }
}
