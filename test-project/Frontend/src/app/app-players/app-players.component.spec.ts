import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlayersComponent } from './app-players.component';

describe('AppPlayersComponent', () => {
  let component: AppPlayersComponent;
  let fixture: ComponentFixture<AppPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
