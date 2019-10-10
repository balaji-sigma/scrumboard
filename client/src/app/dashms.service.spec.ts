import { TestBed } from '@angular/core/testing';

import { DashmsService } from './dashms.service';

describe('DashmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashmsService = TestBed.get(DashmsService);
    expect(service).toBeTruthy();
  });
});
