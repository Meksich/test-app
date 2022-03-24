package ua.footballs.testapp.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.footballs.testapp.DTOs.TeamDTO;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.mappers.implementation.TeamMapper;
import ua.footballs.testapp.services.implementation.TeamService;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping(value = "/teams")
@AllArgsConstructor
public class TeamController {
    private final  TeamService teamService;
    private final  TeamMapper teamMapper;

    @GetMapping
    public ResponseEntity<List<TeamDTO>> getAll(@RequestParam(required = false, name = "name") String teamName) {
        List<TeamDTO> dtoList;
        if (teamName != null) {
            dtoList = filter(teamService.getAll().stream().map(teamMapper::map).collect(Collectors.toList()),
                    teamName);
        } else {
            dtoList = teamService.getAll().stream().map(teamMapper::map).collect(Collectors.toList());
        }
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<TeamDTO> get(@PathVariable Long id) {
        return new ResponseEntity<>(teamMapper.map(teamService.get(id)), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<TeamDTO> delete(@PathVariable Long id) {
        return new ResponseEntity<>(teamMapper.map(teamService.delete(id)), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TeamDTO> create(@RequestBody Team team) {
        return new ResponseEntity<>(teamMapper.map(teamService.create(team)), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<TeamDTO> update(@PathVariable Long id, @RequestBody Team team) {
        return new ResponseEntity<>(teamMapper.map(teamService.update(id, team)), HttpStatus.OK);
    }

    private List<TeamDTO> filter(List<TeamDTO> teamDTOList, String name){
        return teamDTOList.stream().filter(dto -> dto.getName().equals(name))
                .collect(Collectors.toCollection(LinkedList::new));
    }
}
