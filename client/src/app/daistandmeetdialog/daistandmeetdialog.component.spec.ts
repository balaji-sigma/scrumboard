import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaistandmeetdialogComponent } from './daistandmeetdialog.component';

describe('DaistandmeetdialogComponent', () => {
  let component: DaistandmeetdialogComponent;
  let fixture: ComponentFixture<DaistandmeetdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaistandmeetdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaistandmeetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
