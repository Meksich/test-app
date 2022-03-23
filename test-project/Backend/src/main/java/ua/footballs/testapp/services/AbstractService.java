package ua.footballs.testapp.services;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public abstract class AbstractService<Entity> {
    public abstract JpaRepository<Entity, Long> getRepository();

    public List<Entity> getAll() {
        return getRepository().findAll();
    }

    public Entity get(Long id) {
        return getRepository().getOne(id);
    }

    public Entity create(Entity entity) {
        return getRepository().save(entity);
    }

    public Entity update(Long id, Entity entity) {
        if (getRepository().findById(id).isPresent()) {
            return getRepository().save(entity);
        }

        return null;
    }

    public Entity delete(Long id) {
        Entity entityToDelete = null;
        if (getRepository().findById(id).isPresent()) {
            entityToDelete = getRepository().getOne(id);
            getRepository().deleteById(id);
        }

        return entityToDelete;
    }
}