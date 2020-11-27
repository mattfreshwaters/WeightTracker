package WeightTrackerRest.daos;

import WeightTrackerRest.models.Entry;
import WeightTrackerRest.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Integer> {

    List<Entry> findByUserId(Integer userId);
    Entry getByEntryId(Integer entryId);

}
