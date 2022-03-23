package ua.footballs.testapp.services.implementation;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.repositories.TeamRepository;
import ua.footballs.testapp.services.AbstractService;

@Service
@AllArgsConstructor
public class TeamService extends AbstractService<Team> {
    private TeamRepository teamRepository;

    @Override
    public JpaRepository<Team, Long> getRepository(){
        return teamRepository;
    }
}
