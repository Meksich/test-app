package ua.footballs.testapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import ua.footballs.testapp.entities.Player;
import ua.footballs.testapp.entities.Team;
import ua.footballs.testapp.repositories.PlayerRepository;
import ua.footballs.testapp.repositories.TeamRepository;

import java.sql.Date;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class TestAppApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext configurableApplicationContext =
		SpringApplication.run(TestAppApplication.class, args);

		TeamRepository teamRepository = configurableApplicationContext.getBean(TeamRepository.class);
		PlayerRepository playerRepository = configurableApplicationContext.getBean(PlayerRepository.class);

		Team team1 = new Team();
		setTeam(team1, "Alpha", "Germany", 3, new Date(100, 5, 4),
				"Bravo Mike", 800000);
		teamRepository.save(team1);
		Team team2 = new Team();
		setTeam(team2, "Bravo","Ukraine", 3, new Date(85, 12, 3),
				"Kilo Oscar", 150000);
		teamRepository.save(team2);
		Team team3 = new Team();
		setTeam(team3, "Charlie","Svinogorie", 3, new Date(101, 3, 10),
				"Yankee India", 16000);
		teamRepository.save(team3);
		Team team4 = new Team();
		setTeam(team4, "Delta","Poland", 3, new Date(110, 1, 2),
				"Echo Juliet", 455020);
		teamRepository.save(team4);

		Player player1 = new Player();
		setPlayer(player1, "Zulu", "Victor", "0963611949", new Date(110, 5, 17),
				new Date(91, 10, 29), 50, team1);
		playerRepository.save(player1);
		Player player2  = new Player();
		setPlayer(player2, "Foxtrot", "Oscar", "0963611949", new Date(117, 2, 17),
				new Date(103, 9, 9), 100, team1);
		playerRepository.save(player2);
		Player player3 = new Player();
		setPlayer(player3, "Alpha", "Romeo", "0963611949", new Date(101, 6, 7),
				new Date(84, 8, 2), 150, team1);
		playerRepository.save(player3);
		Player player4 = new Player();
		setPlayer(player4, "Whiskey", "Hotel", "0963611949", new Date(122, 2, 24),
				new Date(103, 10, 29), 200, team2);
		playerRepository.save(player4);
		Player player5 = new Player();
		setPlayer(player5, "Tango", "Sierra", "0963611949", new Date(118, 5, 17),
				new Date(101, 1, 13), 250, team2);
		playerRepository.save(player5);
		Player player6 = new Player();
		setPlayer(player6, "Golf", "Lima", "0963611949", new Date(114, 3, 11),
				new Date(96, 12, 17), 300, team2);
		playerRepository.save(player6);
		Player player7 = new Player();
		setPlayer(player7, "November", "Uniform", "0963611949", new Date(117, 8, 21),
				new Date(98, 2, 1), 350, team3);
		playerRepository.save(player7);
		Player player8 = new Player();
		setPlayer(player8, "Papa", "Xray", "0963611949", new Date(108, 7, 17),
				new Date(90, 1, 27), 400, team3);
		playerRepository.save(player8);
		Player player9 = new Player();
		setPlayer(player9, "Delta", "Quebec", "0963611949", new Date(121, 7, 1),
				new Date(102, 9, 29), 450, team3);
		playerRepository.save(player9);
		Player player10 = new Player();
		setPlayer(player10, "Foxtrot", "Lima", "0963611949", new Date(121, 5, 7),
				new Date(104, 11, 16), 500, team4);
		playerRepository.save(player10);
		Player player11 = new Player();
		setPlayer(player11, "Whiskey", "Sierra", "0963611949", new Date(112, 5, 24),
				new Date(97, 4, 9), 550, team4);
		playerRepository.save(player11);
		Player player12 = new Player();
		setPlayer(player12, "Zulu", "Uniform", "0963611949", new Date(111, 6, 18),
				new Date(91, 6, 30), 600, team4);
		playerRepository.save(player12);
	}

	public static void setTeam(Team team, String name, String country, Integer playersNumber, Date foundationDate,
							   String owner, Integer budget){
		team.setName(name);
		team.setCountry(country);
		team.setPlayersNumber(playersNumber);
		team.setFoundationDate(foundationDate);
		team.setOwner(owner);
		team.setBudget(budget);
	}

	public static void setPlayer(Player player, String name, String surname, String phoneNumber, Date careerStartDate,
								 Date birthDate, Integer transferCost, Team team){
		player.setName(name);
		player.setSurname(surname);
		player.setPhoneNumber(phoneNumber);
		player.setCareerStartDate(careerStartDate);
		player.setBirthDate(birthDate);
		player.setTransferCost(transferCost);
		player.setTeam(team);
	}

}
