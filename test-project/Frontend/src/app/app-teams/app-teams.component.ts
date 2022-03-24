import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './app-teams.component.html',
  styleUrls: ['./app-teams.component.css', '../global-css/modals.css'],
  providers: [TeamService, DatePipe]
})
export class AppTeamsComponent implements OnInit{
  modalShow:boolean = false;

  teamForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    owner: new FormControl(''),
    budget: new FormControl(''),
  });

  teams: any;

  constructor(private router: Router, private service: TeamService, private datePipe: DatePipe) { }

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
    let createTeam: Team = this.teamForm.value;
    let currentDate = new Date();
    createTeam.foundationDate = this.datePipe.transform(currentDate,'yyyy-MM-dd');
    createTeam.playersNumber = 0;
    createTeam.budget = Number(this.teamForm.value.budget);
    this.service.postTeam(createTeam);
    window.location.reload();
  }
}
