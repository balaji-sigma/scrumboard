import { TestBed } from '@angular/core/testing';

import { DailstanmeetserviceService } from './dailstanmeetservice.service';

describe('DailstanmeetserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailstanmeetserviceService = TestBed.get(DailstanmeetserviceService);
    expect(service).toBeTruthy();
  });
});
