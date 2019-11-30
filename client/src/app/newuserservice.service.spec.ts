import { TestBed } from '@angular/core/testing';

import { NewuserserviceService } from './newuserservice.service';

describe('NewuserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewuserserviceService = TestBed.get(NewuserserviceService);
    expect(service).toBeTruthy();
  });
});
