import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingmainComponent } from './meetingmain.component';

describe('MeetingmainComponent', () => {
  let component: MeetingmainComponent;
  let fixture: ComponentFixture<MeetingmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
