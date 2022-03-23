package ua.footballs.testapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.footballs.testapp.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
}
