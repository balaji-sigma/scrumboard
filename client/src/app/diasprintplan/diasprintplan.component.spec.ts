import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasprintplanComponent } from './diasprintplan.component';

describe('DiasprintplanComponent', () => {
  let component: DiasprintplanComponent;
  let fixture: ComponentFixture<DiasprintplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasprintplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasprintplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
