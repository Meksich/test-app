import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-app-transfer',
  templateUrl: './app-transfer.component.html',
  styleUrls: ['./app-transfer.component.css'],
  providers: [PlayerService, TeamService, TransferService]
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

  response: any;
  constructor(private router: Router, private teamService: TeamService, 
              private playerService: PlayerService, private transferService: TransferService) { }

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
    this.team = this.teams.find(team1 => team1.id == this.selectedTeam);;
    this.pay = Math.round(1.1*(this.player.transferCost));
  }

  startTransfer() {
    this.playerPresent = !this.playerPresent;
    this.player = this.players.find(player1 => player1.id == this.selectedPlayer);
  }

  makeTransfer() {
    if(!this.playerPresent || !this.teamPresent){
      window.alert("Player or team are invalid! Please choose both team and player.")
    }
    var name = this.team.name;
    this.transferService.makeTransfer(this.team.id, this.player.id)
      .subscribe(response => this.response=response);
    if(name != this.player.teamName)
      window.alert("Success!");
    else
    window.alert("Transfer failed.");
  }
}
