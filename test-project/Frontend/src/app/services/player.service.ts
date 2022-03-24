import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>("http://localhost:8081/players");
  }

  getPlayer(id: any){
    return this.http.get("http://localhost:8081/players/" + id);
  }

  postPlayer(player: Player, id: number){
    const body = {
      "name": player.name,
      "surname": player.surname,
      "phoneNumber": player.phoneNumber,
      "careerStartDate": player.careerStartDate,
      "birthDate": player.birthDate,
      "transferCost": player.transferCost,
      "team":{
        "id": id
      }
    };
    this.http.post("http://localhost:8081/players", JSON.stringify(body), {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe();
  }

}
