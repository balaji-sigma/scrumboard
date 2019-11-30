import { TestBed } from '@angular/core/testing';

import { NewprojserviceService } from './newprojservice.service';

describe('NewprojserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewprojserviceService = TestBed.get(NewprojserviceService);
    expect(service).toBeTruthy();
  });
});
