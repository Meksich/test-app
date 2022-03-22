import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowTeamComponent } from './app-show-team.component';

describe('AppShowTeamComponent', () => {
  let component: AppShowTeamComponent;
  let fixture: ComponentFixture<AppShowTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShowTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
