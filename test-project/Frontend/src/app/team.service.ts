import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(teamName?: string){
    let query = "";
    if (teamName!=undefined){
      query = "?name=" + teamName;
    }
    return this.http.get("http://localhost:8081/teams" + query);
  }

  getTeam(id: any){
    return this.http.get("http://localhost:8081/teams/" + id);
  }

  postTeam(team: Team){
    const body = {
      name: team.name,
      country: team.country,
      playersNumber: team.playersNumber,
      foundationDate: team.foundationDate,
      owner: team.owner,
      budget: team.budget
    }
    this.http.post("http://localhost:8081/teams", JSON.stringify(body), {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe();
  }
}
