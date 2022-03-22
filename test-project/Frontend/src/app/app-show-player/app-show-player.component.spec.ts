import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowPlayerComponent } from './app-show-player.component';

describe('AppShowPlayerComponent', () => {
  let component: AppShowPlayerComponent;
  let fixture: ComponentFixture<AppShowPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShowPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
