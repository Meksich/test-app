import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransferService {

  constructor(private http: HttpClient) { }

  makeTransfer(teamId: any, playerId: any){
    return this.http.get("http://localhost:8081/transfer?teamId=" + teamId + "&playerId=" + playerId,
    {observe: 'response'});
  }
}
