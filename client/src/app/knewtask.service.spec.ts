import { TestBed } from '@angular/core/testing';

import { KnewtaskService } from './knewtask.service';

describe('KnewtaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnewtaskService = TestBed.get(KnewtaskService);
    expect(service).toBeTruthy();
  });
});
