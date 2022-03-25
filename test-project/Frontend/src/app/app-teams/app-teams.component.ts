import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../services/team.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-teams',
  templateUrl: './app-teams.component.html',
  styleUrls: ['./app-teams.component.css', '../global-css/modals.css'],
  providers: [TeamService, ValidatorService, DatePipe]
})
export class AppTeamsComponent implements OnInit{
  errorMessageName: string;
  errorMessageCountry: string;
  errorMessageOwner:string;
  errorMessageBudget: string;
  modalShow:boolean = false;

  teamForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    owner: new FormControl(''),
    budget: new FormControl(''),
  });

  teams: any;

  constructor(private router: Router, private service: TeamService, 
              private datePipe: DatePipe, private validator: ValidatorService) { }

  ngOnInit() {
    this.service.getTeams().subscribe(data =>
      this.teams = data);
  }

  onTeamsButtonClick(id: number){
    this.router.navigate(['/team', id]);
  }

  onModalClick(){
    this.modalShow = !this.modalShow;
  }

  onSubmit(){
    this.validate(this.teamForm.value);
    if (this.validator.errors > 0){
      return;
    }
    let createTeam: Team = this.teamForm.value;
    let currentDate = new Date();
    createTeam.foundationDate = this.datePipe.transform(currentDate,'yyyy-MM-dd');
    createTeam.playersNumber = 0;
    createTeam.budget = Number(this.teamForm.value.budget);
    this.service.postTeam(createTeam);
    window.location.reload();
  }

  validate(form: any){
    this.validator.errors = 0;
    this.errorMessageName = this.validator.validateName(form.name);
    this.errorMessageCountry = this.validator.validateName(form.country);
    this.errorMessageOwner = this.validator.validateName(form.owner);
    this.errorMessageBudget = this.validator.validateNumeric(form.budget);
  }
}
