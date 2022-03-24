import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-app-transfer',
  templateUrl: './app-transfer.component.html',
  styleUrls: ['./app-transfer.component.css'],
  providers: [PlayerService, TeamService]
})
export class AppTransferComponent implements OnInit{

  teams:any;
  players:Player[];

  pay: number = 0;

  player: any;
  team: any;

  selectedPlayer: number = 1;
  selectedTeam: number = 1;
  
  playerPresent = false;
  teamPresent = false;

  constructor(private teamService: TeamService, private playerService: PlayerService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => this.teams = data);
    this.playerService.getPlayers().subscribe(data => this.players = data);
  }

  selectChangePlayerHandler (event: any) {
    this.selectedPlayer = event.target.value;
  }

  selectChangeTeamHandler (event: any) {
    this.selectedTeam = event.target.value;
    this.teamPresent = !this.teamPresent;
    this.team = this.teams[this.selectedTeam-1];
    this.pay = Math.round(1.1*(this.player.transferCost));
  }

  startTransfer() {
    this.playerPresent = !this.playerPresent;
    this.player = this.players[this.selectedPlayer-1];
  }

  makeTransfer() {
    if(!this.playerPresent || !this.teamPresent){
      window.alert("Player or team are invalid! Please choose both team and player.")
    }
  }
}
