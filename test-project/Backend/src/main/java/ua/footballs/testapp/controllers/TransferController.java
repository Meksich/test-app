package ua.footballs.testapp.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.footballs.testapp.DTOs.PlayerDTO;
import ua.footballs.testapp.exceptions.PlayerNotFoundException;
import ua.footballs.testapp.exceptions.TeamNotFoundException;
import ua.footballs.testapp.exceptions.TransactionAbortedException;
import ua.footballs.testapp.mappers.implementation.PlayerMapper;
import ua.footballs.testapp.services.TransferService;
import ua.footballs.testapp.services.implementation.PlayerService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping(value = "/transfer")
@AllArgsConstructor
public class TransferController {
    private final TransferService transferService;
    private final PlayerMapper playerMapper;
    private final PlayerService playerService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PlayerDTO> makeTransfer(@RequestParam(required = false, name = "teamId") Long teamId,
                                                  @RequestParam(required = false, name = "playerId") Long playerId) {
        String response = "";
        if (teamId == null || playerId == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            try{
                transferService.transfer(playerId, teamId);
            }
            catch (PlayerNotFoundException | TeamNotFoundException | TransactionAbortedException exception){
                exception.printStackTrace();
                response = "Transaction failed";
            }
        }
        if (response.equals("Transaction failed"))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(playerMapper.map(playerService.get(playerId)),HttpStatus.OK);
    }
}
