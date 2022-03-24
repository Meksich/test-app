import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../services/player.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-players',
  templateUrl: './app-players.component.html',
  styleUrls: ['./app-players.component.css', '../global-css/modals.css'],
  providers: [PlayerService, DatePipe]
})
export class AppPlayersComponent implements OnInit{
  modalShow:boolean = false;
  players: Player[];

  constructor(private router: Router, private service: PlayerService) { }

  ngOnInit() {
    this.service.getPlayers().subscribe(data => this.players = data);
  }

  onPlayersButtonClick(id: number){
    this.router.navigate(['/player', id]);
  }

  onModalClick(){
    this.modalShow = !this.modalShow;
  }

}
