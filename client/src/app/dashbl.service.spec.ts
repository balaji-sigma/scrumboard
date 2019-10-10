import { TestBed } from '@angular/core/testing';

import { DashblService } from './dashbl.service';

describe('DashblService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashblService = TestBed.get(DashblService);
    expect(service).toBeTruthy();
  });
});
