package ua.footballs.testapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.footballs.testapp.entities.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
}
