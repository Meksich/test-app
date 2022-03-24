import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Player } from '../player';
import { TeamService } from '../team.service';
import { DatePipe } from '@angular/common';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-modal-player',
  templateUrl: './modal-player.component.html',
  styleUrls: ['./modal-player.component.css', '../global-css/modals.css'],
  providers: [TeamService, PlayerService, DatePipe]
})
export class ModalPlayerComponent implements OnInit {
  teams: any;
  modalShow:boolean;

  constructor(private teamService: TeamService, private playerService: PlayerService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe((data) =>
      (this.teams = data));
  }

  playerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    phoneNumber: new FormControl(''),
    careerStartDate: new FormControl(''),
    birthDate: new FormControl(''),
    transferCost: new FormControl(''),
    teamName: new FormControl(''),
  });

  onSubmit(){
    let createPlayer: Player = this.playerForm.value;
    let currentDate = new Date();
    createPlayer.careerStartDate = this.datePipe.transform(currentDate,'yyyy-MM-dd');
    createPlayer.transferCost = Number(this.playerForm.value.transferCost);
    var team = this.teams.find(team1 => team1.name == this.playerForm.value.teamName);
    this.playerService.postPlayer(createPlayer, team.id);
    team.playersNumber++;
    // this.teamService.putTeam(team);
    window.location.reload();
  }

  onModalClick(){
    window.location.reload();
  }
}
