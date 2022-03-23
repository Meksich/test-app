package ua.footballs.testapp.mappers.implementation;

import org.springframework.stereotype.Component;
import ua.footballs.testapp.DTOs.TeamDTO;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.mappers.AbstractMapper;

@Component
public class TeamMapper implements AbstractMapper<Team, TeamDTO> {
    @Override
    public TeamDTO map(Team team) {
        TeamDTO.TeamDTOBuilder teamDTOBuilder = TeamDTO.builder();
        teamDTOBuilder.id(team.getId());
        teamDTOBuilder.budget(team.getBudget());
        teamDTOBuilder.country(team.getCountry());
        teamDTOBuilder.foundationDate(team.getFoundationDate());
        teamDTOBuilder.name(team.getName());
        teamDTOBuilder.owner(team.getOwner());
        teamDTOBuilder.playersNumber(team.getPlayersNumber());
        return teamDTOBuilder.build();
    }

}
