import { TestBed } from '@angular/core/testing';

import { DashusService } from './dashus.service';

describe('DashusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashusService = TestBed.get(DashusService);
    expect(service).toBeTruthy();
  });
});
