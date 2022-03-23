package ua.footballs.testapp.mappers;

public interface AbstractMapper<Entity, DTO> {
    DTO map(Entity entity);
}
