import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { RouterModule } from '@angular/router';
import { AppTeamsComponent } from './app-teams/app-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppPlayersComponent } from './app-players/app-players.component';
import { AppShowPlayerComponent } from './app-show-player/app-show-player.component';
import { AppTransferComponent } from './app-transfer/app-transfer.component';
import { AppShowTeamComponent } from './app-show-team/app-show-team.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalPlayerComponent } from './modal-player/modal-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppTeamsComponent,
    AppPlayersComponent,
    AppShowPlayerComponent,
    AppTransferComponent,
    AppShowTeamComponent,
    ModalPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: AppMainComponent},
      {path: 'teams', component: AppTeamsComponent},
      {path: 'players', component: AppPlayersComponent},
      {path: 'player/:playerId', component: AppShowPlayerComponent},
      {path: 'team/:teamId', component: AppShowTeamComponent},
      {path: 'transfer', component: AppTransferComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
