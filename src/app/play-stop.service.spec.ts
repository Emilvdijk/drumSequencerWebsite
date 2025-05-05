import { TestBed } from '@angular/core/testing';

import { PlayStopService } from './play-stop.service';

describe('PlayStopService', () => {
  let service: PlayStopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayStopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
