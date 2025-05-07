import { TestBed } from '@angular/core/testing';

import { BarsService } from './bars.service';

describe('BarService', () => {
  let service: BarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
