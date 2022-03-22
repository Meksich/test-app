import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './app-teams.component.html',
  styleUrls: ['./app-teams.component.css']
})
export class AppTeamsComponent {

  teams = [
    {
      id: 1,
      name: "alpha",
      budget: 500,
      players: 12,
      date: "19.05.1999"
    },
    {
      id: 2,
      name: "bravo",
      budget: 500,
      players: 12,
      date: "19.05.1999"
    },
    {
      id: 3,
      name: "vickey",
      budget: 500,
      players: 12,
      date: "19.05.1999"
    }
  ]

  constructor(private router: Router) { }

  onTeamsButtonClick(id: number){
    this.router.navigate(['/team', id]);
  }

}
