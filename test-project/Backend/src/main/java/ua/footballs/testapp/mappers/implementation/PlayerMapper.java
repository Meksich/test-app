package ua.footballs.testapp.mappers.implementation;

import org.springframework.stereotype.Component;
import ua.footballs.testapp.DTOs.PlayerDTO;
import ua.footballs.testapp.entities.Player;
import ua.footballs.testapp.mappers.AbstractMapper;

@Component
public class PlayerMapper implements AbstractMapper<Player, PlayerDTO> {
    @Override
    public PlayerDTO map(Player player) {
        PlayerDTO.PlayerDTOBuilder playerDTOBuilder = PlayerDTO.builder();
        playerDTOBuilder.id(player.getId());
        playerDTOBuilder.name(player.getName());
        playerDTOBuilder.surname(player.getSurname());
        playerDTOBuilder.phoneNumber(player.getPhoneNumber());
        playerDTOBuilder.careerStartDate(player.getCareerStartDate());
        playerDTOBuilder.birthDate(player.getBirthDate());
        playerDTOBuilder.transferCost(player.getTransferCost());
        playerDTOBuilder.teamName(player.getTeam().getName());
        return playerDTOBuilder.build();
    }
}
