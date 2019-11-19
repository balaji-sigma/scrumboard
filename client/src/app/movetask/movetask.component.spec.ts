import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovetaskComponent } from './movetask.component';

describe('MovetaskComponent', () => {
  let component: MovetaskComponent;
  let fixture: ComponentFixture<MovetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
