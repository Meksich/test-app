import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Player } from '../player';
import { TeamService } from '../services/team.service';
import { DatePipe } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-modal-player',
  templateUrl: './modal-player.component.html',
  styleUrls: ['./modal-player.component.css', '../global-css/modals.css'],
  providers: [TeamService, PlayerService, ValidatorService, DatePipe]
})
export class ModalPlayerComponent implements OnInit {
  errorMessagePhone: string;
  errorMessageName: string;
  errorMessageSurname: string;
  errorMessageDate:string;
  errorMessageCost: string;
  teams: any;
  modalShow:boolean;

  constructor(private teamService: TeamService, private playerService: PlayerService,
    private datePipe: DatePipe, private validator: ValidatorService) { }

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
    this.validate(this.playerForm.value);
    if (this.validator.errors > 0){
      return;
    }
    let createPlayer: Player = this.playerForm.value;
    let currentDate = new Date();
    createPlayer.careerStartDate = this.datePipe.transform(currentDate,'yyyy-MM-dd');
    createPlayer.transferCost = Number(this.playerForm.value.transferCost);
    var team = this.teams.find(team1 => team1.name == this.playerForm.value.teamName);
    this.playerService.postPlayer(createPlayer, team.id);
    // team.playersNumber++;
    // this.teamService.putTeam(team);
    window.location.reload();
  }

  onModalClick(){
    window.location.reload();
  }

  validate(form: any){
    this.errorMessagePhone = this.validator.validatePhone(form.phone);
    this.errorMessageName = this.validator.validateName(form.name);
    this.errorMessageSurname = this.validator.validateName(form.surname);
    this.errorMessageDate = this.validator.validateDate(form.birthDate);
    this.errorMessageCost = this.validator.validateNumeric(form.transferCost);
  }
}
