package ua.footballs.testapp.controllers.implementation;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.footballs.testapp.DTOs.PlayerDTO;
import ua.footballs.testapp.controllers.AbstractControllerImpl;
import ua.footballs.testapp.entities.Player;
import ua.footballs.testapp.mappers.AbstractMapper;
import ua.footballs.testapp.mappers.implementation.PlayerMapper;
import ua.footballs.testapp.services.AbstractService;
import ua.footballs.testapp.services.implementation.PlayerService;

@RestController
@CrossOrigin
@RequestMapping(value = "/player")
@AllArgsConstructor
public class PlayerController extends AbstractControllerImpl<Player, PlayerDTO> {
    private final PlayerService playerService;
    private final PlayerMapper playerMapper;

    @Override
    public AbstractService<Player> getService() {
        return playerService;
    }

    @Override
    public AbstractMapper<Player, PlayerDTO> getMapper() {
        return playerMapper;
    }
}
