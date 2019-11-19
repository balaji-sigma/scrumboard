import { TestBed } from '@angular/core/testing';

import { MovetaskserService } from './movetaskser.service';

describe('MovetaskserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovetaskserService = TestBed.get(MovetaskserService);
    expect(service).toBeTruthy();
  });
});
