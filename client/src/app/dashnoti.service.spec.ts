import { TestBed } from '@angular/core/testing';

import { DashnotiService } from './dashnoti.service';

describe('DashnotiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashnotiService = TestBed.get(DashnotiService);
    expect(service).toBeTruthy();
  });
});
