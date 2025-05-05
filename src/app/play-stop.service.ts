import {inject, Injectable} from '@angular/core';
import {BeatMachineService} from './beat-machine.service';

@Injectable({
  providedIn: 'root'
})
export class PlayStopService {
  bpmInMs:number  = 150
  play: boolean | (() => void) = false
  beatMachineService:BeatMachineService = inject(BeatMachineService);

  constructor() {}

  playStop() {
      if (this.play) {
        // @ts-ignore
        this.play()
        this.play = false
        this.beatMachineService.resetCounter();
      } else {
        this.play = this.intervalTimer(this.bpmInMs)
      }
  }

  intervalTimer(interval = 500) {
    let counter = 1;
    // @ts-ignore
    let timeoutId;
    const startTime = Date.now();
    const main = () => {
      const nowTime = Date.now();
      const nextTime = startTime + counter * interval;
      timeoutId = setTimeout(main, interval - (nowTime - nextTime));
      console.log('deviation', nowTime - nextTime);
      counter += 1;
      this.step();
    }
    timeoutId = setTimeout(main, interval);
    return () => {
      // @ts-ignore
      clearTimeout(timeoutId);
    };
  }

  step(){
    this.beatMachineService.doBeat();
  }
}
