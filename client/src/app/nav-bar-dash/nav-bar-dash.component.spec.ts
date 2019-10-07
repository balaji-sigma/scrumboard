import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDashComponent } from './nav-bar-dash.component';

describe('NavBarDashComponent', () => {
  let component: NavBarDashComponent;
  let fixture: ComponentFixture<NavBarDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
