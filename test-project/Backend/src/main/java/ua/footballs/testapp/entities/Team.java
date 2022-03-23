package ua.footballs.testapp.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Table(name = "team")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(of = "id")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String country;
    private Integer playersNumber;
    private Date foundationDate;
    private String owner;
    private Integer budget;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private Set<Player> players;
}
