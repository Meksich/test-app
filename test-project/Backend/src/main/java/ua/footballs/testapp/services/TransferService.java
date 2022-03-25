package ua.footballs.testapp.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.footballs.testapp.entities.Player;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.exceptions.PlayerNotFoundException;
import ua.footballs.testapp.exceptions.TeamNotFoundException;
import ua.footballs.testapp.exceptions.TransactionAbortedException;
import ua.footballs.testapp.repositories.PlayerRepository;
import ua.footballs.testapp.repositories.TeamRepository;

import java.sql.SQLException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class TransferService {
    private PlayerRepository playerRepository;
    private TeamRepository teamRepository;

    @Transactional(rollbackFor = Exception.class)
    public void transfer(Long playerId, Long teamId) throws PlayerNotFoundException, TeamNotFoundException, TransactionAbortedException {
        if (!playerRepository.existsById(playerId))
            throw new PlayerNotFoundException("Player with id "+ playerId +" doesn't exist");
        else if (!teamRepository.existsById(teamId))
            throw new TeamNotFoundException("Team with id "+ teamId +" doesn't exist");
        Team team = teamRepository.getById(teamId);
        Player player = playerRepository.getById(playerId);
        Team previousTeam = player.getTeam();
        if (Objects.equals(team.getId(), previousTeam.getId()))
            throw new TransactionAbortedException("Teams must differ");

        player.setTeam(team);
        playerRepository.save(player);

        team.setPlayersNumber(team.getPlayersNumber() + 1);
        previousTeam.setPlayersNumber(previousTeam.getPlayersNumber() - 1);

        Integer pay = Math.toIntExact(Math.round(1.1 * player.getTransferCost()));
        team.setBudget(team.getBudget() - pay);
        if (team.getBudget() < 0)
            throw new TransactionAbortedException("Team budget is to low");
        teamRepository.save(team);
        previousTeam.setBudget(previousTeam.getBudget() + player.getTransferCost());
        teamRepository.save(previousTeam);
    }
}
