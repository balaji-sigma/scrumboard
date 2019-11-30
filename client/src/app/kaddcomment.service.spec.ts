import { TestBed } from '@angular/core/testing';

import { KaddcommentService } from './kaddcomment.service';

describe('KaddcommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KaddcommentService = TestBed.get(KaddcommentService);
    expect(service).toBeTruthy();
  });
});
