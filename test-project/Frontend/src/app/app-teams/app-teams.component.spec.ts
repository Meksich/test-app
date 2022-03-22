import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTeamsComponent } from './app-teams.component';

describe('AppTeamsComponent', () => {
  let component: AppTeamsComponent;
  let fixture: ComponentFixture<AppTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
