import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasprintretroComponent } from './diasprintretro.component';

describe('DiasprintretroComponent', () => {
  let component: DiasprintretroComponent;
  let fixture: ComponentFixture<DiasprintretroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasprintretroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasprintretroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
