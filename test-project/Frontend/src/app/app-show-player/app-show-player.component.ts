import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { ValidatorService } from '../services/validator.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Player } from '../player';

@Component({
  selector: 'app-show-player',
  templateUrl: './app-show-player.component.html',
  styleUrls: ['./app-show-player.component.css', '../global-css/modals.css'],
  providers: [PlayerService, TeamService, ValidatorService, DatePipe]
})
export class AppShowPlayerComponent implements OnInit {
  errorMessagePhone: string;
  errorMessageName: string;
  errorMessageSurname: string;
  errorMessageDate:string;
  errorMessageCost: string;
  teams: any;
  player:any;
  modalShow:boolean = false;
  routeParams = this.route.snapshot.paramMap;
  playerIdFromRoute = Number(this.routeParams.get('playerId'));

  playerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    phoneNumber: new FormControl(''),
    careerStartDate: new FormControl(''),
    birthDate: new FormControl(''),
    transferCost: new FormControl(''),
  });

  constructor(private playerService: PlayerService, private teamService: TeamService, private route: ActivatedRoute,
    private router: Router, private datePipe: DatePipe, private validator: ValidatorService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe((data) =>
      (this.teams = data)); 
    this.playerService.getPlayer(this.playerIdFromRoute).subscribe((data: any) =>
      this.player = data);
  }

  onDeleteClick(){
    var team = this.teams.find(team1 => team1.name == this.player.teamName);
    team.playersNumber--;
    this.teamService.updateTeam(team, team.id);
    this.playerService.deletePlayer(this.playerIdFromRoute);
    this.router.navigate(['/players']).then(() => {
      window.location.reload();
    });
  }

  onModalClick(){
    this.modalShow = !this.modalShow;
  }

  onSubmit(){
    this.validate(this.playerForm.value);
    if (this.validator.errors > 0){
      return;
    }
    let createPlayer: Player = this.player;
    createPlayer.name = this.playerForm.value.name;
    createPlayer.surname = this.playerForm.value.surname;
    createPlayer.phoneNumber = this.playerForm.value.phoneNumber;
    createPlayer.birthDate = this.playerForm.value.birthDate;
    createPlayer.transferCost = Number(this.playerForm.value.transferCost);
    this.playerService.updatePlayer(createPlayer, this.playerIdFromRoute);
    window.location.reload();
  }

  validate(form: any){
    this.errorMessagePhone = this.validator.validatePhone(form.phoneNumber);
    this.errorMessageName = this.validator.validateName(form.name);
    this.errorMessageSurname = this.validator.validateName(form.surname);
    this.errorMessageDate = this.validator.validateDate(form.birthDate);
    this.errorMessageCost = this.validator.validateNumeric(form.transferCost);
  }
}
