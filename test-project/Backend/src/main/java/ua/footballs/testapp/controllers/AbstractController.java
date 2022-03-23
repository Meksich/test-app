package ua.footballs.testapp.controllers;

import org.springframework.http.ResponseEntity;
import ua.footballs.testapp.mappers.AbstractMapper;
import ua.footballs.testapp.services.AbstractService;

import java.util.List;

public interface AbstractController<Entity, DTO> {
    AbstractService<Entity> getService();
    AbstractMapper<Entity, DTO> getMapper();

    ResponseEntity<List<DTO>> getAll();
    ResponseEntity<DTO> get(Long id);
    ResponseEntity<DTO> update(Long id, Entity entity);
    ResponseEntity<DTO> delete(Long id);
    ResponseEntity<DTO> create(Entity entity);
}
