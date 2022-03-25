import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../services/team.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Team } from '../team';
import { ValidatorService } from '../services/validator.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-team',
  templateUrl: './app-show-team.component.html',
  styleUrls: ['./app-show-team.component.css', '../global-css/modals.css'],
  providers: [TeamService, ValidatorService, DatePipe]
})
export class AppShowTeamComponent implements OnInit {
  errorMessageName: string;
  errorMessageCountry: string;
  errorMessageOwner:string;
  errorMessageBudget: string;
  modalShow:boolean = false;
  team: any;
  routeParams = this.route.snapshot.paramMap;
  teamIdFromRoute = String(this.routeParams.get('teamId'));

  teamForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    owner: new FormControl(''),
    budget: new FormControl(''),
  });

  constructor(private teamService: TeamService, private route: ActivatedRoute,
    private router: Router, private datePipe: DatePipe, private validator: ValidatorService) { }

  ngOnInit() {
    this.teamService.getTeam(this.teamIdFromRoute).subscribe((data: any) =>
      this.team = data);
  }

  onDeleteClick(){
    if(this.team.playersNumber>0){
      window.alert("Sorry, you can't delete team where are more than 0 players!");
      return;
    }
    this.teamService.deleteTeam(this.teamIdFromRoute);
    this.router.navigate(['/teams']).then(() => {
      window.location.reload();
    });
  }

  onModalClick(){
    this.modalShow = !this.modalShow;
  }

  onSubmit(){
    this.validate(this.teamForm.value);
    if (this.validator.errors > 0){
      return;
    }
    let updateTeam: Team = this.team;
    updateTeam.name = this.teamForm.value.name;
    updateTeam.country = this.teamForm.value.country;
    updateTeam.owner = this.teamForm.value.owner;
    updateTeam.budget = Number(this.teamForm.value.budget);
    this.teamService.updateTeam(updateTeam, this.teamIdFromRoute);
    window.location.reload();
  }

  validate(form: any){
    this.errorMessageName = this.validator.validateName(form.name);
    this.errorMessageCountry = this.validator.validateName(form.country);
    this.errorMessageOwner = this.validator.validateName(form.owner);
    this.errorMessageBudget = this.validator.validateNumeric(form.budget);
  }
}
