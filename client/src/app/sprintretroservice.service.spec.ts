import { TestBed } from '@angular/core/testing';

import { SprintretroserviceService } from './sprintretroservice.service';

describe('SprintretroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintretroserviceService = TestBed.get(SprintretroserviceService);
    expect(service).toBeTruthy();
  });
});
