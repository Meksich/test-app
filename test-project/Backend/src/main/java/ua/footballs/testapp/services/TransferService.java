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
import ua.footballs.testapp.services.implementation.PlayerService;
import ua.footballs.testapp.services.implementation.TeamService;

import java.sql.SQLException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class TransferService {
    private PlayerService playerService;
    private TeamService teamService;

    @Transactional(rollbackFor = Exception.class)
    public void transfer(Long playerId, Long teamId) throws PlayerNotFoundException, TeamNotFoundException, TransactionAbortedException {
        Team team = teamService.get(teamId);
        Player player = playerService.get(playerId);
        Team previousTeam = player.getTeam();
        if (Objects.equals(team.getId(), previousTeam.getId()))
            throw new TransactionAbortedException("Teams must differ");

        player.setTeam(team);
        playerService.update(playerId, player);

        team.setPlayersNumber(team.getPlayersNumber() + 1);
        previousTeam.setPlayersNumber(previousTeam.getPlayersNumber() - 1);

        Integer pay = Math.toIntExact(Math.round(1.1 * player.getTransferCost()));
        team.setBudget(team.getBudget() - pay);
        if (team.getBudget() < 0)
            throw new TransactionAbortedException("Team budget is to low");
        teamService.update(team.getId(), team);
        previousTeam.setBudget(previousTeam.getBudget() + player.getTransferCost());
        teamService.update(previousTeam.getId(), previousTeam);
    }
}
