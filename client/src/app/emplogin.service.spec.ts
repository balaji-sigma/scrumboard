import { TestBed } from '@angular/core/testing';

import { EmploginService } from './emplogin.service';

describe('EmploginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmploginService = TestBed.get(EmploginService);
    expect(service).toBeTruthy();
  });
});
