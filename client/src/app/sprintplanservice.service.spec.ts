import { TestBed } from '@angular/core/testing';

import { SprintplanserviceService } from './sprintplanservice.service';

describe('SprintplanserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SprintplanserviceService = TestBed.get(SprintplanserviceService);
    expect(service).toBeTruthy();
  });
});
