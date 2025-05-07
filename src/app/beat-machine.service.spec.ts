import {TestBed} from '@angular/core/testing';

import {BeatMachineService} from './beat-machine.service';

describe('BeatMachineService', () => {
  let service: BeatMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeatMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
