package ua.footballs.testapp.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlayerDTO {
    private Long id;
    private String name;
    private String surname;
    private String phoneNumber;
    private Date careerStartDate;
    private Date birthDate;
    private Integer transferCost;
    private String teamName;
}
