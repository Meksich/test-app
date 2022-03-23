package ua.footballs.testapp.controllers.implementation;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.footballs.testapp.DTOs.TeamDTO;
import ua.footballs.testapp.controllers.AbstractControllerImpl;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.mappers.AbstractMapper;
import ua.footballs.testapp.mappers.implementation.TeamMapper;
import ua.footballs.testapp.services.AbstractService;
import ua.footballs.testapp.services.implementation.TeamService;

@RestController
@CrossOrigin
@RequestMapping(value = "/team")
@AllArgsConstructor
public class TeamController extends AbstractControllerImpl<Team, TeamDTO> {
    private final  TeamService teamService;
    private final  TeamMapper teamMapper;

    @Override
    public AbstractService<Team> getService() {
        return teamService;
    }

    @Override
    public AbstractMapper<Team, TeamDTO> getMapper() {
        return teamMapper;
    }
}
