import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './app-players.component.html',
  styleUrls: ['./app-players.component.css']
})
export class AppPlayersComponent {

  players = [
    {
      id: 1,
      name: "Delta",
      surname: "Lima",
      team: "alpha",
      transfer_cost: 500,
      phone: "0963611949"
    },
    {
      id: 2,
      name: "Foxtrot",
      surname: "Oscar",
      team: "bravo",
      transfer_cost: 1000,
      phone: "0666789339"
    },
    {
      id: 3,
      name: "Echo",
      surname: "Mike",
      team: "charlie",
      transfer_cost: 12000,
      phone: "0666789876"
    }
  ]

  constructor(private router: Router) { }

  onPlayersButtonClick(id: number){
    this.router.navigate(['/player', id]);
  }

}
