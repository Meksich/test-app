import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './app-show-team.component.html',
  styleUrls: ['./app-show-team.component.css'],
  providers: [TeamService]
})
export class AppShowTeamComponent implements OnInit {
  team: any;
  routeParams = this.route.snapshot.paramMap;
  teamIdFromRoute = String(this.routeParams.get('teamId'));

  constructor(private teamService: TeamService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    this.teamService.getTeam(this.teamIdFromRoute).subscribe((data: any) =>
      this.team = data);
  }

  onDeleteClick(){
    if(this.team.playersNumber>0){
      window.alert("Sorry, you can't delete team where are more than 0 players!");
      return;
    }
    this.teamService.deleteTeam(this.teamIdFromRoute).subscribe();
    this.router.navigate(['/teams']);
  }
}
