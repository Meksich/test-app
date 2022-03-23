package ua.footballs.testapp.services.implementation;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ua.footballs.testapp.entities.Player;
import ua.footballs.testapp.repositories.PlayerRepository;
import ua.footballs.testapp.services.AbstractService;

@Service
@AllArgsConstructor
public class PlayerService extends AbstractService<Player> {
    private PlayerRepository playerRepository;

    @Override
    public JpaRepository<Player, Long> getRepository() {
        return playerRepository;
    }
}
