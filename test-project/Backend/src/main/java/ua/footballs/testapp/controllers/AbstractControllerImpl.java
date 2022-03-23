package ua.footballs.testapp.controllers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractControllerImpl<Entity, DTO> implements AbstractController<Entity, DTO>{

    @GetMapping
    @Override
    public ResponseEntity<List<DTO>> getAll() {
        List<DTO> dtoList = getService().getAll().stream().map(entity -> getMapper().map(entity)).collect(Collectors.toList());
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    @Override
    public ResponseEntity<DTO> get(@PathVariable Long id) {
        return new ResponseEntity<>(getMapper().map(getService().get(id)), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @Override
    public ResponseEntity<DTO> delete(@PathVariable Long id) {
        return new ResponseEntity<>(getMapper().map(getService().delete(id)), HttpStatus.OK);
    }

    @PostMapping
    @Override
    public ResponseEntity<DTO> create(@RequestBody Entity entity) {
        System.out.println(entity);
        return new ResponseEntity<>(getMapper().map(getService().create(entity)), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    @Override
    public ResponseEntity<DTO> update(@PathVariable Long id, @RequestBody Entity entity) {
        return new ResponseEntity<>(getMapper().map(getService().update(id, entity)), HttpStatus.OK);
    }
}
